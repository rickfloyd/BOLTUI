
import { Header } from '@/components/layout/header';
import { MainSidebar } from '@/components/layout/main-sidebar';

export default function Page() {
  const cards = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <MainSidebar />
        <section className="center-content">
            
            <div className="info-banner">
                <p>90% of every payment directly funds educational programs for future traders</p>
                <div className="stats-row">
                    <div className="stat-box">
                        <div className="stat-number">12,911</div>
                        <div className="stat-label">Students Helped</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">156</div>
                        <div className="stat-label">Free Courses</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">348</div>
                        <div className="stat-label">Scholarships</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">28</div>
                        <div className="stat-label">Free Tools</div>
                    </div>
                </div>
            </div>

            <div className="cards-column">
                {cards.map((card) => (
                    <div key={card} className="data-card neon-blue-border">
                        <div className="card-header">
                            <span className="card-title">Stock Index {card}</span>
                        </div>
                        <div className="card-data">
                            <span className="price">${(300 + Math.random() * 100).toFixed(2)}</span>
                            <span className={`change ${Math.random() > 0.5 ? 'positive' : 'negative'}`}>
                                {(Math.random() * 2 - 1).toFixed(2)}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="dxy-card neon-pink-border">
                 <div className="dxy-title">DXY (US Dollar Index)</div>
                 <div className="dxy-data">
                     <span className="dxy-price">105.42</span>
                     <span className="dxy-change negative">-0.38 (-0.36%)</span>
                 </div>
            </div>
            
        </section>
      </main>
    </>
  );
}
