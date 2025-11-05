import Link from 'next/link';

export function Header() {
  return (
    <header className="header-nav">
      <div className="logo">AI QUANTUM CHARTS</div>
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
        <Link href="#" className="nav-item">
          More
        </Link>
      </nav>
      <div className="search-box">
        <input type="text" placeholder="Search markets..." className="search-input" />
      </div>
      <div className="nav-right">
        <Link href="#" className="nav-item">
          Stocks
        </Link>
        <Link href="#" className="nav-item">
          Commodities
        </Link>
        <Link href="#" className="nav-item community-glow">
          Community
        </Link>
      </div>
    </header>
  );
}
