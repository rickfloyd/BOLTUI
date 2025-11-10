/**
 * fetch-coingecko-fan-tokens.js
 *
 * - Fetches CoinGecko's Fan Token category via /coins/markets?category=fan-tokens
 * - Fetches per-coin /coins/{id} details for website, social links, description, platforms, market_data
 * - Saves: fan-tokens-YYYY-MM-DD.json and fan-tokens-YYYY-MM-DD.csv
 *
 * Usage:
 *   node fetch-coingecko-fan-tokens.js
 *
 * Notes:
 * - Node 18+ recommended (global fetch). For older Node, install node-fetch and adapt fetch usage.
 * - Be polite to CoinGecko rate limits: script batches requests and includes backoff.
 * - The resulting JSON is the canonical list CoinGecko reports at runtime for the Fan Tokens category.
 */

const fs = require("fs");
const path = require("path");

const COINGECKO_BASE = "https://api.coingecko.com/api/v3";
const CATEGORY = "fan-tokens";
const PER_PAGE = 250;
const BATCH_SIZE = 8;
const BATCH_DELAY_MS = 1200;
const DETAIL_DELAY_MS = 300;
const OUTPUT_DIR = process.cwd();

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Fetch ${url} failed: ${res.status} ${txt}`);
  }
  return res.json();
}

async function fetchCategoryPage(page = 1) {
  const url = `${COINGECKO_BASE}/coins/markets?vs_currency=usd&category=${encodeURIComponent(CATEGORY)}&order=market_cap_desc&per_page=${PER_PAGE}&page=${page}&sparkline=false`;
  return fetchJson(url);
}

async function fetchCoinDetails(id) {
  const url = `${COINGECKO_BASE}/coins/${encodeURIComponent(id)}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`;
  return fetchJson(url);
}

function toCSVRow(obj) {
  // simple CSV escaping
  const esc = (s) =>
    typeof s === "string"
      ? `"${s.replace(/"/g, '""')}"`
      : s === null || s === undefined
        ? ""
        : String(s);
  return [
    esc(obj.coingecko_id),
    esc(obj.name),
    esc(obj.symbol),
    esc(obj.market_cap_rank),
    esc(obj.current_price_usd),
    esc(obj.market_cap_usd),
    esc(obj.homepage),
    esc(obj.twitter),
    esc(obj.telegram),
    esc(obj.description_short),
  ].join(",");
}

(async () => {
  try {
    // 1) Fetch category list (paged)
    let page = 1;
    const marketRows = [];
    while (true) {
      console.log(`Fetching category market page ${page}...`);
      const pageData = await fetchCategoryPage(page);
      if (!Array.isArray(pageData) || pageData.length === 0) break;
      marketRows.push(...pageData);
      if (pageData.length < PER_PAGE) break;
      page++;
      await sleep(800);
    }
    console.log(`Found ${marketRows.length} fan token market items.`);

    // 2) Fetch details for each coin by CoinGecko id (batched)
    const results = [];
    for (let i = 0; i < marketRows.length; i += BATCH_SIZE) {
      const batch = marketRows.slice(i, i + BATCH_SIZE);
      const promises = batch.map(async (m, idx) => {
        try {
          await sleep(DETAIL_DELAY_MS * idx);
          console.log(
            `  [${i + idx + 1}/${marketRows.length}] fetching details for ${m.id} (${m.symbol})`,
          );
          const details = await fetchCoinDetails(m.id);
          const homepage = details.links?.homepage?.[0] || null;
          const twitter = details.links?.twitter_screen_name || null;
          const telegram = details.links?.telegram_channel_identifier || null;
          const description_short = (details.description?.en || "")
            .replace(/\s+/g, " ")
            .slice(0, 300);
          return {
            coingecko_id: details.id,
            name: details.name,
            symbol: details.symbol,
            market_cap_rank: details.market_cap_rank || null,
            current_price_usd: details.market_data?.current_price?.usd ?? null,
            market_cap_usd: details.market_data?.market_cap?.usd ?? null,
            homepage,
            twitter,
            telegram,
            description_short,
            raw_platforms: details.platforms || {},
          };
        } catch (err) {
          console.error(`    failed ${m.id}: ${err.message}`);
          return {
            coingecko_id: m.id,
            name: m.name,
            symbol: m.symbol,
            error: err.message,
          };
        }
      });
      const batchRes = await Promise.all(promises);
      results.push(...batchRes);
      if (i + BATCH_SIZE < marketRows.length) await sleep(BATCH_DELAY_MS);
    }

    // 3) Write JSON and CSV
    const now = new Date();
    const date = now.toISOString().slice(0, 10);
    const jsonPath = path.join(OUTPUT_DIR, `fan-tokens-${date}.json`);
    fs.writeFileSync(
      jsonPath,
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
      "utf8",
    );
    console.log(`Wrote JSON -> ${jsonPath}`);

    const csvPath = path.join(OUTPUT_DIR, `fan-tokens-${date}.csv`);
    const header = [
      "coingecko_id",
      "name",
      "symbol",
      "market_cap_rank",
      "current_price_usd",
      "market_cap_usd",
      "homepage",
      "twitter",
      "telegram",
      "description_short",
    ].join(",");
    const csvLines = [header, ...results.map((r) => toCSVRow(r))].join("\n");
    fs.writeFileSync(csvPath, csvLines, "utf8");
    console.log(`Wrote CSV  -> ${csvPath}`);
  } catch (err) {
    console.error("Fatal error:", err);
    process.exit(1);
  }
})();
