"use client";

import Link from 'next/link';
import React, { useEffect, useState } from "react";

const markets = [
  { name: "The Foreign Exchange (Forex) Market", href: "/forex" },
  { name: "The Bond Market (Debt/Credit Market)", href: "/bonds" },
  { name: "The Stock Market (Equity Market)", href: "/exchanges" },
  { name: "New York Stock Exchange (NYSE)", href: "/exchanges" },
  { name: "Nasdaq", href: "/exchanges" },
  { name: "The Commodities Market (Includes metals and earth resources like Crude Oil, Natural Gas, Gold, and Silver)", href: "/markets" },
  { name: "The Cryptocurrency Market", href: "/crypto" },
  { name: "Euronext (Pan-European Stock Exchange)", href: "/exchanges" },
  { name: "Shanghai Stock Exchange (SSE)", href: "/exchanges" },
  { name: "Tokyo Stock Exchange (JPX)", href: "/exchanges" },
  { name: "National Stock Exchange of India (NSE)", href: "/exchanges" },
];

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ prevents SSR/client mismatch

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 w-full">
      {markets.map((market, i) => (
        <Link href={market.href} key={i}>
          <div
            className="flex items-center justify-center h-40 w-full bg-[#0b0b0c] border border-[rgba(0,255,0,0.5)] 
                       shadow-[0_0_12px_rgba(0,255,0,0.6)] hover:shadow-[0_0_18px_rgba(0,255,0,1)] transition-all duration-200 rounded-lg p-4 text-center"
          >
            {market.name}
          </div>
        </Link>
      ))}
    </div>
  );
}
