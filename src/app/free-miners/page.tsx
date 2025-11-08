
import { Header } from '@/components/layout/header';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function FreeMinersPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="center-content max-w-4xl mx-auto">
                    
                    <h1 className="text-3xl md:text-4xl font-bold neon-text text-center mb-10">
                        🧱 Step-by-Step Miner Selection Guide for Home Computers (Windows &amp; macOS)
                    </h1>
                    
                    <div className="space-y-12">

                        {/* Step 1 */}
                        <section className="p-6 rounded-lg bg-black/50 border border-cyan-400/30 shadow-lg">
                            <h2 className="text-2xl font-bold text-cyan-300 mb-4">1. Identify Your Hardware Type</h2>
                            <p className="text-gray-300 mb-4">**Goal:** Determine whether your computer uses CPU, GPU, or ASIC mining.</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>**CPU Mining**: Most basic; works on nearly all computers but low profitability.
                                  <span className="text-gray-400 block text-sm ml-6">Example coins: Monero (XMR), VerusCoin (VRSC)</span></li>
                                <li>**GPU Mining**: Requires a dedicated graphics card (NVIDIA or AMD).
                                  <span className="text-gray-400 block text-sm ml-6">Example coins: Ravencoin (RVN), Ergo (ERG), Ethereum Classic (ETC)</span></li>
                                <li>**ASIC Mining**: Specialized hardware (not typical for home users).
                                    <span className="text-gray-400 block text-sm ml-6">Example coins: Bitcoin (BTC), Litecoin (LTC), Dash (DASH)</span></li>
                            </ul>
                            <div className="mt-4 text-gray-300">
                                <p className="font-bold">How to check:</p>
                                <ul className="list-disc list-inside ml-4">
                                    <li>On **Windows**: Open Task Manager → Performance tab → Check CPU and GPU specs.</li>
                                    <li>On **macOS**: Click Apple logo → About This Mac → Overview tab.</li>
                                </ul>
                            </div>
                        </section>

                        {/* Step 2 */}
                        <section className="p-6 rounded-lg bg-black/50 border border-pink-400/30 shadow-lg">
                            <h2 className="text-2xl font-bold text-pink-300 mb-4">2. Choose Your Coin Type</h2>
                            <p className="text-gray-300 mb-4">**Goal:** Select a coin that matches your hardware and mining goals.</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>**Privacy Coins**: Monero (XMR), Firo — best for CPU or GPU</li>
                                <li>**Payment Coins**: Bitcoin (BTC), Litecoin (LTC) — best for ASIC</li>
                                <li>**Smart Contract Coins**: Ethereum Classic (ETC), Ergo — best for GPU</li>
                                <li>**Experimental Coins**: Kaspa (KAS), Radiant (RXD) — GPU or CPU</li>
                            </ul>
                             <p className="mt-4 text-gray-300">
                                **Tip:** Use sites like <Link href="https://whattomine.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">WhatToMine.com</Link> to compare profitability and hardware compatibility.
                            </p>
                        </section>

                        {/* Step 3 */}
                        <section className="p-6 rounded-lg bg-black/50 border border-cyan-400/30 shadow-lg">
                            <h2 className="text-2xl font-bold text-cyan-300 mb-4">3. Match Miner Software to Your Setup</h2>
                            <p className="text-gray-300 mb-6">**Goal:** Pick mining software that supports your coin, hardware, and OS.</p>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-cyan-200 mb-2">✅ CPU Miners</h3>
                                    <p>**XMRig** – Monero, RandomX coins (OS: Windows, macOS, Linux)</p>
                                    <Link href="https://github.com/xmrig/xmrig" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline break-all">https://github.com/xmrig/xmrig</Link>
                                    <p className="mt-2">**cpuminer (minerd)** – SHA-256, Scrypt coins (OS: Windows, macOS)</p>
                                    <Link href="https://github.com/pooler/cpuminer" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline break-all">https://github.com/pooler/cpuminer</Link>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-cyan-200 mb-2">✅ GPU Miners</h3>
                                    <p>**NBMiner** – NVIDIA/AMD, Ravencoin, Ergo (OS: Windows, Linux)</p>
                                    <Link href="https://github.com/NebuTech/NBMiner" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline break-all">https://github.com/NebuTech/NBMiner</Link>
                                    <p className="mt-2">**TeamRedMiner** – AMD-focused (OS: Windows, Linux)</p>
                                    <Link href="https://github.com/todxx/teamredminer" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline break-all">https://github.com/todxx/teamredminer</Link>
                                    <p className="mt-2">**GMiner** – NVIDIA/AMD, Kaspa, ETC (OS: Windows, Linux)</p>
                                    <Link href="https://github.com/develsoftware/GMinerRelease" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline break-all">https://github.com/develsoftware/GMinerRelease</Link>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-cyan-200 mb-2">✅ ASIC Miners</h3>
                                    <p>**CGMiner** – Bitcoin, Litecoin (OS: Windows, Linux)</p>
                                    <Link href="https://github.com/ckolivas/cgminer" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline break-all">https://github.com/ckolivas/cgminer</Link>
                                    <p className="mt-2">**BFGMiner** – Modular ASIC/FPGA (OS: Windows, macOS, Linux)</p>
                                    <Link href="https://github.com/luke-jr/bfgminer" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline break-all">https://github.com/luke-jr/bfgminer</Link>
                                </div>
                            </div>
                        </section>

                        {/* Step 4 */}
                        <section className="p-6 rounded-lg bg-black/50 border border-pink-400/30 shadow-lg">
                            <h2 className="text-2xl font-bold text-pink-300 mb-4">4. Check Operating System Compatibility</h2>
                            <p className="text-gray-300 mb-4">**Goal:** Ensure the miner runs smoothly on your OS.</p>
                             <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>**Windows 10/11**: Most miners support Windows. Use `.exe` installers or command-line tools.</li>
                                <li>**macOS**: Fewer miners available. Use Terminal and compile from source if needed. 
                                <pre className="bg-gray-800 p-2 rounded-md mt-1 text-sm text-cyan-300"><code>brew install cmake && git clone https://github.com/xmrig/xmrig.git</code></pre>
                                </li>
                            </ul>
                            <p className="mt-4 text-gray-300">**Tip:** Always run miners as administrator and whitelist them in antivirus software (they’re often flagged falsely).</p>
                        </section>

                         {/* Step 5 */}
                        <section className="p-6 rounded-lg bg-black/50 border border-cyan-400/30 shadow-lg">
                            <h2 className="text-2xl font-bold text-cyan-300 mb-4">5. Configure and Launch Your Miner</h2>
                            <p className="text-gray-300 mb-4">**Goal:** Set up your miner with the correct pool and wallet.</p>
                             <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>**Choose a mining pool**: e.g., <Link href="https://minexmr.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">minexmr.com</Link> for Monero, <Link href="https://2miners.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">2miners.com</Link> for Ravencoin</li>
                                <li>**Enter your wallet address**: This is where mined coins are sent.</li>
                                <li>**Set launch parameters**: Usually via `.bat` (Windows) or `.sh` (macOS) files.</li>
                            </ul>
                            <p className="mt-4 text-gray-300">**Example (XMRig config):**</p>
                            <pre className="bg-gray-800 p-3 rounded-md mt-1 text-sm text-cyan-300"><code>xmrig -o pool.minexmr.com:443 -u YOUR_WALLET_ADDRESS -k --tls</code></pre>
                        </section>

                        {/* Step 6 */}
                        <section className="p-6 rounded-lg bg-black/50 border border-pink-400/30 shadow-lg">
                            <h2 className="text-2xl font-bold text-pink-300 mb-4">6. Monitor Performance and Safety</h2>
                            <p className="text-gray-300 mb-4">**Goal:** Track your mining stats and keep your system safe.</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Use built-in miner dashboards or pool websites.</li>
                                <li>Watch CPU/GPU temperatures (HWMonitor, MSI Afterburner).</li>
                                <li>Avoid mining on battery power or overheating your system.</li>
                            </ul>
                        </section>

                        {/* Disclaimer */}
                        <div className="relative p-6 rounded-lg border-2 border-yellow-500/80 bg-yellow-900/30 shadow-[0_0_20px_rgba(255,223,0,0.3)] mt-12">
                            <div className="flex items-start gap-4">
                                <AlertTriangle className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h2 className="text-2xl font-bold text-yellow-300">Legal and Ethical Reminder</h2>
                                    <p className="mt-2 text-yellow-200/90">
                                        Mining software may be restricted or regulated in your country. Always check local laws. You are solely responsible for downloading, installing, and running any mining software. AiQuantum Chart, and affiliated parties assume no liability for your actions or outcomes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

    