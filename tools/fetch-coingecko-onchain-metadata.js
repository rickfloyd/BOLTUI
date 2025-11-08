/**
 * fetch-coingecko-onchain-metadata.js
 *
 * Usage:
 *   1) Prepare an input JSON file (example below) named tokens.json or pass a path as the first arg.
 *   2) Run: node fetch-coingecko-onchain-metadata.js [path/to/tokens.json]
 *
 * Input format (tokens.json):
 * [
 *   { "chain": "ethereum", "contract": "0x...1", "note": "USDC on Ethereum" },
 *   { "chain": "binance-smart-chain", "contract": "0x...2", "note": "BEP-20 example" },
 *   { "chain": "polygon-pos", "contract": "0x...3", "note": "Polygon token" }
 * ]
 *
 * Notes on chain values:
 *  - Use CoinGecko platform ids (examples): "ethereum", "binance-smart-chain", "polygon-pos", "avalanche", "arbitrum-one", "optimistic-ethereum", "fantom", "solana" (Solana tokens require different handling; see comments).
 *
 * Output:
 *   ./coingecko-onchain-metadata-YYYYMMDDTHHMMSS.json
 *
 * Requirements:
 *  - Node 18+ recommended (global fetch). For Node <18, install node-fetch and uncomment the require block.
 *
 * Behavior:
 *  - For each item, calls: GET /coins/{platform}/contract/{contract}
 *  - On success returns canonical fields: id, name, symbol, links.homepage[0], links.twitter_screen_name, links.telegram_channel_identifier, description.en, platforms
 *  - Retries transient errors with exponential backoff
 *  - Polite rate limiting: configurable concurrency, batch delay
 */

'use strict';

// If you're on Node <18, uncomment the next two lines and install node-fetch:
// const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));
// const AbortController = require('abort-controller');

const fs = require('fs');
const path = require('path');

const COINGECKO_BASE = 'https://api.coingecko.com/api/v3';
const DEFAULT_INPUT = path.join(process.cwd(), 'tokens.json');
const OUTPUT_DIR = process.cwd();

const CONCURRENCY = 6; // parallel requests
const BATCH_DELAY_MS = 1200; // pause between batches
const REQUEST_TIMEOUT_MS = 15000;
const MAX_RETRIES = 4;
const RETRY_BASE_MS = 800;

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

async function fetchWithTimeout(url, opts = {}, timeoutMs = REQUEST_TIMEOUT_MS) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal, ...opts });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

function normalizeContract(addr) {
  if (!addr) return addr;
  return addr.trim();
}

function makeContractUrl(platform, contract) {
  // CoinGecko on-chain token endpoint:
  // /coins/{platform}/contract/{contract_address}
  // Note: for some chains (e.g., solana) CoinGecko uses different token listings; this covers EVM-compatible platforms.
  return `${COINGECKO_BASE}/coins/${encodeURIComponent(platform)}/contract/${encodeURIComponent(contract)}`;
}

async function getTokenMetadata(platform, contract) {
  const url = makeContractUrl(platform, contract);
  let attempt = 0;
  while (true) {
    attempt++;
    try {
      const res = await fetchWithTimeout(url, { headers: { Accept: 'application/json' } });
      if (res.status === 404) {
        // Not found — no point retrying
        const txt = await res.text().catch(() => '');
        return { ok: false, status: 404, error: 'not_found', http: 404, body: txt };
      }
      if (res.status >= 500 && attempt <= MAX_RETRIES) {
        // transient server error -> retry
        const wait = RETRY_BASE_MS * Math.pow(2, attempt - 1);
        await sleep(wait);
        continue;
      }
      if (!res.ok) {
        const txt = await res.text().catch(() => '');
        return { ok: false, status: res.status, error: 'http_error', http: res.status, body: txt };
      }
      const data = await res.json();
      return { ok: true, data };
    } catch (err) {
      // network / timeout / abort
      if (attempt <= MAX_RETRIES) {
        const wait = RETRY_BASE_MS * Math.pow(2, attempt - 1);
        await sleep(wait);
        continue;
      }
      return { ok: false, status: 'network_error', error: err.message };
    }
  }
}

function extractFieldsFromCoinGecko(data) {
  // defensive: CoinGecko returns different shapes; we extract canonical fields safely
  const links = data.links || {};
  const homepage = Array.isArray(links.homepage) ? (links.homepage[0] || null) : (links.homepage || null);
  const twitter = links.twitter_screen_name || null;
  const telegram = links.telegram_channel_identifier || null;
  const description = (data.description && data.description.en) ? data.description.en : null;

  return {
    coingecko_id: data.id || null,
    name: data.name || null,
    symbol: data.symbol || null,
    homepage,
    twitter,
    telegram,
    description,
    platforms: data.platforms || {},
    market_data: data.market_data ? {
      current_price_usd: data.market_data.current_price?.usd ?? null,
      market_cap_usd: data.market_data.market_cap?.usd ?? null,
      total_volume_usd: data.market_data.total_volume?.usd ?? null
    } : null
  };
}

async function processBatch(items) {
  // items: [{ chain, contract, note }]
  const results = [];
  const promises = items.map(async (it) => {
    const platform = it.chain;
    const contract = normalizeContract(it.contract);
    if (!platform || !contract) {
      return { input: it, ok: false, error: 'missing_platform_or_contract' };
    }

    const res = await getTokenMetadata(platform, contract);
    if (!res.ok) {
      return { input: it, ok: false, error: res.error || 'unknown', status: res.status, body: res.body || null };
    }

    const out = extractFieldsFromCoinGecko(res.data);
    // attach input metadata for traceability
    out._input = it;
    return { input: it, ok: true, output: out };
  });

  // concurrency control: run in parallel but limit total concurrency externally
  const settled = await Promise.all(promises);
  for (const s of settled) results.push(s);
  return results;
}

async function run(inputPath) {
  const infile = inputPath || DEFAULT_INPUT;
  if (!fs.existsSync(infile)) {
    console.error(`Input file not found: ${infile}`);
    console.error('Create a JSON file like tokens.json with: [{ "chain":"ethereum", "contract":"0x...", "note":"desc" }, ...]');
    process.exit(2);
  }

  const raw = fs.readFileSync(infile, 'utf8');
  let tokens;
  try {
    tokens = JSON.parse(raw);
    if (!Array.isArray(tokens)) throw new Error('input JSON must be an array');
  } catch (err) {
    console.error('Failed to parse input JSON:', err.message);
    process.exit(2);
  }

  console.log(`Loaded ${tokens.length} items from ${infile}`);

  const out = [];
  for (let i = 0; i < tokens.length; i += CONCURRENCY) {
    const batch = tokens.slice(i, i + CONCURRENCY);
    console.log(`Processing items ${i + 1}..${i + batch.length}...`);
    const batchRes = await processBatch(batch);
    out.push(...batchRes);
    if (i + CONCURRENCY < tokens.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  const now = new Date();
  const filename = `coingecko-onchain-metadata-${now.toISOString().replace(/[:.]/g,'-')}.json`;
  const outPath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(outPath, JSON.stringify({ fetched_at: now.toISOString(), count: out.length, results: out }, null, 2), 'utf8');
  console.log(`Wrote ${out.length} results to ${filename}`);
  return outPath;
}

// CLI
if (require.main === module) {
  const arg = process.argv[2];
  run(arg).catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
  });
}

module.exports = { run };
