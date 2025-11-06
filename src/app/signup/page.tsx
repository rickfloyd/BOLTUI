"use client";
import React from "react";
import Link from "next/link";

/**
 * Quantum Charts — Signup Page
 * ✨ Cyberpunk neon design, secure & responsive
 */

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-black to-cyan-900 opacity-70 blur-3xl animate-pulse" />

      <div className="relative z-10 p-10 rounded-2xl shadow-[0_0_40px_rgba(255,0,255,0.4)] backdrop-blur-md border border-cyan-400/40">
        <h1 className="text-5xl font-extrabold mb-6 text-pink-400 drop-shadow-[0_0_12px_rgba(255,0,255,0.6)]">
          Create Your Account
        </h1>

        <form className="flex flex-col gap-4 w-80 mx-auto text-left">
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded bg-black/50 border border-pink-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-black/50 border border-pink-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-black/50 border border-pink-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button
            type="submit"
            className="mt-4 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.5)]"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-gray-400">
          Already registered?{" "}
          <Link href="/login" className="text-cyan-400 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
}
