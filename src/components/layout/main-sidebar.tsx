'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MainSidebar() {
  
  return (
    <aside className="border-r p-4">
      <h2 className="text-lg font-semibold mb-4">Navigation</h2>
      <nav className="flex flex-col gap-2">
         <Link href="/charting" className="text-muted-foreground hover:text-foreground">Charting</Link>
         <Link href="/ai-analysis" className="text-muted-foreground hover:text-foreground">AI Analysis</Link>
         <Link href="/strategy" className="text-muted-foreground hover:text-foreground">Strategy</Link>
         <Link href="/data-feeds" className="text-muted-foreground hover:text-foreground">Data Feeds</Link>
      </nav>
    </aside>
  );
}
