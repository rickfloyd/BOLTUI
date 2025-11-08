/**
 * fetch-coingecko-lending.js
 *
 * Purpose
 * - Fetch the full list of coins in CoinGecko category "lending-borrowing"
 * - Retrieve per-coin details (name, symbol, coingecko id, market cap rank, current_price, and platforms/contracts)
 * - Save result to ./lending-borrowing-coins-YYYYMMDD.json
 *
 * Usage
 * - Node 18+ recommended (uses global fetch). If using older Node, install node-fetch and adjust.
 * - Run: node fetch-coingecko-lending.js
 *
 * Notes
 * - CoinGecko public API rate limits apply (use sensible delays if you adjust concurrency).
 * - This script is read-only and requires no API key.
 */

const fs = require('fs');
const path = require('path');

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';
const CATEGORY = 'lending-borrowing';
const PER_PAGE = 250; // max per page
const SLEEP_MS = 1200; // polite delay between detail calls to avoid rate limits

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function fetchJson(url, opts = {}) {
  const res = await fetch(url, { headers: { 'Accept': 'application/json' }, ...opts });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Fetch ${url} failed: ${res.status} ${txt}`);
  }
  return res.json();
}

async function fetchCategoryList() {
  // CoinGecko provides /coins/markets with category filter
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
  // extract useful fields
  return {
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    market_cap_rank: data.market_cap_rank,
    homepage: (data.links && data.links.homepage && data.links.homepage[0]) || null,
    description: (data.description && data.description.en) ? data.description.en.slice(0,300) : null,
    platforms: data.platforms || {}, // map of chain->contract
    market_data: {
      current_price_usd: data.market_data?.current_price?.usd ?? null,
      market_cap_usd: data.market_data?.market_cap?.usd ?? null,
      total_volume_usd: data.market_data?.total_volume?.usd ?? null,
      circulating_supply: data.market_data?.circulating_supply ?? null,
      total_supply: data.market_data?.total_supply ?? null
    }
  };
}

(async () => {
  try {
    const list = await fetchCategoryList();
    console.log(`Found ${list.length} items in category ${CATEGORY}.`);
    const results = [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const id = item.id;
      try {
        // polite delay to avoid rate limit spikes
        await sleep(SLEEP_MS);
        console.log(`[${i+1}/${list.length}] Fetching details for ${id} (${item.symbol})`);
        const details = await fetchCoinDetails(id);
        results.push(details);
      } catch (err) {
        console.error(`Error fetching details for ${id}:`, err.message);
        // push a minimal record to preserve ordering
        results.push({
          id,
          name: item.name,
          symbol: item.symbol,
          market_cap_rank: item.market_cap_rank ?? null,
          error: err.message
        });
      }
    }

    // save snapshot
    const now = new Date();
    const filename = `lending-borrowing-coins-${now.toISOString().slice(0,10)}.json`;
    const outPath = path.join(process.cwd(), filename);
    fs.writeFileSync(outPath, JSON.stringify({ fetched_at: now.toISOString(), category: CATEGORY, count: results.length, results }, null, 2), { encoding: 'utf8' });
    console.log(`Saved ${results.length} records to ${filename}`);
  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
})();
