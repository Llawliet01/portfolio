'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download, Brain, Code, Award, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/Llawliet01' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/yug-patel-595ba4264/' },
  { name: 'LeetCode', icon: Award, href: 'https://leetcode.com/u/patelyug01234/' },
  { name: 'GeeksforGeeks', icon: GraduationCap, href: 'https://www.geeksforgeeks.org/profile/patelyu0n4z' },
  { name: 'Email', icon: Mail, href: 'mailto:patelyug01234@gmail.com' },
];

const featureCards = [
  {
    icon: Brain,
    title: 'AI / Computer Vision',
    desc: 'Real-time Systems',
    color: 'border-accent-blue/20 hover:border-accent-blue/50 text-accent-blue',
  },
  {
    icon: Code,
    title: 'Full Stack',
    desc: 'Developer',
    color: 'border-accent-cyan/20 hover:border-accent-cyan/50 text-accent-cyan',
  },
  {
    icon: Award,
    title: 'Problem Solver',
    desc: 'DSA Enthusiast',
    color: 'border-accent-purple/20 hover:border-accent-purple/50 text-accent-purple',
  },
  {
    icon: GraduationCap,
    title: 'Lifelong Learner',
    desc: 'Always Exploring',
    color: 'border-emerald-500/20 hover:border-emerald-500/50 text-emerald-400',
  },
];

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden grid-bg">
      {/* Glow Effects */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-accent-blue/10 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-accent-purple/10 blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Info */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold uppercase tracking-wider mb-6 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            Available for Internships & Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold font-heading tracking-tight text-text-primary mb-2"
          >
            Hello, I'm
            <span className="block mt-1 gradient-text-blue-cyan text-glow-blue">YUG PATEL</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-semibold text-accent-cyan tracking-wide mb-6 font-heading"
          >
            AI & Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mb-8"
          >
            Building intelligent real-time applications using AI, Computer Vision, and modern web technologies. Focus on creating seamless, fast, and interactive user experiences powered by smart backends.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center mb-8"
          >
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02]"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/yug_patel_resume.pdf"
              download="yug_patel_resume.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-bg-card border border-white/5 text-text-primary hover:border-white/20 hover:bg-white/5 font-semibold text-sm transition-all"
            >
              Download Resume
              <Download className="w-4 h-4 text-text-secondary" />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 items-center"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-bg-card/60 border border-white/5 text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 hover:bg-bg-card transition-all hover:scale-[1.08]"
                  title={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right Side: Interactive Image Widget */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] flex justify-center items-center"
          >
            {/* Pulsing Backlight */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-purple opacity-20 blur-[60px] animate-pulse-slow" />
            
            {/* Spinning Neon Rings */}
            <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-accent-blue/30 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[85%] h-[85%] rounded-full border border-double border-accent-cyan/20 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[105%] h-[105%] rounded-full border border-accent-purple/10 blur-[2px]" />

            {/* Glowing Border Frame */}
            <div className="relative w-[80%] h-[80%] rounded-full p-[2px] bg-gradient-to-tr from-accent-blue via-accent-cyan to-accent-purple shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-bg-dark relative">
                <Image
                  src="/yug_portrait.png"
                  alt="Yug Patel"
                  fill
                  className="object-cover object-top"
                  priority
                />
                
                {/* Visual tech overlay grid effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="max-w-7xl w-full mx-auto px-6 mt-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`glass-card p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.02] flex flex-col gap-3 group cursor-pointer ${card.color}`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-text-primary text-sm font-semibold tracking-wide font-heading">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-xs mt-0.5">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
