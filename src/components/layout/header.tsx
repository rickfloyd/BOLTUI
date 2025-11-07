'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HeaderDropdown, type DropdownItem } from './HeaderDropdown';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const communityItems: DropdownItem[] = [
    { name: 'AI Price Prediction Engine', subtext: 'Forecasting with machine learning' },
    { name: 'ML Pattern Recognition', subtext: 'Identify historical patterns' },
    { name: 'Sentiment Analysis AI', subtext: 'Gauge market mood from news & social' },
    { name: 'Smart Risk Management', subtext: 'AI-driven risk assessment' },
    { name: 'Automated Trading Signals', subtext: 'Real-time buy/sell alerts' },
    { name: 'Neural Networks & LSTM', subtext: 'Deep learning for market prediction' },
    { isSeparator: true },
    { name: 'Binance Schema', subtext: 'View the Binance API Schema', type: 'link', href: '/binance-schema' },
];

const sportsItems: DropdownItem[] = [
    { name: 'Markets', subtext: 'Global financial markets', active: true },
    { name: 'World Sports', subtext: 'International sports coverage' },
];

const tradersProfileItems: DropdownItem[] = [
  { name: 'Personal Account', subtext: 'Manage your personal trading profile', type: 'link', href: '/profile' },
  { name: 'Business Account', subtext: 'Manage your business trading profile' },
  { name: 'VIP', subtext: 'Access exclusive VIP features' },
  { isSeparator: true },
  { name: 'GPS Food Finder', subtext: 'Find restaurants near you', type: 'link', href: '/gps-finder' },
];

