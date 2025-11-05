'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/markets', label: 'Markets' },
    { href: '/exchanges', label: 'Exchanges' },
    { href: '/compare-prices', label: 'Pricing' },
    { href: '/policy', label: 'Policy' },
  ];
  
  const rightNavItems = [
      { href: '/join', label: 'Join' },
      { href: '/custom-view', label: 'Custom' },
      { href: '/simple-view', label: 'Simple' },
  ]

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold text-primary neon-text">
          AI QUANTUM CHARTS
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
                'text-sm font-medium transition-colors hover:text-primary',
                isActive ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
            <Input type="search" placeholder="Search..." className="h-9 w-[250px]" />
        </div>
        <div className="hidden md:flex items-center gap-2">
            {rightNavItems.map((item) => (
                 <Button asChild variant="ghost" key={item.label}>
                    <Link href={item.href}>
                        {item.label}
                    </Link>
                 </Button>
            ))}
        </div>
        <Button>Login</Button>
      </div>
    </header>
  );
}
