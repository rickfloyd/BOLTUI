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
  { href: '/markets', label: 'All Markets' },
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
    <header className="header-nav">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="md:hidden"/>
        <Link href="/" className="flex items-center gap-3">
          <div className="logo">Ai QUANTUM CHARTS</div>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'nav-item',
                item.className,
                isActive && item.label === 'All Markets' && 'active-market'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <div className="search-box relative hidden md:block">
            <Input type="text" placeholder="Search markets..." className="search-input" />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <nav className="hidden md:flex items-center gap-1 nav-right">
            {rightNavItems.map((item) => (
                 <Link
                    key={item.label}
                    href={item.href}
                    className={cn('nav-item', item.className)}
                >
                    {item.label}
                </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