const guiltyPleasuresItems: DropdownItem[] = [
  { name: 'Bluetooth Connect', subtext: 'Connect your audio device', type: 'link', href: '/bluetooth-connect' },
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

const republicanItems: DropdownItem[] = [
  { name: 'Fox News', type: 'link', href: 'https://www.foxnews.com' },
  { name: 'The Daily Wire', type: 'link', href: 'https://www.dailywire.com' },
  { name: 'Newsmax', type: 'link', href: 'https://www.newsmax.com' },
  { name: 'Breitbart News', type: 'link', href: 'https://www.breitbart.com' },
  { name: 'The Wall Street Journal', type: 'link', href: 'https://www.wsj.com' },
  { name: 'The Joe Rogan Experience', type: 'link', href: 'https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk' },
  { name: 'The New York Post', type: 'link', href: 'https://nypost.com' },
  { name: 'The Dispatch', type: 'link', href: 'https://thedispatch.com' },
  { name: 'Forbes', type: 'link', href: 'https://www.forbes.com' },
  { name: 'Fox Business', type: 'link', href: 'https://www.foxbusiness.com' },
  { name: 'RedState', type: 'link', href: 'https://redstate.com' },
  { name: 'The Washington Times', type: 'link', href: 'https://www.washingtontimes.com' },
  { name: 'PJ Media', type: 'link', href: 'https://pjmedia.com' },
  { name: 'Townhall', type: 'link', href: 'https://townhall.com' },
  { name: 'The Blaze', type: 'link', href: 'https://www.theblaze.com' },
];

const democratItems: DropdownItem[] = [
  { name: 'CNN', type: 'link', href: 'https://www.cnn.com' },
  { name: 'The New York Times', type: 'link', href: 'https://www.nytimes.com' },
  { name: 'MSNBC', type: 'link', href: 'https://www.msnbc.com' },
  { name: 'The Washington Post', type: 'link', href: 'https://www.washingtonpost.com' },
  { name: 'National Public Radio (NPR)', type: 'link', href: 'https://www.npr.org' },
  { name: 'PBS (Public Broadcasting Service)', type: 'link', href: 'https://www.pbs.org' },
  { name: 'ABC News', type: 'link', href: 'https://abcnews.go.com' },
  { name: 'NBC News', type: 'link', href: 'https://www.nbcnews.com' },
  { name: 'CBS News', type: 'link', href: 'https://www.cbsnews.com' },
  { name: 'BBC News', type: 'link', href: 'https://www.bbc.com/news' },
  { name: 'The Associated Press (AP)', type: 'link', href: 'https://apnews.com' },
  { name: 'The Atlantic', type: 'link', href: 'https://www.theatlantic.com' },
  { name: 'HuffPost', type: 'link', href: 'https://www.huffpost.com' },
  { name: 'Vox', type: 'link', href: 'https://www.vox.com' },
  { name: 'The Wall Street Journal', type: 'link', href: 'https://www.wsj.com' },
];

const liberalItems: DropdownItem[] = [
  { name: 'NPR (National Public Radio)', type: 'link', href: 'https://www.npr.org' },
  { name: 'PBS (Public Broadcasting Service)', type: 'link', href: 'https://www.pbs.org' },
  { name: 'The New York Times', type: 'link', href: 'https://www.nytimes.com' },
  { name: 'The Washington Post', type: 'link', href: 'https://www.washingtonpost.com' },
  { name: 'MSNBC', type: 'link', href: 'https://www.msnbc.com' },
  { name: 'The Atlantic', type: 'link', href: 'https://www.theatlantic.com' },
  { name: 'HuffPost', type: 'link', href: 'https://www.huffpost.com' },
  { name: 'Vox', type: 'link', href: 'https://www.vox.com' },
  { name: 'Mother Jones', type: 'link', href: 'https://www.motherjones.com' },
  { name: 'The Nation', type: 'link', href: 'https://www.thenation.com' },
  { name: 'Daily Kos', type: 'link', href: 'https://www.dailykos.com' },
  { name: 'The New Republic', type: 'link', href: 'https://newrepublic.com' },
  { name: 'ProPublica', type: 'link', href: 'https://www.propublica.org' },
  { name: 'The Guardian', type: 'link', href: 'https://www.theguardian.com/us' },
  { name: 'The American Prospect', type: 'link', href: 'https://prospect.org' },
];

const independentItems: DropdownItem[] = [
  { name: 'The Associated Press (AP)', type: 'link', href: 'https://apnews.com' },
  { name: 'Reuters', type: 'link', href: 'https://www.reuters.com' },
  { name: 'ABC News', type: 'link', href: 'https://abcnews.go.com' },
  { name: 'NBC News', type: 'link', href: 'https://www.nbcnews.com' },
  { name: 'CBS News', type: 'link', href: 'https://www.cbsnews.com' },
  { name: 'BBC News', type: 'link', href: 'https://www.bbc.com/news' },
  { name: 'The Hill', type: 'link', href: 'https://thehill.com' },
  { name: 'The Wall Street Journal', type: 'link', href: 'https://www.wsj.com' },
  { name: 'Forbes', type: 'link', href: 'https://www.forbes.com' },
  { name: 'ProPublica', type: 'link', href: 'https://www.propublica.org' },
  { name: 'PBS (Public Broadcasting Service)', type: 'link', href: 'https://www.pbs.org' },
  { name: 'FiveThirtyEight', type: 'link', href: 'https://fivethirtyeight.com' },
  { name: 'Politico', type: 'link', href: 'https://www.politico.com' },
  { name: 'USA Today', type: 'link', href: 'https://www.usatoday.com' },
];

const sportsBettingItems: DropdownItem[] = [
  { name: 'North American Major Sports', subtext: 'NFL, NCAAF, NBA, WNBA, NCAAB, MLB, NHL, Soccer', type: 'link', href: '#' },
  { name: 'Combat Sports', subtext: 'Boxing, MMA, UFC', type: 'link', href: '#' },
  { name: 'Racing', subtext: 'NASCAR, Formula 1, Horse Racing', type: 'link', href: '#' },
  { name: 'Golf & Tennis', subtext: 'PGA, LPGA, Grand Slam tournaments', type: 'link', href: '#' },
  { name: 'Other Sports', subtext: 'Badminton, Cricket, Cycling, Darts, Handball, Lacrosse, Rugby, & more', type: 'link', href: '#' },
];

const opinionsItems: DropdownItem[] = [
  { name: 'Placeholder Opinion', subtext: 'This is a placeholder item', type: 'link', href: '#' },
];


function DesktopHeader() {
  return (
    <>
      <div className="header-top-layer">
        <div className="flex items-center gap-4">
            <div className="header-title leading-tight">
                <span className='neon-text'>AI Quantum</span><br /><span className='text-white'>Charts</span>
            </div>
        </div>
        <div className="nav-right">
           <HeaderDropdown title="Traders Profile" items={tradersProfileItems} titleClassName="neon-orange" />
           <Link href="/impact" className="nav-item neon-cyan">
            Impact
          </Link>
           <HeaderDropdown title="Community" items={communityItems} titleClassName="neon-blue" />
           <Link href="/compare-prices" className="nav-item neon-pink">
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
          <Link href="#" className="nav-item neon-orange">
            Stocks
          </Link>
          <Link href="#" className="nav-item neon-cyan">
            Crypto
          </Link>
          <HeaderDropdown title="Guilty Pleasures" items={guiltyPleasuresItems} titleClassName="neon-pink" />
          <Link href="#" className="nav-item neon-green">
            Products
          </Link>
        </nav>
      </div>
      <div className="header-bottom-layer">
        <nav className="main-nav">
          <HeaderDropdown title="Sports Betting" items={sportsBettingItems} titleClassName="neon-orange" />
          <HeaderDropdown title="Sports" items={sportsItems} titleClassName="neon-blue" />
          <HeaderDropdown title="Republican" items={republicanItems} titleClassName="neon-cyan" />
          <HeaderDropdown title="Democrat" items={democratItems} titleClassName="neon-cyan" />
          <HeaderDropdown title="Liberal" items={liberalItems} titleClassName="neon-cyan" />
          <HeaderDropdown title="Independent" items={independentItems} titleClassName="neon-cyan" />
          <HeaderDropdown title="Opinions" items={opinionsItems} titleClassName="neon-pink" />
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
        <div className="flex items-center gap-4">
            <div className="header-title leading-tight">
                <span className='neon-text'>AI Quantum</span><br /><span className='text-white'>Charts</span>
            </div>
        </div>
        <button onClick={toggleMenu} className="mobile-menu-button">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            <HeaderDropdown title="Traders Profile" items={tradersProfileItems} titleClassName="neon-orange" />
             <Link href="/impact" className="nav-item neon-cyan">Impact</Link>
            <HeaderDropdown title="Community" items={communityItems} titleClassName="neon-blue" />
            <Link href="#" className="nav-item neon-orange">Stocks</Link>
             <Link href="#" className="nav-item neon-cyan">
                Crypto
              </Link>
            <HeaderDropdown title="Guilty Pleasures" items={guiltyPleasuresItems} titleClassName="neon-pink" />
            <Link href="#" className="nav-item neon-green">Products</Link>
            <HeaderDropdown title="Sports Betting" items={sportsBettingItems} titleClassName="neon-orange" />
            <HeaderDropdown title="Sports" items={sportsItems} titleClassName="neon-blue" />
            <HeaderDropdown title="Republican" items={republicanItems} titleClassName="neon-cyan" />
            <HeaderDropdown title="Democrat" items={democratItems} titleClassName="neon-cyan" />
            <HeaderDropdown title="Liberal" items={liberalItems} titleClassName="neon-cyan" />
            <HeaderDropdown title="Independent" items={independentItems} titleClassName="neon-cyan" />
            <HeaderDropdown title="Opinions" items={opinionsItems} titleClassName="neon-pink" />
            <div className="mobile-menu-separator" />
            <Link href="/compare-prices" className="nav-item neon-pink">Compare Prices</Link>
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
            <div className="flex items-center gap-4">
                 <div className="header-title leading-tight">
                    <span className='neon-text'>AI Quantum</span><br /><span className='text-white'>Charts</span>
                </div>
            </div>
        </div>
      ) : isMobile ? (
        <MobileHeader />
      ) : (
        <DesktopHeader />
      )}
    </header>
  );
}
