
'use client';

import Link from 'next/link';
import { HeaderDropdown, type DropdownItem } from './HeaderDropdown';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const communityFeaturesItems: DropdownItem[] = [
    { name: 'AI Price Prediction Engine', subtext: 'Forecasting with machine learning' },
    { name: 'ML Pattern Recognition', subtext: 'Identify historical patterns' },
    { name: 'Sentiment Analysis AI', subtext: 'Gauge market mood from news & social' },
    { name: 'Smart Risk Management', subtext: 'AI-driven risk assessment' },
    { name: 'Automated Trading Signals', subtext: 'Real-time buy/sell alerts' },
    { name: 'Neural Networks & LSTM', subtext: 'Deep learning for market prediction' },
];

const sportsItems: DropdownItem[] = [
    { name: 'Markets', subtext: 'Global financial markets', active: true },
    { name: 'World Sports', subtext: 'International sports coverage' },
];

const tradersProfileItems: DropdownItem[] = [
  { name: 'Personal Account', subtext: 'Manage your personal trading profile' },
  { name: 'Business Account', subtext: 'Manage your business trading profile' },
  { name: 'VIP', subtext: 'Access exclusive VIP features' },
  { isSeparator: true },
  { name: 'GPS Food Finder', subtext: 'Find restaurants near you', type: 'link', href: '/gps-finder' },
];

const guiltyPleasuresItems: DropdownItem[] = [
  { name: 'Bluetooth Connect', subtext: 'Connect your audio device', type: 'item' },
  { isSeparator: true },
  { name: 'Apple Music', subtext: 'Listen on Apple Music', type: 'item' },
  { name: 'Spotify', subtext: 'Listen on Spotify', type: 'item' },
  { name: 'YouTube Music', subtext: 'Listen on YouTube Music', type: 'item' },
  { isSeparator: true },
  { name: 'Top 35 Food Apps', subtext: 'Find food apps in your GPS region', type: 'item' },
  { name: 'Top Restaurants', subtext: 'Find restaurants in your area', type: 'link', href: '/gps-finder' },
  { name: 'Uber Eats', subtext: 'Order food delivery', type: 'item' },
  { name: 'DoorDash', subtext: 'Order food delivery', type: 'item' },
  { isSeparator: true },
  { name: 'International Social Networks', type: 'header' },
  { name: 'Facebook', type: 'link', href: 'https://facebook.com' },
  { name: 'Twitter / X', type: 'link', href: 'https://x.com' },
  { name: 'Instagram', type: 'link', href: 'https://instagram.com' },
  { name: 'TikTok', type: 'link', href: 'https://tiktok.com' },
  { name: 'LinkedIn', type: 'link', href: 'https://linkedin.com' },
  { name: 'Reddit', type: 'link', href: 'https://reddit.com' },
  { name: 'Pinterest', type: 'link', href: 'https://pinterest.com' },
  { name: 'Snapchat', type: 'link', href: 'https://snapchat.com' },
  { name: 'Telegram', type: 'link', href: 'https://telegram.org' },
  { name: 'WhatsApp', type: 'link', href: 'https://whatsapp.com' },
  { name: 'WeChat', type: 'link', href: 'https://wechat.com' },
  { name: 'Discord', type: 'link', href: 'https://discord.com' },
  { name: 'Shuffle', type: 'link', href: '#' },
];


function DesktopHeader() {
  return (
    <>
      <div className="header-top-layer">
        <div className="header-title neon-text">AI Quantum Charts</div>
        <div className="nav-right">
           <Link href="#" className="nav-item neon-pink">
            Compare Prices
          </Link>
           <Link href="/policies" className="nav-item neon-pink">
            Policies
          </Link>
           <Link href="/join" className="nav-item neon-pink">
            Join
          </Link>
        </div>
      </div>
      <div className="header-middle-layer">
        <nav className="main-nav">
          <Link href="/impact" className="nav-item neon-cyan">
            Impact
          </Link>
           <Link href="#" className="nav-item neon-orange">
            Stocks
          </Link>
          <HeaderDropdown title="Community Features" items={communityFeaturesItems} titleClassName="neon-blue" />
          <HeaderDropdown title="Traders Profile" items={tradersProfileItems} titleClassName="neon-pink" />
          <HeaderDropdown title="Guilty Pleasures" items={guiltyPleasuresItems} titleClassName="neon-orange" />
          <Link href="#" className="nav-item neon-green">
            Products
          </Link>
        </nav>
      </div>
      <div className="header-bottom-layer">
        <nav className="main-nav">
          <Link href="#" className="nav-item neon-orange">
            Sports Betting
          </Link>
          <HeaderDropdown title="Sports" items={sportsItems} titleClassName="neon-blue" />
          <Link href="#" className="nav-item neon-cyan">
            Political Views
          </Link>
        </nav>
      </div>
    </>
  )
}

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="header-top-layer">
        <div className="header-title neon-text">AI Quantum Charts</div>
        <button onClick={toggleMenu} className="mobile-menu-button">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            <Link href="/impact" className="nav-item neon-cyan">Impact</Link>
            <Link href="#" className="nav-item neon-orange">Stocks</Link>
            <HeaderDropdown title="Community Features" items={communityFeaturesItems} titleClassName="neon-blue" />
            <HeaderDropdown title="Traders Profile" items={tradersProfileItems} titleClassName="neon-pink" />
            <HeaderDropdown title="Guilty Pleasures" items={guiltyPleasuresItems} titleClassName="neon-orange" />
            <Link href="#" className="nav-item neon-green">Products</Link>
            <Link href="#" className="nav-item neon-orange">Sports Betting</Link>
            <HeaderDropdown title="Sports" items={sportsItems} titleClassName="neon-blue" />
            <Link href="#" className="nav-item neon-cyan">Political Views</Link>
            <div className="mobile-menu-separator" />
            <Link href="#" className="nav-item neon-pink">Compare Prices</Link>
            <Link href="/policies" className="nav-item neon-pink">Policies</Link>
            <Link href="/join" className="nav-item neon-pink">Join</Link>
          </nav>
        </div>
      )}
    </>
  );
}


export function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="header-nav">
      {isMobile === undefined ? (
        <div className="header-top-layer">
          <div className="header-title neon-text">AI Quantum Charts</div>
        </div>
      ) : isMobile ? (
        <MobileHeader />
      ) : (
        <DesktopHeader />
      )}
    </header>
  );
}
