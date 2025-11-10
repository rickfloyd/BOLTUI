/**
 * fetch-coingecko-yield-farming.js
 *
 * Purpose
 * - Fetch the full list of coins in CoinGecko category "yield-farming"
 * - Retrieve per-coin details (name, symbol, coingecko id, market cap rank, price, and platforms/contracts)
 * - Save result to ./yield-farming-coins-YYYYMMDD.json
 *
 * Usage
 * - Node 18+ recommended (uses global fetch). If using older Node, install node-fetch and adjust.
 * - Run: node fetch-coingecko-yield-farming.js
 *
 * Notes
 * - CoinGecko public API rate limits apply; script batches requests with delays to be polite.
 * - This script is read-only and requires no API key.
 */

const fs = require("fs");
const path = require("path");

const COINGECKO_BASE = "https://api.coingecko.com/api/v3";
const CATEGORY = "yield-farming";
const PER_PAGE = 250; // max per page
const BATCH_SIZE = 10; // number of detail fetches in parallel
const BATCH_DELAY_MS = 1500; // delay between batches to avoid rate limits
const DETAIL_DELAY_MS = 500; // small stagger inside batch

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchJson(url, opts = {}) {
  const res = await fetch(url, {
    headers: { Accept: "application/json" },
    ...opts,
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Fetch ${url} failed: ${res.status} ${txt}`);
  }
  return res.json();
}

async function fetchCategoryList() {
  let page = 1;
  const all = [];
  while (true) {
    const url = `${COINGECKO_BASE}/coins/markets?vs_currency=usd&category=${encodeURIComponent(CATEGORY)}&order=market_cap_desc&per_page=${PER_PAGE}&page=${page}&sparkline=false`;
    console.log(`Fetching category page ${page}...`);
    const data = await fetchJson(url);
    if (!Array.isArray(data) || data.length === 0) break;
    all.push(...data);
    if (data.length < PER_PAGE) break;
    page++;
    await sleep(800);
  }
  return all;
}

async function fetchCoinDetails(id) {
  const url = `${COINGECKO_BASE}/coins/${encodeURIComponent(id)}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
  const data = await fetchJson(url);
  return {
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    market_cap_rank: data.market_cap_rank,
    homepage:
      (data.links && data.links.homepage && data.links.homepage[0]) || null,
    short_description:
      data.description && data.description.en
        ? data.description.en.replace(/\s+/g, " ").slice(0, 300)
        : null,
    platforms: data.platforms || {}, // map chain->contract
    market_data: {
      current_price_usd: data.market_data?.current_price?.usd ?? null,
      market_cap_usd: data.market_data?.market_cap?.usd ?? null,
      total_volume_usd: data.market_data?.total_volume?.usd ?? null,
      circulating_supply: data.market_data?.circulating_supply ?? null,
      total_supply: data.market_data?.total_supply ?? null,
    },
  };
}

(async () => {
  try {
    const categoryList = await fetchCategoryList();
    console.log(`Found ${categoryList.length} items in category ${CATEGORY}.`);
    const ids = categoryList.map((item) => item.id);

    const results = [];
    for (let i = 0; i < ids.length; i += BATCH_SIZE) {
      const batch = ids.slice(i, i + BATCH_SIZE);
      console.log(
        `Processing batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} items)...`,
      );
      // fetch details in parallel with small staggering to avoid bursts
      const promises = batch.map(async (id, idx) => {
        try {
          // stagger individual requests slightly
          await sleep(DETAIL_DELAY_MS * idx);
          console.log(`  Fetching details for ${id}...`);
          const details = await fetchCoinDetails(id);
          return { ok: true, details };
        } catch (err) {
          console.error(`  Error fetching ${id}: ${err.message}`);
          return { ok: false, id, error: err.message };
        }
      });

      const batchResults = await Promise.all(promises);
      for (const br of batchResults) {
        if (br.ok) results.push(br.details);
        else results.push({ id: br.id, error: br.error });
      }

      // polite pause between batches
      if (i + BATCH_SIZE < ids.length) await sleep(BATCH_DELAY_MS);
    }

    // save snapshot
    const now = new Date();
    const filename = `yield-farming-coins-${now.toISOString().slice(0, 10)}.json`;
    const outPath = path.join(process.cwd(), filename);
    fs.writeFileSync(
      outPath,
      JSON.stringify(
        {
          fetched_at: now.toISOString(),
          category: CATEGORY,
          count: results.length,
          results,
        },
        null,
        2,
      ),
      { encoding: "utf8" },
    );
    console.log(`Saved ${results.length} records to ${filename}`);
  } catch (err) {
    console.error("Fatal error:", err);
    process.exit(1);
  }
})();
