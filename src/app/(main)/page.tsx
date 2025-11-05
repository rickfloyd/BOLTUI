"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ prevents SSR/client mismatch

  return (
    <div className="grid grid-cols-5 gap-0 w-screen min-h-screen">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-center h-40 bg-[#0b0b0c] border border-[rgba(0,255,0,0.5)] 
                     shadow-[0_0_12px_rgba(0,255,0,0.6)] hover:shadow-[0_0_18px_rgba(0,255,0,1)] transition-all duration-200"
        >
          Box {i + 1}
        </div>
      ))}
    </div>
  );
}
