
import { Header } from '@/components/layout/header';
import { HeartHandshake } from 'lucide-react';

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="relative z-10 p-8 md:p-12 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.4)] backdrop-blur-md border border-pink-400/40">
            <div className="text-center mb-12">
              <HeartHandshake className="mx-auto h-16 w-16 text-pink-400 drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]" />
              <h1 className="text-4xl md:text-5xl font-extrabold mt-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,255,255,0.6)]">
                Our Impact Statement
              </h1>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Once our company goals are achieved, a percentage of every paying customer’s monthly subscription will be directed into a private scholarship fund. This fund will provide grants to high school students who aspire to attend business and finance specialty schools. It’s our way of investing in the next generation of innovators — and that’s what makes us different.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
