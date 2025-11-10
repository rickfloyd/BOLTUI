
export interface WatchlistItemData {
  name: string;
  symbol: string;
  imageUrl?: string;
}

export const watchlistItems: WatchlistItemData[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    imageUrl: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579'
  },
  {
    name: 'Nasdaq 100',
    symbol: 'NDAQ100'
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    imageUrl: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png?1547033830'
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    imageUrl: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628'
  },
  {
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    imageUrl: 'https://cdn.worldvectorlogo.com/logos/tesla-motors.svg'
  },
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/