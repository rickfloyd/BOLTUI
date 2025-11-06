'use client';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const aiPlatformItems = [
    { name: 'AI Price Prediction Engine', subtext: 'Forecasting with machine learning' },
    { name: 'ML Pattern Recognition', subtext: 'Identify historical patterns' },
    { name: 'Sentiment Analysis AI', subtext: 'Gauge market mood from news & social' },
    { name: 'Smart Risk Management', subtext: 'AI-driven risk assessment' },
    { name: 'Automated Trading Signals', subtext: 'Real-time buy/sell alerts' },
    { name: 'Neural Networks & LSTM', subtext: 'Deep learning for market prediction' },
];

export function MainSidebar() {
  return (
    <aside className="left-sidebar">
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="section-title neon-cyan hover:no-underline">
                    <span className="dot-indicator"></span>
                    AI-Powered Trading Platform
                </AccordionTrigger>
                <AccordionContent className="platform-menu dropdown-menu open">
                  {aiPlatformItems.map((item, index) => (
                    <div key={index} className="menu-item">
                      {item.name}
                      <span className="sub-text">{item.subtext}</span>
                    </div>
                  ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </aside>
  );
}
