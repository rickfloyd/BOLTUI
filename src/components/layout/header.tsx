'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#', label: 'Impact', className: 'impact-glow' },
  { href: '#', label: 'Sports Betting' },
  { href: '#', label: 'Sports' },
  { href: '#', label: 'World Sports' },
  { href: '#', label: 'Products' },
  { href: '/markets', label: 'Markets' },
  { href: '#', label: 'More' },
];

const rightNavItems = [
    { href: '/exchanges', label: 'Stocks' },
    { href: '#', label: 'Commodities' },
    { href: '#', label: 'Community', className: 'community-glow' }
]

export function Header() {
  const pathname = usePathname();

  return (
    <header className="header-nav">
      <div className="flex items-center">
        <Link href="/" className="logo">
          AI QUANTUM CHARTS
        </Link>
      </div>

      <nav className="hidden md:flex items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'nav-item',
                item.className,
                isActive && item.label === 'Markets' && 'active-market'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <div className="search-box relative hidden md:block">
            <input type="text" placeholder="Search markets..." className="search-input" />
        </div>
        <div className="nav-right hidden md:flex items-center">
            {rightNavItems.map((item) => (
                 <Link
                    key={item.label}
                    href={item.href}
                    className={cn('nav-item', item.className)}
                >
                    {item.label}
                </Link>
            ))}
        </div>
      </div>
    </header>
  );
}
