
import { Header } from '@/components/layout/header';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const miners = [
    { name: 'CGMiner', description: 'One of the oldest and most customizable miners for ASICs', link: 'https://github.com/ckolivas/cgminer' },
    { name: 'BFGMiner', description: 'Modular ASIC/FPGA miner with advanced features', link: 'https://github.com/luke-jr/bfgminer' },
    { name: 'XMRig', description: 'High-performance CPU/GPU miner for Monero and other RandomX coins', link: 'https://github.com/xmrig/xmrig' },
    { name: 'cpuminer (minerd)', description: 'Lightweight CPU miner for SHA-256 and scrypt coins', link: 'https://github.com/pooler/cpuminer' },
    { name: 'EasyMiner', description: 'GUI frontend for mining Bitcoin, Litecoin, and altcoins', link: 'https://easyminer.net' },
    { name: 'MultiMiner', description: 'Beginner-friendly GUI for BFGMiner', link: 'https://github.com/nwoolls/MultiMiner' },
    { name: 'NiceHash QuickMiner', description: 'Proprietary but free miner for NVIDIA GPUs', link: 'https://www.nicehash.com/quick-miner' },
    { name: 'Cudo Miner', description: 'Cross-platform miner with auto-optimization', link: 'https://www.cudominer.com' },
    { name: 'Awesome Miner', description: 'Management software for multiple mining rigs', link: 'https://www.awesomeminer.com' },
    { name: 'Crypto-mining-software-open-source', description: 'Community-built miner for Windows', link: 'https://github.com/Crypto-mining-software-open-source' }
];

export default function FreeMinersPage() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-12">
                <div className="center-content max-w-4xl mx-auto">
                    
                    <div className="relative p-6 rounded-lg border-2 border-yellow-500/80 bg-yellow-900/30 shadow-[0_0_20px_rgba(255,223,0,0.3)] mb-12">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="text-2xl font-bold text-yellow-300">International Disclaimer</h2>
                                <p className="mt-2 text-yellow-200/90">
                                    By reading or using this list, you acknowledge that downloading, installing, or running any mining software is entirely your own decision. Neither Microsoft Copilot, Quantum Chart, nor any affiliated parties assume responsibility for your actions, outcomes, or system impact. Always verify software integrity, legality, and compatibility before use. Mining may be regulated or restricted in your jurisdiction.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold neon-text text-center mb-10">
                        🛠️ Free Crypto Mining Software (2025)
                    </h1>
                    
                    <div className="space-y-8">
                        {miners.map((miner, index) => (
                            <div key={index} className="p-6 rounded-lg bg-black/50 border border-cyan-400/30 shadow-lg">
                                <h3 className="text-2xl font-bold text-cyan-300">{index + 1}. {miner.name}</h3>
                                <p className="text-gray-300 mt-2 text-lg">{miner.description}</p>
                                <div className="mt-4">
                                    <Link href={miner.link} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline break-all">
                                        {miner.link}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
        </>
    );
}
