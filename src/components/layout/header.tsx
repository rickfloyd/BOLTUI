'use client';

import Link from 'next/link';
import { HeaderDropdown } from './HeaderDropdown';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Header() {
  const politicalViewpointItems = [
    { name: 'Republican', subtext: 'Conservative market analysis' },
    { name: 'Democrat', subtext: 'Progressive economic insights', active: true },
    { name: 'Liberal', subtext: 'Social-focused market views' },
    { name: 'Independent', subtext: 'Unbiased market perspective' },
  ];
  const logoImage = PlaceHolderImages.find(p => p.id === 'logo');
  return (
    <header className="header-nav">
      {logoImage && (
        <Image
          src={logoImage.imageUrl}
          alt={logoImage.description}
          width={200}
          height={40}
          className="logo-image"
          data-ai-hint={logoImage.imageHint}
        />
      )}
      <nav>
        <Link href="#" className="nav-item impact-glow">
          Impact
        </Link>
        <Link href="#" className="nav-item">
          Sports Betting
        </Link>
        <Link href="#" className="nav-item">
          Sports
        </Link>
        <Link href="#" className="nav-item">
          World Sports
        </Link>
        <Link href="#" className="nav-item">
          Products
        </Link>
        <Link href="#" className="nav-item active-market">
          Markets
        </Link>
        <HeaderDropdown title="Politics" items={politicalViewpointItems} />
        <Link href="#" className="nav-item">
          More
        </Link>
      </nav>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search markets..."
          className="search-input"
        />
      </div>
      <div className="nav-right">
        <Link href="#" className="nav-item community-glow">
          Community
        </Link>
        <Link href="#" className="nav-item">
          LOGIN
        </Link>
        <Link href="#" className="nav-item">
          JOIN
        </Link>
      </div>
    </header>
  );
}
