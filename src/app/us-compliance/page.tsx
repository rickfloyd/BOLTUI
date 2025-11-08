
import { Header } from '@/components/layout/header';
import { ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function UsCompliancePage() {
  const aiEngineImage = PlaceHolderImages.find(p => p.id === 'ai-engine');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.4)] backdrop-blur-md border border-cyan-400/40">
            <div className="text-center mb-12">
              <ShieldCheck className="mx-auto h-16 w-16 text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
              <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-white drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
                U.S. Compliance Architecture
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                This document outlines the technical architecture for our plug-in engine system, designed to be fully compliant and user-controlled.
              </p>
            </div>

            <div className="space-y-10 text-gray-300">
              <section>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">1. Core Concept</h2>
                <p>Each engine becomes a plug-in with a Boolean flag in the user’s profile document.</p>
                {aiEngineImage && (
                  <div className="relative my-6 flex justify-center items-center">
                    <Image
                      src={aiEngineImage.imageUrl}
                      alt={aiEngineImage.description}
                      width={150}
                      height={150}
                      data-ai-hint={aiEngineImage.imageHint}
                      className="opacity-70"
                    />
                  </div>
                )}
                 <pre className="bg-gray-900/70 p-4 rounded-lg mt-4 border border-cyan-400/30 overflow-x-auto">
                  <code>
{`"userEngines": {
  "marketBridge": true,
  "automationConnector": false,
  "patternLab": true,
  "aiAnalyzer": false,
  "riskVisualizer": true
}`}
                  </code>
                </pre>
                <p className="mt-4">So when a user loads any chart—Area, Renko, Volume, etc.—the backend checks their preferences and activates only the approved engines.</p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">2. Firebase / Firestore Structure</h2>
                <p>User preferences are stored in a dedicated \`activeEngines\` object within their user document.</p>
                <p className="mt-2"><strong>Collection:</strong> users</p>
                <p><strong>Document:</strong> {'{uid}'}</p>
                <pre className="bg-gray-900/70 p-4 rounded-lg mt-4 border border-cyan-400/30 overflow-x-auto">
                  <code>
{`{
  "email": "user@example.com",
  "preferredTheme": "neon-dark",
  "activeEngines": {
    "marketBridge": true,
    "patternLab": true,
    "aiAnalyzer": false
  }
}`}
                  </code>
                </pre>
                <p className="mt-4">This makes it easy to query and toggle:</p>
                <pre className="bg-gray-900/70 p-4 rounded-lg mt-4 border border-cyan-400/30 overflow-x-auto">
                  <code>
{`// Read preferences
const userDoc = await getDoc(doc(db, "users", uid));
const activeEngines = userDoc.data().activeEngines;

// Update a preference
await updateDoc(doc(db, "users", uid), {
  [\`activeEngines.\${engineId}\`]: newValue,
});`}
                  </code>
                </pre>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">3. User-Side Controls</h2>
                <p>On every chart panel, a floating “Engines” toggle menu will be available, allowing users to enable or disable engines on the fly.</p>
                 <pre className="bg-gray-900/70 p-4 rounded-lg mt-4 border border-cyan-400/30 overflow-x-auto">
                  <code>
{`<EngineToggle
  options={[
    { id: "marketBridge", name: "Market Data Bridge" },
    { id: "patternLab", name: "Pattern Recognition Lab" },
    { id: "aiAnalyzer", name: "AI Market Analyzer" },
  ]}
  userEngines={activeEngines}
  onToggle={(id, value) => updateEnginePref(id, value)}
/>`}
                  </code>
                </pre>
                <p className="mt-4">Each toggle simply updates the user’s \`activeEngines\` object in Firestore—no advice, no automation.</p>
              </section>
              
              <section>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">4. Backend Activation</h2>
                <p>When a chart loads, your API route reads the user's engine flags and applies the corresponding data transformations sequentially.</p>
                <pre className="bg-gray-900/70 p-4 rounded-lg mt-4 border border-cyan-400/30 overflow-x-auto">
                  <code>
{`// Example: pages/api/chartData.ts
import { getUserEngines } from "../../lib/userUtils";
import { runMarketBridge, runPatternLab } from "../../engines";

export default async function handler(req, res) {
  const { uid, chartType } = req.query;
  const engines = await getUserEngines(uid);

  let data = await runMarketBridge(chartType);

  if (engines.patternLab) data = await runPatternLab(data);
  if (engines.aiAnalyzer) data = await runAIAnalyzer(data);

  res.status(200).json(data);
}`}
                  </code>
                </pre>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">5. Compliance & UX</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Every toggle is labeled: “For informational use only — no trade execution.”</li>
                    <li>Engines are kept within the Data / Research namespace.</li>
                    <li>A visual cue (🟢 Active / ⚪ Off) provides clarity.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 text-cyan-300">6. Benefits</h2>
                 <ul className="list-disc list-inside space-y-2">
                    <li>Users can personalize their workspace.</li>
                    <li>You can expand to hundreds of optional engines without clutter.</li>
                    <li>Legal safety: nothing executes automatically; everything is user-controlled.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
