export interface SyntheticAsset {
  name: string;
  symbol: string;
  issuer: string;
}

export const syntheticAssets: SyntheticAsset[] = [
  { name: "Synthetix sUSD", symbol: "sUSD", issuer: "Synthetix" },
  { name: "Synthetix sETH", symbol: "sETH", issuer: "Synthetix" },
  { name: "Synthetix sBTC", symbol: "sBTC", issuer: "Synthetix" },
  {
    name: "Synthetix SNX",
    symbol: "SNX",
    issuer: "Synthetix (governance/collateral)",
  },
  { name: "UMA synthetic USD", symbol: "UMAUSD", issuer: "UMA / UMA token" },
  {
    name: "UMA token",
    symbol: "UMA",
    issuer: "UMA (governance/oracle primitives)",
  },
  {
    name: "Mirror Protocol mAssets (e.g., mTSLA)",
    symbol: "mTSLA / mAAPL",
    issuer: "Mirror (Terra legacy / forks)",
  },
  { name: "Mirror MIR", symbol: "MIR", issuer: "Mirror (legacy)" },
  {
    name: "Metronome Synth ETH",
    symbol: "msETH / msUSD",
    issuer: "Metronome Synths",
  },
  {
    name: "Perpetual Protocol synths",
    symbol: "PERP derivatives",
    issuer: "Perpetual Protocol",
  },
  {
    name: "dHEDGE synthetic positions",
    symbol: "various sTokens",
    issuer: "dHEDGE / Synthetix integrations",
  },
  {
    name: "Synthetic.com synths",
    symbol: "(project-specific synths)",
    issuer: "Synthetic.com",
  },
  { name: "Frax synthetic assets", symbol: "FRAX", issuer: "Frax ecosystem" },
  { name: "Ethena synthetic dollar", symbol: "USDe", issuer: "Ethena" },
  { name: "Ethena ENA", symbol: "ENA", issuer: "Ethena (governance)" },
  {
    name: "Aavegotchi ghst-synths",
    symbol: "protocol-specific",
    issuer: "Aavegotchi/Aave integrations",
  },
  {
    name: "Peri Finance synths",
    symbol: "PERI / pUSD / pBTC",
    issuer: "Peri Finance (Synthetix-based)",
  },
  {
    name: "Neutrino USD",
    symbol: "nUSD",
    issuer: "Neutrino (Waves/Neutrino family)",
  },
  { name: "UMA Pax-like synths", symbol: "protocol-specific", issuer: "UMA" },
  {
    name: "Metavault synthetic assets",
    symbol: "mVault synths",
    issuer: "Metavault (examples)",
  },
  {
    name: "Synth sLINK / sDOT / sADA",
    symbol: "sLINK, sDOT, sADA",
    issuer: "Synthetix family",
  },
  {
    name: "Synthetic stable assets (sEUR, sJPY, sGBP)",
    symbol: "sEUR, sJPY, sGBP",
    issuer: "Synthetix / synth issuers",
  },
  {
    name: "Mirror mGOOGL / mNFLX",
    symbol: "mGOOGL / mNFLX",
    issuer: "Mirror-style synthetic stocks",
  },
  {
    name: "Tokenized stocks via Mirror forks",
    symbol: "various tickers",
    issuer: "Mirror forks (Avalanche, NEAR, etc.)",
  },
  {
    name: "Synthetix sDEFI (index synths)",
    symbol: "sDEFI / sDEFI-INDEX",
    issuer: "protocol indices",
  },
  {
    name: "PieDAO synthetic baskets",
    symbol: "DOUGH / pTokens",
    issuer: "PieDAO (tokenized baskets, synthetic-like)",
  },
  {
    name: "Perpetual DEX synthetic perpetual tokens",
    symbol: "perps on-chain",
    issuer: "Perpetual DEX projects",
  },
  {
    name: "Inverse / leveraged synthetics",
    symbol: "iBTC / iETH",
    issuer: "various derivatives protocols",
  },
  { name: "Metronome MSUSD", symbol: "MSUSD", issuer: "Metronome synth USD" },
  {
    name: "Mettalex synthetic commodities / futures tokens",
    symbol: "MTLX derivatives",
    issuer: "Mettalex",
  },
  {
    name: "Indigo Protocol synths",
    symbol: "INDY / synthetic products",
    issuer: "Indigo (synthetic structured products)",
  },
  {
    name: "Synthetix sFTSE / sNIKKEI",
    symbol: "index synths",
    issuer: "Synthetix index family",
  },
  {
    name: "Synthetix iETH / iBTC (inverse synths)",
    symbol: "iETH, iBTC",
    issuer: "Synthetix inverse line",
  },
  {
    name: "Synthetix sLINK (Chainlink price exposure)",
    symbol: "sLINK",
    issuer: "Synthetix",
  },
  {
    name: "Synthetix sEUR (synthetic euro)",
    symbol: "sEUR",
    issuer: "Synthetix",
  },
  {
    name: "BarnBridge tokenized yield derivatives",
    symbol: "BOND / STRD",
    issuer: "BarnBridge",
  },
  {
    name: "Tokenized commodities (synthetic gold/silver)",
    symbol: "mPAXG / sPAXG",
    issuer: "various synth issuers",
  },
  {
    name: "Pyth-based synthetic wrappers",
    symbol: "protocol-specific",
    issuer: "Pyth integrations",
  },
  {
    name: "Aave (liquidity-collateralized synths)",
    symbol: "aSynth variants",
    issuer: "Aave integrations",
  },
  {
    name: "REN synthetic BTC (renBTC derivative synths)",
    symbol: "renBTC / sRENBTC",
    issuer: "Ren + synth layers",
  },
  {
    name: "Injective synthetic derivative tokens",
    symbol: "iTokens",
    issuer: "Injective derivatives",
  },
  {
    name: "Mirror-style synthetic stablecoins on Terra forks",
    symbol: "mUSD / mStock variants",
    issuer: "Mirror forks",
  },
  {
    name: "Synthetix sAAPL / sAMZN (stock synths)",
    symbol: "sAAPL, sAMZN",
    issuer: "Synthetix exposure via oracles",
  },
  {
    name: "UMA synthetic options / derivatives tokens",
    symbol: "oTokens",
    issuer: "UMA derivatives",
  },
  {
    name: "Metavault MSynths",
    symbol: "MSynth family",
    issuer: "Metavault ecosystems",
  },
  {
    name: "Rari Fuse / Fei hybrid synth positions",
    symbol: "protocol-specific",
    issuer: "Rari / Fei experiments",
  },
  {
    name: "CurveLP derivative synthetic tokens",
    symbol: "crvLP-synths",
    issuer: "Curve + synth wrappers",
  },
  {
    name: "Synthetic real-world assets (RWA) tokens",
    symbol: "rToken / rUSD",
    issuer: "RWA platforms",
  },
  {
    name: "Set Protocol tokenized strategy synths",
    symbol: "SET-synths",
    issuer: "Set Protocol",
  },
  {
    name: "Cega / CegaFinance synthetic assets",
    symbol: "CEG-synth",
    issuer: "Cega-style synths",
  },
  {
    name: "Mirror mTSLA / mTWTR (example stock synths)",
    symbol: "mTSLA etc.",
    issuer: "Mirror family",
  },
  {
    name: "Synthetix sXAU (synthetic gold)",
    symbol: "sXAU",
    issuer: "Synthetix or commodity synth issuers",
  },
  {
    name: "Tokenized fiat synths (e.g., sGBP, sAUD)",
    symbol: "sGBP, sAUD",
    issuer: "Synthetix & others",
  },
  {
    name: "Metis synthetic derivatives",
    symbol: "protocol-specific",
    issuer: "Metis integrations",
  },
  {
    name: "Solv Protocol synthetic structured positions",
    symbol: "solv-synths",
    issuer: "Solv structured products",
  },
  {
    name: "Opium Protocol synthetic derivatives",
    symbol: "OPium derivatives",
    issuer: "Opium",
  },
  {
    name: "Saffron-style tranche synths",
    symbol: "tranche tokens",
    issuer: "Saffron-like",
  },
  {
    name: "Hegic-style covered synth option tokens",
    symbol: "option-synths",
    issuer: "Hegic or options-as-synth projects",
  },
  {
    name: "Trove/Collateralized synthetic stable tokens",
    symbol: "cUSD / cStable",
    issuer: "collateralized-synth frameworks",
  },
  {
    name: "Indexed synthetic tokens",
    symbol: "iTokens / DPI synths",
    issuer: "Index protocols",
  },
  {
    name: "Synthetix sBNB",
    symbol: "sBNB",
    issuer: "Synthetix (on BSC forks)",
  },
  {
    name: "Synthetix sMATIC",
    symbol: "sMATIC",
    issuer: "Synthetix or cross-chain issuers",
  },
  {
    name: "Mirror mCOIN (example regional stock synth)",
    symbol: "mCOIN",
    issuer: "Mirror forks",
  },
  {
    name: "Synthetic inverse index tokens",
    symbol: "invDPI / invETH",
    issuer: "various index/derivative projects",
  },
  {
    name: "Synthetix sTRX / sXRP (cross-chain synths)",
    symbol: "sTRX, sXRP",
    issuer: "Synthetix family",
  },
  {
    name: "Notional-style fixed-rate synth wrappers",
    symbol: "NOTE-synth",
    issuer: "Notional integrations",
  },
  {
    name: "Liquidity provider share synths",
    symbol: "lpSynth",
    issuer: "synth wrappers of LP positions",
  },
  {
    name: "Rho / Rari synthetic interest-bearing tokens",
    symbol: "rToken variants",
    issuer: "Rho experiments",
  },
  {
    name: "Terra Classic synthetic tokens (legacy)",
    symbol: "mUSTC / mLUNA (legacy)",
    issuer: "Mirror/Terra history",
  },
  {
    name: "DeFi Kingdom synthetic tokens",
    symbol: "game-synth tokens",
    issuer: "gameFi synth issuers",
  },
  {
    name: "Synthetic carbon credit tokens",
    symbol: "sCCT / sCARB",
    issuer: "RWA/synthetic carbon projects",
  },
  {
    name: "Synthetix sDOT (Polkadot exposure)",
    symbol: "sDOT",
    issuer: "Synthetix",
  },
  {
    name: "sUSD v2 / improved synthetic stable revisions",
    symbol: "protocol-updated synth tokens",
    issuer: "Synthetix improvements",
  },
  {
    name: "B.Protocol tokenized insurance synths",
    symbol: "bInsure-synths",
    issuer: "B.Protocol-like platforms",
  },
  {
    name: "Metavault collateralized synths (examples)",
    symbol: "mCRPT",
    issuer: "Metavault family",
  },
  {
    name: "Fractal synthetic derivatives (example)",
    symbol: "FRAC-synth",
    issuer: "Fractal-like protocols",
  },
  {
    name: "Anchor-style synthetic yield tokens (legacy)",
    symbol: "ancSynth",
    issuer: "Anchor forks / clones",
  },
  {
    name: "ZeroSwap synthetic instruments",
    symbol: "ZS-synth",
    issuer: "ZeroSwap-like derivatives",
  },
  {
    name: "Synthetic ETF tokens",
    symbol: "sETF variants",
    issuer: "synthetized ETF projects",
  },
  {
    name: "Karura / Acala synthetic assets",
    symbol: "kUSD / aUSD",
    issuer: "Karura/Acala",
  },
  {
    name: "Acala aUSD / LDOT derivatives",
    symbol: "aUSD",
    issuer: "Acala ecosystem",
  },
  {
    name: "Mirror / Terraswap cross-chain synthetic tokens",
    symbol: "cross-mAssets",
    issuer: "Mirror forks on other chains",
  },
  {
    name: "Synthetix sLINK (Chainlink exposure)",
    symbol: "sLINK",
    issuer: "Synthetix",
  },
  {
    name: "Curve-based synthetic stables",
    symbol: "csUSD",
    issuer: "Curve integrations",
  },
  {
    name: "SYNTHETIX derivatives on L2s",
    symbol: "s* on L2",
    issuer: "Synthetix L2 deployments",
  },
  {
    name: "Tokenized bonds as synths",
    symbol: "bndSynth",
    issuer: "RWA / bond-tokenization projects",
  },
  {
    name: "Synthetic credit tokens",
    symbol: "cCredit",
    issuer: "credit-synth experiments",
  },
  {
    name: "Deri Protocol synthetic perpetual tokens",
    symbol: "deri-perps",
    issuer: "Deri-like derivatives",
  },
  {
    name: "ZetaChain cross-chain synthetic assets",
    symbol: "zSynth",
    issuer: "ZetaChain-enabled synths",
  },
  {
    name: "Solana-based synthetic tokens",
    symbol: "sSOL / sUSDC",
    issuer: "Solana synth projects",
  },
  {
    name: "Offchain synthetic tokenization",
    symbol: "oSynth",
    issuer: "offchain-backed synth projects",
  },
  {
    name: "Wrapped synthetic tokens",
    symbol: "wSynth",
    issuer: "bridge-wrapped synths",
  },
  {
    name: "Synthetic commodity tokens (oil, gas)",
    symbol: "sOIL / sGAS",
    issuer: "commodity-synth issuers",
  },
  {
    name: "Synthetix sLINK / sAAVE",
    symbol: "sAAVE",
    issuer: "Synthetix family",
  },
  {
    name: "LayerZero-enabled synth aggregators",
    symbol: "lzSynth",
    issuer: "cross-chain synth aggregators",
  },
  {
    name: "Cross-chain synthetic USD tokens",
    symbol: "xsUSD",
    issuer: "cross-chain synths",
  },
  {
    name: "Fractal tokenized synthetic credit lines",
    symbol: "fractal-credit",
    issuer: "Fractal experiments",
  },
  {
    name: "zAssets (Zeta / Wormhole derived)",
    symbol: "zAsset variants",
    issuer: "zAssets projects",
  },
  {
    name: "TokenSets synthetic strategies",
    symbol: "SET-synth strategies",
    issuer: "TokenSets",
  },
  {
    name: "Composite synthetic indices",
    symbol: "cINDEX / sINDEX",
    issuer: "composite synth providers",
  },
];
