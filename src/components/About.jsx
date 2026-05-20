'use client';

import { motion } from 'framer-motion';
import { Terminal, Award, Briefcase, GraduationCap, Code } from 'lucide-react';
import { useEffect, useState } from 'react';

const stats = [
  { label: 'CGPA', value: 8.60, suffix: '', decimals: 2, icon: GraduationCap },
  { label: 'Projects', value: 3, suffix: '+', decimals: 0, icon: Briefcase },
  { label: 'Tech Stack', value: 10, suffix: '+', decimals: 0, icon: Code },
  { label: 'DSA Solved', value: 500, suffix: '+', decimals: 0, icon: Award },
];

function CountUp({ value, suffix, decimals }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // ms
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-[#0A0D16]">
      {/* Background glow */}
      <div className="absolute top-[30%] right-[-10%] w-[300px] h-[300px] rounded-full bg-accent-cyan/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-accent-purple/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-accent-blue" />
            <span className="text-accent-blue text-xs font-semibold uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
            Engineering Intelligent Systems
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent-blue/10 to-transparent rounded-bl-3xl pointer-events-none" />
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold font-heading">Education & Focus</h3>
                  <p className="text-xs text-text-secondary">IIIT Surat — Computer Science</p>
                </div>
              </div>

              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                I’m a Computer Science student at <strong className="text-accent-cyan">IIIT Surat</strong> focused on AI-powered applications, computer vision systems, and modern web development. I enjoy building scalable real-time products combining intelligent backend systems with polished frontend experiences.
              </p>
              
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                My technical journey involves digging deep into computer vision models like <strong className="text-text-primary">YOLOv8</strong>, utilizing media processing pipelines with <strong className="text-text-primary">OpenCV & MediaPipe</strong>, and hooking them up to reactive clients using asynchronous backends built with <strong className="text-accent-blue">FastAPI, WebSockets, and React</strong>.
              </p>
            </div>

            {/* Stats Cards Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="glass-card p-5 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center gap-2 group hover:border-accent-blue/20 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary group-hover:text-accent-blue transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-2xl sm:text-3xl font-bold font-heading text-text-primary">
                        <CountUp value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                      </div>
                      <div className="text-[10px] sm:text-xs text-text-secondary uppercase tracking-wider mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Block: IDE Mockup */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="w-full glass-card rounded-3xl border border-white/5 flex flex-col overflow-hidden shadow-2xl relative">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-bg-card/90">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-secondary font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  yug_patel.py
                </div>
                <div className="w-12" /> {/* Spacer */}
              </div>

              {/* Terminal Contents */}
              <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-bg-dark/40 flex-1 flex flex-col justify-center">
                <div className="text-text-secondary">
                  <span className="text-accent-purple">class</span> <span className="text-accent-blue">Developer</span>:
                </div>
                <div className="pl-4 text-text-secondary mt-1">
                  def <span className="text-accent-cyan">__init__</span>(self):
                </div>
                <div className="pl-8 text-text-secondary">
                  self.name = <span className="text-emerald-400">"Yug Patel"</span>
                </div>
                <div className="pl-8 text-text-secondary">
                  self.role = <span className="text-emerald-400">"AI & Full Stack Engineer"</span>
                </div>
                <div className="pl-8 text-text-secondary">
                  self.college = <span className="text-emerald-400">"IIIT Surat"</span>
                </div>
                
                <div className="pl-4 mt-3 text-text-secondary">
                  def <span className="text-accent-cyan">get_interests</span>(self):
                </div>
                <div className="pl-8 text-text-secondary">
                  <span className="text-accent-purple">return</span> [
                </div>
                <div className="pl-12 text-emerald-400">
                  "Computer Vision",
                </div>
                <div className="pl-12 text-emerald-400">
                  "FastAPI & Scalable Backends",
                </div>
                <div className="pl-12 text-emerald-400">
                  "Interactive UI Design",
                </div>
                <div className="pl-12 text-emerald-400">
                  "Asynchronous WebSockets"
                </div>
                <div className="pl-8 text-text-secondary">
                  ]
                </div>

                <div className="pl-4 mt-3 text-text-secondary">
                  def <span className="text-accent-cyan">motto</span>(self):
                </div>
                <div className="pl-8 text-text-secondary">
                  print(<span className="text-emerald-400">"Building real-world impact through code."</span>)
                </div>
              </div>

              {/* Glowing Corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tr from-accent-cyan/10 to-transparent rounded-br-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
