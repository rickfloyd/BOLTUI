'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { metaverseProjects } from '@/data/metaverse-projects';

export default function MetaverseProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = metaverseProjects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="dashboard-grid">
        <section className="center-content">
          <h1 className="text-3xl font-bold neon-text text-center mt-8">Metaverse & NFT Projects</h1>
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto">
            A curated list of projects building the metaverse, from virtual worlds and gaming platforms to the underlying infrastructure and tools.
          </p>
          <div className="w-full mt-4">
            <Input
              type="text"
              placeholder="Search metaverse & NFT projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-800 border-cyan-400 text-white"
            />
          </div>
          <div className="w-full overflow-x-auto mt-8">
            <div className="info-table-card">
              <table className="info-table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Website</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project, index) => (
                    <tr key={`${project.name}-${index}`} className="hover:bg-white/5">
                      <td className="neon-orange">{index + 1}</td>
                      <td className="neon-cyan">{project.name}</td>
                      <td>
                        <Link href={project.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                          Visit <ExternalLink size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredProjects.length === 0 && (
                <p className="text-center text-gray-400 py-8">No projects found matching your search.</p>
              )}
            </div>
          </div>
        </section>
      </main>
      <Link href="/main" className="fixed bottom-4 left-4 nav-item neon-pink flex items-center gap-2">
        <ArrowLeft size={16} />
        Back
      </Link>
    </>
  );
}
