// --- API Keys (Replace with your actual keys) ---
// IMPORTANT: Replace these with your real keys for data to load!
const FINNHUB_API_KEY = 'd3blnapr01qqg7bv52q0d3blnapr01qqg7bv52qg'; // Your Finnhub key
const COINGECKO_API_KEY = 'CG-LrfyP92837UmPZq2T2AV3V2z'; // Your CoinGecko key (Note: CoinGecko's public API usually doesn't need a key for basic calls)

// --- Helper function to format numbers ---
function formatPrice(price) {
    if (price === null || price === undefined) return 'N/A';
    // Decide on fixed decimal places based on magnitude
    if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 1) return price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 });
    return price.toLocaleString('en-US', { minimumFractionDigits: 6, maximumFractionDigits: 6 }); // For very small crypto prices
}

function formatPercentage(percentage) {
    if (percentage === null || percentage === undefined) return 'N/A';
    return `${percentage.toFixed(2)}%`;
}

// --- Fetch data for stocks using Finnhub ---
async function fetchStockData(symbol) {
    try {
        const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`);
        if (!response.ok) {
            throw new Error(`Finnhub HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Finnhub quote: c=current, dp=percent change, pc=previous close
        const currentPrice = data.c;
        const percentChange = data.dp; // This is the daily percent change

        return { currentPrice, percentChange };
    } catch (error) {
        console.error(`Error fetching Finnhub data for ${symbol}:`, error);
        return { currentPrice: null, percentChange: null };
    }
}

// --- Fetch data for cryptocurrencies using CoinGecko ---
async function fetchCryptoData(coinId) {
    try {
        // Example: Bitcoin's ID on CoinGecko is 'bitcoin'
        // For Dogecoin it's 'dogecoin', Ethereum is 'ethereum'
        // CoinGecko's simple price endpoint is usually public and doesn't require a key directly in the URL,
        // but it's good practice to keep the const even if not used here for future-proofing or other endpoints.
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_24hr_change=true`);
        if (!response.ok) {
            throw new Error(`CoinGecko HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const coinData = data[coinId];

        if (coinData) {
            const currentPrice = coinData.usd;
            const percentChange24h = coinData.usd_24hr_change;
            return { currentPrice, percentChange: percentChange24h };
        } else {
            console.warn(`No data found for CoinGecko ID: ${coinId}`);
            return { currentPrice: null, percentChange: null };
        }
    } catch (error) {
        console.error(`Error fetching CoinGecko data for ${coinId}:`, error);
        return { currentPrice: null, percentChange: null };
    }
}

// --- Update UI elements ---
async function updateWatchlist() {
    const watchlistCards = document.querySelectorAll('.watchlist-card');

    for (const card of watchlistCards) {
        const symbol = card.dataset.symbol; // e.g., "BTC/USD", "NDAQ100", "TSLA"
        const assetPriceElem = card.querySelector('[data-price]');
        const assetChangePercentElem = card.querySelector('[data-change-percent]');
        const miniChartIcon = card.querySelector('.mini-chart i');

        let currentPrice = null;
        let percentChange = null;

        // Reset elements to loading state
        assetPriceElem.textContent = 'Loading...';
        assetChangePercentElem.textContent = 'N/A';
        card.querySelector('.asset-change').classList.remove('positive', 'negative');
        miniChartIcon.className = 'fas fa-chart-line'; // Reset icon class

        if (symbol.includes('/USD')) { // Crypto
            const coinIdMap = {
                'BTC/USD': 'bitcoin',
                'DOGE/USD': 'dogecoin',
                'ETH/USD': 'ethereum'
            };
            const coinId = coinIdMap[symbol];
            if (coinId) {
                ({ currentPrice, percentChange } = await fetchCryptoData(coinId));
            }
        } else { // Stock
            ({ currentPrice, percentChange } = await fetchStockData(symbol));
        }

        // Update price
        if (currentPrice !== null) {
            assetPriceElem.textContent = formatPrice(currentPrice);
        } else {
            assetPriceElem.textContent = 'Error'; // Or 'N/A'
        }

        // Update percentage change
        if (percentChange !== null) {
            assetChangePercentElem.textContent = formatPercentage(percentChange);
            // Apply color and chart icon direction
            if (percentChange >= 0) {
                card.querySelector('.asset-change').classList.add('positive');
            } else {
                card.querySelector('.asset-change').classList.add('negative');
                miniChartIcon.classList.add('fa-flip-vertical');
            }
        } else {
            assetChangePercentElem.textContent = 'N/A';
        }
    }
}

// --- Initial load and periodic updates ---
function onReady(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

onReady(() => {
    updateWatchlist(); // Fetch data on page load

    // Update data every 30 seconds (adjust as needed for API rate limits)
    setInterval(updateWatchlist, 30000);

    // Make toggle switches functional (purely UI, no API impact)
    document.querySelectorAll('.switch input').forEach(toggle => {
        toggle.addEventListener('change', (event) => {
            const card = event.target.closest('.watchlist-card');
            if (event.target.checked) {
                console.log(`Tracking enabled for ${card.dataset.symbol}`);
                // In a real app, you'd save this preference to local storage or a backend
            } else {
                console.log(`Tracking disabled for ${card.dataset.symbol}`);
                // In a real app, you'd save this preference
            }
        });
    });

    // Add New Asset button (placeholder functionality)
    document.querySelector('.add-asset-button').addEventListener('click', () => {
        alert('Add New Asset functionality coming soon!');
        // Here you would typically open a modal or navigate to an "Add Asset" page
    });

    // Timeframe selector (placeholder functionality)
    document.querySelectorAll('.timeframe-button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all
            document.querySelectorAll('.timeframe-button').forEach(btn => btn.classList.remove('active'));
            // Add active to clicked button
            button.classList.add('active');
            console.log(`Timeframe selected: ${button.textContent}`);
            // In a real app, this would trigger a chart data refresh for the selected timeframe
        });
    });
});
