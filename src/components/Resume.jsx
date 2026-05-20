'use client';

import { motion } from 'framer-motion';
import { Download, Eye, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Resume() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  };

  return (
    <section id="resume" className="py-24 px-6 relative overflow-hidden bg-[#0A0D16]">
      {/* Glow Effects */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-accent-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-accent-blue" />
            <span className="text-accent-blue text-xs font-semibold uppercase tracking-wider">Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
            Resume / Curriculum Vitae
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Interactive Resume PDF Preview */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <div className="w-full max-w-[520px] aspect-[1/1.414] bg-[#111827] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden relative group">
              <iframe
                src="/yug_patel_resume.pdf#toolbar=0&navpanes=0"
                className="w-full h-full border-0 bg-[#0F131E]"
                title="Yug Patel Resume Preview"
              />
              {/* Overlay block to allow scrolling through pages and keep UI neat */}
              <div className="absolute inset-0 bg-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Block: Action triggers */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold font-heading text-text-primary mb-3">Download / Preview</h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Review the detailed structural outline of my skills, projects, academics, and experience. Ready for immediate deployment and review.
              </p>
            </div>

            {/* File info card */}
            <div className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-3.5 font-mono text-xs text-text-secondary">
              <FileText className="w-8 h-8 text-accent-cyan" />
              <div>
                <p className="text-text-primary font-bold">yug_patel_resume.pdf</p>
                <p className="text-[10px] mt-0.5">Format: PDF | Size: 1.2 MB</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/yug_patel_resume.pdf"
                download="yug_patel_resume.pdf"
                onClick={triggerConfetti}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02] text-center cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href="/yug_patel_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={triggerConfetti}
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-bg-card border border-white/5 text-text-primary hover:bg-white/5 hover:border-white/20 text-xs font-bold uppercase tracking-wider transition-all text-center cursor-pointer"
              >
                <Eye className="w-4 h-4 text-text-secondary" />
                Open In Tab
              </a>
            </div>

            {/* Quick points */}
            <div className="flex flex-col gap-2.5 text-xs text-text-secondary">
              {[
                'Features full coursework & GPA metrics',
                'Includes production-ready technical system links',
                'Optimized for Applicant Tracking Systems (ATS)',
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
