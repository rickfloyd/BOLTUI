export interface WatchlistItemData {
  name: string;
  symbol: string;
  price: string;
  change: string;
  icon: string | React.ReactNode;
  color: 'cyan' | 'pink' | 'yellow' | 'green' | 'orange' | 'purple' | 'red' | 'blue';
}

export const watchlistItems: WatchlistItemData[] = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$67,234.56',
    change: '+1.25%',
    icon: 'B',
    color: 'cyan',
  },
  {
    name: 'Nasdaq 100',
    symbol: 'NDX',
    price: '$18,123.78',
    change: '+0.92%',
    icon: 'M',
    color: 'pink',
  },
  {
    name: 'Nasdaq 100',
    symbol: 'NDX',
    price: '$18,123.78',
    change: '+1.25%',
    icon: '📈',
    color: 'cyan',
  },
  {
    name: 'Dogdogin',
    symbol: 'DOGE',
    price: '-0.1456',
    change: '-2.50%',
    icon: '🐶',
    color: 'yellow',
  },
  {
    name: 'Dogodogin',
    symbol: 'DOGE',
    price: '$3,890.12',
    change: '-2.80%',
    icon: '💎',
    color: 'cyan',
  },
  {
    name: 'Tesla ATH',
    symbol: 'TSLA',
    price: '$198.76',
    change: '-1.35%',
    icon: '🚀',
    color: 'green',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$3,890.12',
    change: '-2.88%',
    icon: '💎',
    color: 'cyan',
  },
  {
    name: 'Apple Inc.',
    symbol: 'TSLA',
    price: '$175.30',
    change: '-1.15%',
    icon: 'T',
    color: 'red',
  },
  {
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    price: '$198.76',
    change: '-1.15%',
    icon: 'V',
    color: 'orange',
  },
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: '$175.30',
    change: '+4.5%',
    icon: '📈',
    color: 'purple',
  },
];
