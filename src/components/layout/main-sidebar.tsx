'use client';
import { useState } from 'react';
import Link from 'next/link';

export function MainSidebar() {
  const [isPoliticalOpen, setPoliticalOpen] = useState(false);

  return (
    <aside className="sidebar-menu">
      <h2 className="sidebar-title">Main Menu</h2>
      <nav>
        <Link href="/markets" className="sidebar-item">Markets</Link>
        <Link href="/news" className="sidebar-item">News</Link>
        
        <div>
          <button 
            onClick={() => setPoliticalOpen(!isPoliticalOpen)}
            className="sidebar-item w-full text-left flex justify-between items-center"
          >
            POLITICAL VIEWPOINT
            <span>{isPoliticalOpen ? '−' : '+'}</span>
          </button>
          {isPoliticalOpen && (
            <div className="sidebar-dropdown">
              <Link href="#" className="sidebar-item">Democrat</Link>
              <Link href="#" className="sidebar-item">Republican</Link>
              <Link href="#" className="sidebar-item">Independent</Link>
            </div>
          )}
        </div>

        <Link href="/community" className="sidebar-item">Community</Link>
      </nav>
    </aside>
  );
}
