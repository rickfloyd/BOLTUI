// validate-coingecko-ids.js
// Standalone Node.js script to validate a list of tokens against CoinGecko's API.
// Usage: node tools/validate-coingecko-ids.js

const https = require('https');
const { utilityTokens } = require('../src/data/utility-tokens.ts'); // Adjust path as needed

const BATCH_SIZE = 10;
const BATCH_DELAY_MS = 1200; // ~50 requests per minute to stay under free tier limits

const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY; // Optional, for higher rate limits

// --- Helper Functions ---

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

functionapiRequest(path) {
    const options = {
        hostname: 'api.coingecko.com',
        path: `/api/v3${path}`,
        method: 'GET',
        headers: {
            'User-Agent': 'CoinGecko-ID-Validator/1.0',
            'Accept': 'application/json',
            ...(COINGECKO_API_KEY && { 'x-cg-demo-api-key': COINGECKO_API_KEY }),
        },
        timeout: 10000,
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';
            if (res.statusCode === 429) {
                // Rate limited, signal to retry
                const retryAfter = res.headers['retry-after'] ? parseInt(res.headers['retry-after'], 10) * 1000 : BATCH_DELAY_MS * 2;
                return resolve({ status: 'RATE_LIMITED', retryAfter });
            }
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                try {
                    resolve({ status: res.statusCode, body: JSON.parse(data) });
                } catch (e) {
                    reject(new Error(`Failed to parse JSON response for path: ${path}. Response: ${data}`));
                }
            });
        });

        req.on('timeout', () => {
            req.destroy();
            reject(new Error(`Request timed out for path: ${path}`));
        });
        req.on('error', (e) => reject(e));
        req.end();
    });
}

function sanitizeString(str) {
    return str.toLowerCase().trim();
}

// --- Main Validation Logic ---

async function validateToken(token, allCoinsList) {
    process.stdout.write(`Validating ${token.symbol} (${token.apiId})... `);

    // 1. Primary Check: GET /coins/{id}
    const coinDataRes = await apiRequest(`/coins/${token.apiId}`);
    if (coinDataRes.status === 200) {
        const isSymbolMatch = sanitizeString(coinDataRes.body.symbol) === sanitizeString(token.symbol);
        const isNameMatch = sanitizeString(coinDataRes.body.name) === sanitizeString(token.name);

        if (isSymbolMatch && isNameMatch) {
            console.log('✅ OK');
            return { status: 'valid', token };
        } else {
             console.log('❌ MISMATCH (ID exists but data differs)');
            // Fall through to search if data doesn't match
        }
    } else {
        console.log(`- ID not found (${coinDataRes.status})`);
    }

    // 2. Secondary Check: Search by name if ID fails
    const searchRes = await apiRequest(`/search?query=${encodeURIComponent(token.name)}`);
    const suggestions = [];
    if (searchRes.status === 200 && searchRes.body.coins) {
        suggestions.push(...searchRes.body.coins.map(c => ({ id: c.id, name: c.name, symbol: c.symbol, score: 1.0 })));
    }

    // 3. Fallback: Full list scan if search is inconclusive
    const directSymbolMatch = allCoinsList.find(c => sanitizeString(c.symbol) === sanitizeString(token.symbol));
    if (directSymbolMatch && !suggestions.some(s => s.id === directSymbolMatch.id)) {
        suggestions.push({ ...directSymbolMatch, score: 0.5 });
    }

    console.log(`⚠️ Suggestions found: ${suggestions.length}`);
    return { status: 'mismatch', token, suggestions: suggestions.slice(0, 5) };
}

// --- Runner ---

async function main() {
    console.log('--- 🚀 Starting CoinGecko ID Validation ---');
    console.log(`Found ${utilityTokens.length} tokens to validate.`);

    console.log('\nFetching full coin list for fallback matching...');
    const allCoinsListRes = await apiRequest('/coins/list');
    if (allCoinsListRes.status !== 200) {
        console.error('❌ FATAL: Could not fetch the master coin list from CoinGecko. Aborting.');
        return;
    }
    const allCoinsList = allCoinsListRes.body;
    console.log(`✅ Fetched ${allCoinsList.length} total coins.`);

    const report = {
        valid: [],
        mismatches: [],
    };

    for (let i = 0; i < utilityTokens.length; i += BATCH_SIZE) {
        const batch = utilityTokens.slice(i, i + BATCH_SIZE);
        console.log(`\n--- Processing Batch ${i / BATCH_SIZE + 1}/${Math.ceil(utilityTokens.length / BATCH_SIZE)} ---`);

        const batchPromises = batch.map(token => validateToken(token, allCoinsList));
        const results = await Promise.all(batchPromises);

        results.forEach(res => {
            if (res.status === 'valid') {
                report.valid.push(res.token);
            } else {
                report.mismatches.push({ token: res.token, suggestions: res.suggestions });
            }
        });

        if (i + BATCH_SIZE < utilityTokens.length) {
            console.log(`\n...delaying ${BATCH_DELAY_MS}ms to respect rate limits...`);
            await sleep(BATCH_DELAY_MS);
        }
    }

    console.log('\n\n--- 📊 Validation Report ---');
    console.log(`\n✅ ${report.valid.length} Valid Entries`);
    console.log(`\n⚠️ ${report.mismatches.length} Mismatches Found`);
    if (report.mismatches.length > 0) {
        console.log('\n--- Mismatch Details ---');
        report.mismatches.forEach(({ token, suggestions }) => {
            console.log(`\n- Original: ${token.name} (${token.symbol}) -> ID: "${token.apiId}"`);
            if (suggestions && suggestions.length > 0) {
                console.log('  Suggestions:');
                suggestions.forEach(s => {
                    console.log(`    - ID: "${s.id}", Name: "${s.name}", Symbol: "${s.symbol}"`);
                });
            } else {
                console.log('  No suggestions found.');
            }
        });
    }

    console.log('\n--- ✅ Validation Complete ---');
}

main().catch(console.error);
