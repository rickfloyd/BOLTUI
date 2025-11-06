'use client';
import React from 'react';
import Link from 'next/link';

/**
 * Quantum Charts — Join Page (Fixed Version)
 * ✨ Neon cyberpunk design, SSR-safe, no hydration or Slot errors
 * ✅ Safe for Firebase App Hosting + Next.js 15
 */

export default function JoinPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-center text-white">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-cyan-900 opacity-70 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 p-10 rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.4)] backdrop-blur-md border border-cyan-400/40">
        <h1 className="text-5xl font-extrabold mb-4 text-neon-pink drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]">
          Join Quantum Charts
        </h1>

        <p className="text-lg text-gray-300 max-w-lg mb-8">
          Step into the <span className="text-cyan-300">CyberVision Network</span>
          . Connect, trade, and evolve with our AI-driven financial
          intelligence hub.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/signup"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 font-bold hover:scale-105 transform transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.5)]"
          >
            Create Account
          </Link>

          <Link
            href="/login"
            className="px-8 py-3 rounded-full border border-pink-500 text-pink-400 font-bold hover:bg-pink-500/10 hover:scale-105 transition-all duration-300"
          >
            Already a Member?
          </Link>
        </div>
      </div>
    </main>
  );
}