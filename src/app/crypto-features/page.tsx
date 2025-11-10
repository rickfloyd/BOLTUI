"use client";

import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cryptoFeatures, CryptoFeature } from "@/data/crypto-features";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CryptoFeaturesPage() {
  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">
            Crypto Feature Cards
          </h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            An overview of the powerful, data-driven features for deep crypto
            analysis available on the platform.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {cryptoFeatures.map((feature) => (
              <Card
                key={feature.id}
                className="data-card glow-cyan flex flex-col"
              >
                <CardHeader>
                  <CardTitle className="text-xl neon-cyan">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Link
        href="/main"
        className="fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Back
      </Link>
    </>
  );
}
