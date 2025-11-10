"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";

export default function CustomViewPage() {
  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <div className="view-switcher">
            <Link href="/" className="view-button neon-cyan">
              Charts
            </Link>
            <Link href="/simple-view" className="view-button neon-pink">
              Simple View
            </Link>
            <Link
              href="/custom-view"
              className="view-button active neon-orange"
            >
              Custom View
            </Link>
          </div>
          <h1 className="text-3xl font-bold neon-text text-center mt-8">
            Custom View
          </h1>
          <p className="text-lg text-gray-300 text-center">
            This is the custom dashboard view. Build your personalized layout
            here.
          </p>
        </section>
      </main>
    </>
  );
}
