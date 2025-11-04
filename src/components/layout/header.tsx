'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AreaChart,
  CandlestickChart,
  Cpu,
  Globe,
  LayoutDashboard,
  SlidersHorizontal,
  View,
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
  { href: '/simple-view', label: 'Simple View', icon: View },
  { href: '/custom-view', label: 'Custom View', icon: SlidersHorizontal },
];

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

export function Header({ pageTitle }: { pageTitle: string }) {
  const userAvatar = PlaceHolderImages.find((p) => p.id === 'user-avatar');
  const pathname = usePathname();

  return (
    <header className="h-20 flex items-center justify-between px-6 bg-card/30 backdrop-blur-sm border-b border-border/20 sticky top-0 z-10">
      <div className="flex items-center gap-10">
        <Link href="/" className="flex items-center gap-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="text-primary animate-soft-pulse"
          >
            <defs>
              <linearGradient
                id="logo-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))' }} />
                <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))' }} />
              </linearGradient>
            </defs>
            <path
              d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
              stroke="url(#logo-gradient)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M2 7L12 12L22 7"
              stroke="url(#logo-gradient)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M12 12V22"
              stroke="url(#logo-gradient)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="2"
              fill="hsl(var(--accent))"
              className="animate-glow"
              style={{ animationDuration: '2s' }}
            />
          </svg>
          <span className="text-xl font-bold font-headline text-foreground tracking-widest">
            QUANTUM
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
                    ? 'text-primary'
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
        <GlobalNav />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10 border-2 border-accent/50">
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
