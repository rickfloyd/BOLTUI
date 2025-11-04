'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AreaChart, CandlestickChart, Cpu, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/markets', label: 'Markets', icon: CandlestickChart },
  { href: '/charting', label: 'Chart Engine', icon: AreaChart },
  { href: '/ai-analysis', label: 'AI Analysis', icon: Cpu },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-card/50 backdrop-blur-sm border-r border-border/20 flex flex-col">
      <div className="h-20 flex items-center px-6">
        <Link href="/" className="flex items-center gap-3">
           <svg width="32" height="32" viewBox="0 0 24 24" className="text-primary animate-soft-pulse">
            <defs>
              <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: 'hsl(var(--primary))'}} />
                <stop offset="100%" style={{stopColor: 'hsl(var(--accent))'}} />
              </linearGradient>
            </defs>
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M2 7L12 12L22 7" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M12 12V22" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="2" fill="hsl(var(--accent))" className="animate-glow" style={{animationDuration: '2s'}}/>
          </svg>
          <span className="text-xl font-bold font-headline text-foreground tracking-widest">QUANTUM</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/20 text-primary-foreground shadow-[0_0_15px_hsl(var(--primary)/0.3)] border border-primary/50'
                      : 'text-muted-foreground hover:bg-accent/10 hover:text-accent-foreground'
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
