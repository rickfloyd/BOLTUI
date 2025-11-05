'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { SidebarTrigger } from '../ui/sidebar';

const navItems = [
  { href: '#', label: 'Impact', className: 'impact-glow' },
  { href: '#', label: 'Sports Betting' },
  { href: '#', label: 'Sports' },
  { href: '#', label: 'World Sports' },
  { href: '#', label: 'Products' },
  { href: '/markets', label: 'Markets', className: 'active-market' },
  { href: '#', label: 'More' },
];

const rightNavItems = [
    { href: '/exchanges', label: 'Stocks' },
    { href: '/markets', label: 'Commodities' },
    { href: '#', label: 'Community', className: 'community-glow' },
]

export function Header() {
  const pathname = usePathname();

  return (
    <header className="header-nav h-16 flex items-center justify-between px-4 md:px-6 bg-background/80 backdrop-blur-sm border-b border-border/20 sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden"/>
        <Link href="/" className="flex items-center gap-3">
          <svg viewBox="0 0 100 100" className="h-8 w-8">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g className="logo-glow" style={{ filter: 'url(#glow)' }}>
              <path
                d="M 50,10 A 40,40 0 1 1 10,50 40,40 0 0 1 50,10 Z M 50,20 A 30,30 0 1 0 80,50 30,30 0 0 0 50,20 Z"
                className="logo-q-outer"
              />
              <line x1="65" y1="65" x2="85" y2="85" className="logo-q-tail" />
            </g>
          </svg>
          <span className="hidden md:inline-block text-xl font-bold tracking-widest uppercase">
            <span className="text-primary neon-text-primary">Ai</span>{' '}
            <span className="text-accent neon-text">QUANTUM</span>{' '}
            <span className="text-chart-4 neon-text-orange">CHARTS</span>
          </span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'nav-item text-sm font-medium transition-colors text-muted-foreground hover:text-foreground',
                item.className,
                isActive && 'text-foreground'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <div className="search-box relative hidden md:block">
            <Input type="text" placeholder="Search markets..." className="search-input bg-card border-accent/50 h-9 w-48" />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <nav className="hidden md:flex items-center gap-4">
            {rightNavItems.map((item) => (
                 <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                        'nav-item text-sm font-medium transition-colors text-muted-foreground hover:text-foreground',
                        item.className
                    )}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
