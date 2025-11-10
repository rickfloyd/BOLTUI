"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Trade {
  p: number; // Price
  s: string; // Symbol
  t: number; // Timestamp
  v: number; // Volume
}

export default function SimpleViewPage() {
  const [prices, setPrices] = useState<{ [key: string]: number | null }>({
    AAPL: null,
    "BINANCE:BTCUSDT": null,
    "IC MARKETS:1": null,
  });
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    // Fetch the API key from the backend
    const fetchKey = async () => {
      try {
        const response = await fetch("/api/finnhub-ws");
        if (!response.ok) {
          throw new Error("Failed to fetch API key.");
        }
        const data = await response.json();
        setApiKey(data.apiKey);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchKey();
  }, []);

  useEffect(() => {
    if (!apiKey) return;

    const ws = new WebSocket(`wss://ws.finnhub.io?token=${apiKey}`);
    setSocket(ws);

    ws.onopen = function (event) {
      console.log("WebSocket connection established.");
      setError(null);
      // Subscribe to symbols
      ws.send(JSON.stringify({ type: "subscribe", symbol: "AAPL" }));
      ws.send(JSON.stringify({ type: "subscribe", symbol: "BINANCE:BTCUSDT" }));
      ws.send(JSON.stringify({ type: "subscribe", symbol: "IC MARKETS:1" }));
    };

    ws.onmessage = function (event) {
      const message = JSON.parse(event.data);
      if (message.type === "trade") {
        const trades = message.data as Trade[];
        trades.forEach((trade) => {
          setPrices((prevPrices) => ({
            ...prevPrices,
            [trade.s]: trade.p,
          }));
        });
      }
    };

    ws.onerror = function (event) {
      console.error("WebSocket error observed:", event);
      setError("WebSocket connection error. See console for details.");
    };

    ws.onclose = function (event) {
      console.log("WebSocket connection closed.");
    };

    // Cleanup function
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [apiKey]);

  const getDisplayName = (symbol: string) => {
    const names: { [key: string]: string } = {
      AAPL: "Apple Inc.",
      "BINANCE:BTCUSDT": "Bitcoin / USD",
      "IC MARKETS:1": "EUR / USD",
    };
    return names[symbol] || symbol;
  };

  const getGlowClass = (symbol: string) => {
    const glows: { [key: string]: string } = {
      AAPL: "glow-blue",
      "BINANCE:BTCUSDT": "glow-orange",
      "IC MARKETS:1": "glow-pink",
    };
    return glows[symbol] || "glow-cyan";
  };

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <div className="view-switcher">
            <Link href="/" className="view-button neon-cyan">
              Charts
            </Link>
            <Link href="/simple-view" className="view-button active neon-pink">
              Simple View
            </Link>
            <Link href="/wcag" className="view-button view-button-wcag">
              WCAG–W3C
            </Link>
            <Link href="/custom-view" className="view-button neon-orange">
              Custom View
            </Link>
          </div>

          <h1 className="text-3xl font-bold neon-text text-center mt-8">
            Simple View
          </h1>
          <p className="text-lg text-gray-300 text-center">
            Live price feeds from Finnhub WebSocket.
          </p>

          {error && <p className="text-lg text-red-400 text-center">{error}</p>}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
            {Object.keys(prices).map((symbol) => (
              <Card
                key={symbol}
                className={`data-card ${getGlowClass(symbol)}`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-center neon-text">
                    {getDisplayName(symbol)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold font-numeric text-white">
                    {prices[symbol] !== null
                      ? prices[symbol]?.toFixed(4)
                      : "Loading..."}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
