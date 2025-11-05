"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ prevents SSR/client mismatch

  return (
    <div className="flex flex-col items-center w-full p-4 space-y-12">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-center h-40 w-full max-w-sm bg-[#0b0b0c] border border-[rgba(0,255,0,0.5)] 
                     shadow-[0_0_12px_rgba(0,255,0,0.6)] hover:shadow-[0_0_18px_rgba(0,255,0,1)] transition-all duration-200 rounded-lg"
        >
          Box {i + 1}
        </div>
      ))}
    </div>
  );
}
