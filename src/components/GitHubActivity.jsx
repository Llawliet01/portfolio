'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { GitCommit, GitBranch, Star, Award, Layers } from 'lucide-react';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const stats = [
  { label: 'Commits', value: '25+', icon: GitCommit },
  { label: 'Repositories', value: '7', icon: Layers },
  { label: 'Contributions', value: '20 this year', icon: GitBranch },
];

const topLanguages = [
  { name: 'JavaScript', percent: 55, color: '#F7DF1E', offset: 0 },
  { name: 'Python', percent: 25, color: '#3776AB', offset: 55 },
  { name: 'HTML & CSS', percent: 10, color: '#E34C26', offset: 80 },
  { name: 'Others', percent: 10, color: '#8B5CF6', offset: 90 },
];

export default function GitHubActivity() {
  const [hoveredTile, setHoveredTile] = useState(null);
  const [gridData, setGridData] = useState([]);

  // Generate mock contribution grid data with exactly 20 contributions
  useEffect(() => {
    const data = [];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Build empty grid first
    for (let c = 0; c < 26; c++) {
      const col = [];
      for (let r = 0; r < 7; r++) {
        const date = new Date();
        date.setDate(date.getDate() - (26 - c) * 7 + r);
        const dateString = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
        col.push({ level: 0, count: 0, date: dateString });
      }
      data.push(col);
    }

    // Place exactly 20 contributions randomly
    let contributionsPlaced = 0;
    while (contributionsPlaced < 20) {
      const randomCol = Math.floor(Math.random() * 26);
      const randomRow = Math.floor(Math.random() * 7);
      if (data[randomCol][randomRow].count === 0) {
        const level = Math.floor(Math.random() * 3) + 1; // Level 1-3
        const count = Math.floor(Math.random() * level * 2) + 1; // Count 1-6
        data[randomCol][randomRow].level = level;
        data[randomCol][randomRow].count = count;
        contributionsPlaced++;
      }
    }

    setGridData(data);
  }, []);

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#0A0D16]">
      {/* Background Glow */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-accent-blue/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-accent-blue" />
            <span className="text-accent-blue text-xs font-semibold uppercase tracking-wider">Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
            Open Source & Github Stats
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Grid & Stats */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Grid Box */}
            <div className="glass-card p-6 rounded-3xl border border-white/5 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2.5">
                  <Github className="w-5 h-5 text-accent-cyan" />
                  <div>
                    <h3 className="text-text-primary text-sm font-bold font-heading">Llawliet01</h3>
                    <p className="text-[10px] text-text-secondary">GitHub Contribution Map (20 contributions in the last year)</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-text-secondary font-mono">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded bg-white/5" />
                  <div className="w-2.5 h-2.5 rounded bg-emerald-900/40" />
                  <div className="w-2.5 h-2.5 rounded bg-emerald-700/60" />
                  <div className="w-2.5 h-2.5 rounded bg-emerald-500/80" />
                  <div className="w-2.5 h-2.5 rounded bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>

              {/* Matrix Layout */}
              <div className="relative overflow-x-auto hide-scrollbar py-2">
                <div className="flex gap-1 min-w-[380px] justify-between">
                  {gridData.map((col, cIdx) => (
                    <div key={cIdx} className="flex flex-col gap-1">
                      {col.map((tile, tIdx) => {
                        let bgClass = 'bg-white/5';
                        if (tile.level === 1) bgClass = 'bg-emerald-950/60 hover:bg-emerald-900';
                        else if (tile.level === 2) bgClass = 'bg-emerald-800/65 hover:bg-emerald-700';
                        else if (tile.level === 3) bgClass = 'bg-emerald-600/80 hover:bg-emerald-500';
                        else if (tile.level === 4) bgClass = 'bg-emerald-400 hover:bg-emerald-300';

                        const tileId = `${cIdx}-${tIdx}`;

                        return (
                          <div
                            key={tIdx}
                            onMouseEnter={() => setHoveredTile(tile)}
                            onMouseLeave={() => setHoveredTile(null)}
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] transition-all cursor-pointer ${bgClass} hover:scale-125 hover:shadow-[0_0_5px_rgba(16,185,129,0.5)]`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tooltip text box */}
              <div className="h-6 font-mono text-[10px] text-text-secondary flex items-center justify-center border-t border-white/5 pt-3">
                {hoveredTile ? (
                  <span className="text-accent-cyan">
                    {hoveredTile.count} contributions on {hoveredTile.date}
                  </span>
                ) : (
                  <span>Hover over the grid tiles to view contributions activity</span>
                )}
              </div>
            </div>

            {/* Quick Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="glass-card p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-accent-blue/15 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary group-hover:text-accent-cyan transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold font-heading text-text-primary leading-none">{stat.value}</div>
                      <div className="text-[10px] text-text-secondary mt-1 font-semibold uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Block: Languages Doughnut Chart */}
          <div className="lg:col-span-4 flex items-stretch">
            <div className="w-full glass-card p-6 rounded-3xl border border-white/5 flex flex-col justify-between gap-6 shadow-[0_0_20px_rgba(0,0,0,0.15)] relative">
              <div>
                <h3 className="text-text-primary text-sm font-bold font-heading mb-4">Top Languages</h3>
                
                {/* SVG Doughnut */}
                <div className="flex justify-center items-center py-4 relative">
                  <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="12" />
                    
                    {/* JS 55% (dasharray: 2 * pi * 40 * 0.55 = 138.2) */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#F7DF1E" strokeWidth="12" 
                      strokeDasharray="138.2 251.3" strokeDashoffset="0" />
                    
                    {/* Python 25% (dasharray: 2 * pi * 40 * 0.25 = 62.8, offset: -138.2) */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3776AB" strokeWidth="12" 
                      strokeDasharray="62.8 251.3" strokeDashoffset="-138.2" />
                    
                    {/* HTML & CSS 10% (dasharray: 2 * pi * 40 * 0.10 = 25.1, offset: -201.0) */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E34C26" strokeWidth="12" 
                      strokeDasharray="25.1 251.3" strokeDashoffset="-201.0" />

                    {/* Others 10% (dasharray: 25.1, offset: -226.1) */}
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8B5CF6" strokeWidth="12" 
                      strokeDasharray="25.1 251.3" strokeDashoffset="-226.1" />
                  </svg>
                  
                  {/* Center percentage summary info */}
                  <div className="absolute flex flex-col items-center justify-center font-mono">
                    <span className="text-lg font-bold text-text-primary">JS</span>
                    <span className="text-[10px] text-text-secondary">Rank #1</span>
                  </div>
                </div>
              </div>

              {/* Labels list */}
              <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                {topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                      <span className="text-text-secondary font-medium">{lang.name}</span>
                    </div>
                    <span className="text-text-primary font-bold font-mono">{lang.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
