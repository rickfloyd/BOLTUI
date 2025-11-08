// tools/validateProviders.js
// Standalone Node.js script to validate API provider configurations.
// Usage: node tools/validateProviders.js

require('dotenv').config();
const https = require('https');

// --- Configuration ---
// Add new providers here. `secretName` is the key in your .env or secrets manager.
// `healthCheck` defines a non-destructive API call to test connectivity and auth.
const PROVIDERS_TO_VALIDATE = [
    {
        name: 'TwelveData',
        secretName: 'TWELVEDATA_API_KEY',
        healthCheck: {
            hostname: 'api.twelvedata.com',
            path: '/stocks?symbol=AAPL&exchange=NASDAQ', // A simple, low-cost endpoint
            method: 'GET',
        }
    },
    {
        name: 'Finnhub',
        secretName: 'FINNHUB_API_KEY',
        healthCheck: {
            hostname: 'finnhub.io',
            path: '/api/v1/quote?symbol=AAPL&token=', // Token will be appended
            method: 'GET',
        }
    },
    {
        name: 'Polygon.io',
        secretName: 'POLYGON_API_KEY',
        healthCheck: {
            hostname: 'api.polygon.io',
            path: '/v3/reference/tickers/AAPL?apiKey=', // Key will be appended
            method: 'GET',
        }
    },
    {
        name: 'MarketStack',
        secretName: 'MARKETSTACK_API_KEY',
        healthCheck: {
            // MarketStack uses http for free plans, but production should always use https
            hostname: 'api.marketstack.com',
            path: '/v1/eod?access_key=', // Key will be appended
            method: 'GET',
            params: '&symbols=AAPL&limit=1'
        }
    },
     {
        name: 'CoinGecko',
        secretName: 'COINGECKO_API_KEY',
        healthCheck: {
            hostname: 'api.coingecko.com',
            path: '/api/v3/ping', // Their dedicated health-check endpoint
            method: 'GET',
             headers: { 'x-cg-demo-api-key': '' } // Key will be added here
        }
    }
];

// --- Validation Logic ---

// A simple mock for a secrets loader. Replace with your actual secrets.js module.
const secrets = {
    getSecret: (key) => {
        return process.env[key] || null;
    }
};

async function runHealthCheck(provider) {
    const apiKey = secrets.getSecret(provider.secretName);
    if (!apiKey) {
        return { secretConfigured: false, test: null };
    }

    const options = {
        hostname: provider.healthCheck.hostname,
        path: provider.healthCheck.path,
        method: provider.healthCheck.method,
        headers: { 'User-Agent': 'QuantumCharts-Validation-Tool/1.0' },
        timeout: 5000, // 5-second timeout
    };

    // Append API key based on provider's specific needs
    if (provider.name === 'Finnhub') {
        options.path += apiKey;
    } else if (provider.name === 'Polygon.io') {
         options.path += apiKey;
    } else if (provider.name === 'MarketStack') {
        options.path += apiKey + (provider.healthCheck.params || '');
    } else if (provider.name === 'CoinGecko') {
        options.headers['x-cg-demo-api-key'] = apiKey;
    }


    return new Promise((resolve) => {
        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                let report = {
                    status: res.statusCode,
                    ok: res.statusCode >= 200 && res.statusCode < 300,
                    provider: provider.name,
                };
                if (res.statusCode === 429) {
                    report.reason = 'RATE_LIMIT';
                } else if (res.statusCode === 401 || res.statusCode === 403) {
                    report.reason = 'AUTH_FAIL';
                } else if (res.statusCode >= 500) {
                     report.reason = 'SERVER_ERROR';
                } else if (!report.ok) {
                    report.reason = 'PROVIDER_ERROR';
                }
                resolve({ secretConfigured: true, test: report });
            });
        });

        req.on('timeout', () => {
            req.destroy();
            resolve({ secretConfigured: true, test: { status: 'TIMEOUT', ok: false, provider: provider.name, reason: 'NETWORK_TIMEOUT' } });
        });

        req.on('error', (e) => {
            resolve({ secretConfigured: true, test: { status: 'ERROR', ok: false, provider: provider.name, reason: 'NETWORK_ERROR', message: e.message } });
        });

        req.end();
    });
}

async function main() {
    console.log('--- 🛡️  Running API Provider Validation Suite ---');
    const results = [];

    for (const provider of PROVIDERS_TO_VALIDATE) {
        process.stdout.write(`\n🔎 Validating ${provider.name}... `);
        const result = await runHealthCheck(provider);
        results.push({ provider: provider.name, ...result });
        if (!result.secretConfigured) {
            console.log('❌ Secret NOT FOUND');
        } else if (result.test && result.test.ok) {
            console.log('✅ OK');
        } else {
            console.log(`❌ FAILED`);
        }
    }

    console.log('\n\n--- 📊 Validation Report ---');
    results.forEach(r => {
        console.log(`\nProvider: ${r.provider}`);
        console.log(`  - Secret configured: ${r.secretConfigured ? 'YES' : 'NO'}`);
        if(r.test) {
            console.log(`  - Health Check: ${JSON.stringify(r.test)}`);
        }
        if (!r.secretConfigured) {
            console.log(`  - 💡 Tip: Ensure '${r.provider.secretName}' is set in your .env file or cloud secret store.`);
        } else if (r.test && r.test.reason === 'AUTH_FAIL') {
            console.log(`  - 💡 Tip: Authentication failed. Check if the API key is correct, active, and has the right permissions. Also check IP allowlists.`);
        } else if (r.test && r.test.reason === 'RATE_LIMIT') {
             console.log(`  - 💡 Tip: You're being rate-limited. Wait a bit or check your provider plan limits.`);
        } else if (r.test && r.test.reason && r.test.reason.startsWith('NETWORK')) {
             console.log(`  - 💡 Tip: A network error occurred. Check if the app has internet egress and can resolve '${r.provider.healthCheck.hostname}'.`);
        }
    });
    console.log('\n--- ✅ Validation Complete ---');
}

main();
