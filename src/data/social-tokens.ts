export interface SocialToken {
  name: string;
  symbol: string;
  website: string;
  coinGeckoId: string;
  apiEndpointExample: string;
}

export const socialTokens: SocialToken[] = [
  { name: 'Rally', symbol: 'RLY', website: 'https://rally.io', coinGeckoId: 'rally', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/rally' },
  { name: 'Friends With Benefits DAO', symbol: 'FWB', website: 'https://www.fwb.help', coinGeckoId: 'friends-with-benefits', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/friends-with-benefits' },
  { name: 'Mask Network', symbol: 'MASK', website: 'https://mask.io', coinGeckoId: 'mask-network', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/mask-network' },
  { name: 'Roll (social money)', symbol: 'ROLL', website: 'https://www.roll.com', coinGeckoId: 'roll-token', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/roll-token' },
  { name: 'BitClout / DeSo (tokenized social)', symbol: 'DESO', website: 'https://deso.org', coinGeckoId: 'deso', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/deso' },
  { name: 'Gala (community/gaming + social)', symbol: 'GALA', website: 'https://gala.games', coinGeckoId: 'gala', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/gala' },
  { name: 'APE (ApeCoin — community)', symbol: 'APE', website: 'https://apecoin.com', coinGeckoId: 'apecoin', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/apecoin' },
  { name: 'BitTorrent (community token use)', symbol: 'BTT', website: 'https://www.bittorrent.com', coinGeckoId: 'bittorrent', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/bittorrent' },
  { name: 'Chiliz (fan tokens platform)', symbol: 'CHZ', website: 'https://www.chiliz.com', coinGeckoId: 'chiliz', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/chiliz' },
  { name: 'Socios (fan tokens)', symbol: '$ various', website: 'https://www.socios.com', coinGeckoId: 'socios', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/socios' },
  { name: 'Mirror Protocol community assets', symbol: 'MIR', website: 'https://mirror.finance', coinGeckoId: 'mirror-protocol', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/mirror-protocol' },
  { name: 'Patron (community tipping)', symbol: 'PTRN', website: 'https://patron.co (example)', coinGeckoId: 'patron-token', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/patron-token' },
  { name: 'Audius (social audio)', symbol: 'AUDIO', website: 'https://audius.co', coinGeckoId: 'audius', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/audius' },
  { name: 'Juicebox / JBDAO tokens (community funding)', symbol: 'JBX', website: 'https://juicebox.money', coinGeckoId: 'juicebox', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/juicebox' },
  { name: 'Sapien (social news)', symbol: 'SPN', website: 'https://www.sapien.network', coinGeckoId: 'sapien', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/sapien' },
  { name: 'Coinvise (creator tokens platform)', symbol: 'CVSE', website: 'https://coinvise.co', coinGeckoId: 'coinvise', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/coinvise' },
  { name: 'Collab.Land community tooling token (example)', symbol: 'CLAND', website: 'https://collab.land', coinGeckoId: 'collab-land', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/collab-land' },
  { name: 'TokenSpace / community tokens (examples)', symbol: 'TKN', website: 'https://tokenspace.xyz', coinGeckoId: 'tokenspace', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/tokenspace' },
  { name: 'Pepo (creator social app)', symbol: 'PEPO', website: 'https://pepo.com', coinGeckoId: 'pepo', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/pepo' },
  { name: 'BitTube / social tipping tokens (example)', symbol: 'TUBE', website: 'https://bittubeapp.com', coinGeckoId: 'bittube', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/bittube' },
  { name: 'Showtime (NFT/social tokens — platform)', symbol: 'SHOW', website: 'https://showtime.xyz', coinGeckoId: 'showtime', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/showtime' },
  { name: 'Friends DAO tooling tokens (example)', symbol: 'FDAO', website: 'https://fwd.org', coinGeckoId: 'friends-dao', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/friends-dao' },
  { name: 'SocialStack / community tokens (example)', symbol: 'SSTACK', website: 'https://socialstack.io', coinGeckoId: 'socialstack', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/socialstack' },
  { name: 'MintGate community access tokens', symbol: 'MGT', website: 'https://mintgate.ai', coinGeckoId: 'mintgate', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/mintgate' },
  { name: 'Steemit / Hive social tokens', symbol: 'STEEM / HIVE', website: 'https://steemit.com', coinGeckoId: 'steem / hive', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/steem' },
  { name: 'SociFi / social token platforms', symbol: 'SOCI', website: 'https://socifi.xyz', coinGeckoId: 'socifi', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/socifi' },
  { name: 'Tribe / community stake tokens (examples)', symbol: 'TRIBE', website: 'https://tribe.xyz', coinGeckoId: 'tribe-2', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/tribe-2' },
  { name: 'SuperRare community token (example)', symbol: 'RARE', website: 'https://superrare.com', coinGeckoId: 'superrare', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/superrare' },
  { name: 'Nifty Gateway platform token (example)', symbol: 'NIFTY', website: 'https://niftygateway.com', coinGeckoId: 'nifty-gateway', apiEndpointExample: 'https://api.coingecko.com/api/v3/coins/nifty-gateway' },
];
