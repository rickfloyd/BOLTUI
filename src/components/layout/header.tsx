'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AreaChart,
  CandlestickChart,
  Cpu,
  Globe,
  LayoutDashboard,
  Search,
  SlidersHorizontal,
  View,
  Building2,
  Bitcoin,
  Wallet,
  Landmark,
  FileText,
  BrainCircuit
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { CommandDialog } from '@/components/ui/command';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';

const socialLinks = [
  'Facebook',
  'X (Twitter)',
  'Instagram',
  'TikTok',
  'LinkedIn',
  'Threads',
  'Reddit',
  'Discord',
  'YouTube',
  'Telegram',
  'Pinterest',
  'Snapchat',
  'Twitch',
  'Truth Social',
  'Rumble',
  'Medium',
  'Substack',
];
const newsLinks = [
  'Forbes',
  'Bloomberg',
  'CNBC',
  'The Economist',
  'Business Insider',
  'Fortune',
  'TechCrunch',
  'Reuters',
  'MarketWatch',
  'Wired',
  'CoinDesk',
  'The Wall Street Journal',
  'Financial Times',
];
const corporateLinks = [
  'Uber',
  'Lyft',
  'DoorDash',
  'PayPal',
  'Amazon',
  'Google Drive',
  'Google Meet',
  'Zoom',
  'Slack',
  'Dropbox',
  'Notion',
  'Microsoft Teams',
  'Shopify',
  'Stripe',
  'Airtable',
];

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/markets', label: 'Markets', icon: CandlestickChart },
  { href: '/charting', label: 'Chart Engine', icon: AreaChart },
  { href: '/ai-analysis', label: 'AI Analysis', icon: Cpu },
  { href: '/exchanges', label: 'Exchanges', icon: Building2 },
  { href: '/crypto', label: 'Crypto', icon: Bitcoin },
  { href: '/forex', label: 'Forex', icon: Wallet },
  { href: '/bonds', label: 'Bonds', icon: Landmark },
  { href: '/indices', label: 'Indices', icon: FileText },
  { href: '/strategy', label: 'Strategy', icon: BrainCircuit },
  { href: '/simple-view', label: 'Simple View', icon: View },
  { href: '/custom-view', label: 'Custom View', icon: SlidersHorizontal },
];

const searchData = {
  Stocks: [{ name: 'Apple Inc.', ticker: 'AAPL', logo: 'AAPL' }, { name: 'Tesla, Inc.', ticker: 'TSLA', logo: 'TSLA' }],
  Funds: [{ name: 'SPDR S&P 500 ETF', ticker: 'SPY', logo: 'SPY' }],
  Futures: [{ name: 'E-mini S&P 500', ticker: 'ES', logo: 'ES' }],
  Forex: [{ name: 'Euro/US Dollar', ticker: 'EURUSD', logo: 'FX' }],
  Crypto: [{ name: 'Bitcoin', ticker: 'BTCUSD', logo: 'BTC' }, { name: 'Ethereum', ticker: 'ETHUSD', logo: 'ETH' }],
  Bonds: [{ name: 'US 10-Year Treasury', ticker: 'US10Y', logo: 'BND' }],
  Economic: [{ name: 'US CPI', ticker: 'CPI', logo: 'ECO' }],
};

function GlobalNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-accent/10 text-muted-foreground hover:text-accent-foreground"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>Global Hub</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Social Media</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {socialLinks.map((link) => (
                <DropdownMenuItem key={link}>{link}</DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Magazines & News</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {newsLinks.map((link) => (
                <DropdownMenuItem key={link}>{link}</DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Corporate & Utility</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {corporateLinks.map((link) => (
                <DropdownMenuItem key={link}>{link}</DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SymbolSearch() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search symbols...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(searchData).map(([group, items]) => (
            <CommandGroup key={group} heading={group}>
              {items.map((item) => (
                <CommandItem key={item.ticker}>
                  <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-sm bg-muted text-xs font-bold">
                    {item.logo.substring(0, 2)}
                  </div>
                  <span>{item.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{item.ticker}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}


export function Header({ pageTitle }: { pageTitle: string }) {
  const userAvatar = PlaceHolderImages.find((p) => p.id === 'user-avatar');
  const pathname = usePathname();

  return (
    <header className="h-20 flex items-center justify-between px-6 bg-card/30 backdrop-blur-sm border-b border-border/20 sticky top-0 z-10">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="logo-container">
            <video id="header-logo" autoPlay loop muted playsInline>
              <source src="/assets/logo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <span className="text-xl font-bold text-foreground tracking-widest uppercase neon-text">
            Quantum Charts
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'flex items-center gap-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'text-accent neon-text'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <SymbolSearch />
        <GlobalNav />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10 border-2 border-accent/50 neon-box">
                {userAvatar && (
                  <AvatarImage
                    src={userAvatar.imageUrl}
                    alt="User Avatar"
                    data-ai-hint={userAvatar.imageHint}
                  />
                )}
                <AvatarFallback>Q</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Cyber User</p>
                <p className="text-xs leading-none text-muted-foreground">
                  user@email.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
