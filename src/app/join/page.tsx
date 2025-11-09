'use client';
import React from 'react';
import Link from 'next/link';

/**
 * Quantum Charts — Join Page (Safe-Access)
 * ✨ Reflects a private, invite-only community model.
 * ✅ Safe for Firebase App Hosting + Next.js 15
 */

export default function JoinPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-center text-white">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-black to-cyan-900 opacity-70 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 p-10 rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.4)] backdrop-blur-md border border-cyan-400/40">
        <h1 className="text-5xl font-extrabold mb-4 text-neon-pink drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]">
          Quantum Charts Community
        </h1>

        <p className="text-lg text-gray-300 max-w-lg mb-8">
          This is a private, safe-access space. Access is available via invite or caregiver approval only.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/login"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 font-bold hover:scale-105 transform transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.5)]"
          >
            Member Login
          </Link>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-cyan-400 hover:underline"
          >
            &larr; Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}
