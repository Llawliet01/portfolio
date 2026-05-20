'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const techItems = [
  {
    name: 'Python',
    color: 'from-[#3776AB] to-[#FFD343]',
    shadow: 'shadow-[#3776AB]/20',
    borderColor: 'border-[#3776AB]/30 hover:border-[#3776AB]/70',
    textColor: 'text-[#FFD343]',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25.18c.9 0 1.66.72 1.66 1.62v2.28h-3.32v.9h4.51c1.55 0 2.8 1.2 2.8 2.73v3.15c0 1.52-1.25 2.73-2.8 2.73H15.9v-1.8c0-1.49-1.21-2.7-2.72-2.7h-4.3v-.9h5.13c.9 0 1.66-.72 1.66-1.62V1.8c0-.9-.76-1.62-1.66-1.62h-4.31c-.9 0-1.66.72-1.66 1.62v.9H5.13C3.58 3.3 2.33 4.5 2.33 6.03v3.15c0 1.53 1.25 2.73 2.8 2.73h1.22v1.8c0 1.49 1.21 2.7 2.72 2.7h4.3v.9H8.24c-.9 0-1.66.72-1.66 1.62V22.2c0 .9.76 1.62 1.66 1.62h4.31c.9 0 1.66-.72 1.66-1.62V19.92h3.32v-.9h-4.51c-1.55 0-2.8-1.2-2.8-2.73v-3.15c0-1.53 1.25-2.73 2.8-2.73h1.22v1.8c0 1.49 1.21 2.7 2.72 2.7h4.3v.9h-5.13c-.9 0-1.66.72-1.66 1.62v3.78c0 .9.76 1.62 1.66 1.62h4.31c.9 0 1.66-.72 1.66-1.62v-.9h1.22c1.55 0 2.8-1.2 2.8-2.73v-3.15c0-1.53-1.25-2.73-2.8-2.73h-1.22v-1.8c0-1.49-1.21-2.7-2.72-2.7h-4.3v-.9h4.31z" />
      </svg>
    ),
  },
  {
    name: 'React',
    color: 'from-[#61DAFB] to-[#008CC1]',
    shadow: 'shadow-[#61DAFB]/20',
    borderColor: 'border-[#61DAFB]/30 hover:border-[#61DAFB]/70',
    textColor: 'text-[#61DAFB]',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'FastAPI',
    color: 'from-[#05969E] to-[#007F8A]',
    shadow: 'shadow-[#05969E]/20',
    borderColor: 'border-[#05969E]/30 hover:border-[#05969E]/70',
    textColor: 'text-[#05969E]',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: 'OpenCV',
    color: 'from-[#5C2D91] to-[#009E49]',
    shadow: 'shadow-[#5C2D91]/20',
    borderColor: 'border-[#5C2D91]/30 hover:border-[#5C2D91]/70',
    textColor: 'text-rose-500',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0a6 6 0 100 12 6 6 0 000-12zm-6 9A6 6 0 106 21 6 6 0 006 9zm12 0a6 6 0 100 12 6 6 0 000-12z" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: 'from-[#47A248] to-[#3F3F3F]',
    shadow: 'shadow-[#47A248]/20',
    borderColor: 'border-[#47A248]/30 hover:border-[#47A248]/70',
    textColor: 'text-[#47A248]',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-.57 0-1.12.07-1.65.2C7.38 1.48 5 4.6 5 8c0 3.2 2.2 6.8 7 16 4.8-9.2 7-12.8 7-16 0-3.4-2.38-6.52-5.35-7.8C13.12.07 12.57 0 12 0zm0 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-3z" />
      </svg>
    ),
  },
  {
    name: 'Git',
    color: 'from-[#F05032] to-[#F1563F]',
    shadow: 'shadow-[#F05032]/20',
    borderColor: 'border-[#F05032]/30 hover:border-[#F05032]/70',
    textColor: 'text-[#F05032]',
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.3 10.9L13.1.7C12.7.3 12-.1 11.3-.1c-.7 0-1.4.3-1.8.7L6.8 3.3 9.4 6c.6-.2 1.3-.1 1.9.4.5.5.7 1.2.5 1.9l2.7 2.7c.7-.2 1.4 0 1.9.5.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.2-.5-1.9l-2.7-2.7c-.2.1-.5.2-.8.2-.3 0-.6-.1-.8-.2L6.6 12c.2.6.1 1.3-.4 1.9-.7.7-1.8.7-2.5 0s-.7-1.8 0-2.5c.5-.5 1.2-.7 1.9-.5l2.6-2.6L5.5 5.6.7 10.4C.3 10.8 0 11.5 0 12.2s.3 1.4.7 1.8l10.2 10.2c.4.4 1.1.7 1.8.7s1.4-.3 1.8-.7l10.2-10.2c.5-.4.8-1.1.8-1.8 0-.7-.3-1.4-1.4-1.8z" />
      </svg>
    ),
  },
];

export default function TechShowcase() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section className="py-20 px-6 relative overflow-hidden bg-[#0B0F19]">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-6 bg-accent-cyan" />
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-wider">Ecosystem</span>
            <span className="h-[2px] w-6 bg-accent-cyan" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary">
            Technologies I Engineer With
          </h2>
        </div>

        {/* Floating Icons Display */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {techItems.map((tech, index) => (
            <div
              key={tech.name}
              className="relative"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Backlight Glow on Hover */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${tech.color} blur-[20px] pointer-events-none`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredTech === tech.name ? 0.35 : 0.05,
                  scale: hoveredTech === tech.name ? 1.2 : 0.9,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Icon Container */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl border ${tech.borderColor} bg-bg-card/40 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-300 relative z-10 hover:shadow-xl hover:translate-y-[-6px] ${tech.textColor}`}
              >
                {tech.svg}
              </motion.div>

              {/* Tooltip Label */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{
                  opacity: hoveredTech === tech.name ? 1 : 0,
                  y: hoveredTech === tech.name ? -12 : 0,
                  scale: hoveredTech === tech.name ? 1 : 0.9,
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 transform -translate-x-1/2 bottom-full bg-bg-dark border border-white/10 rounded-lg px-2.5 py-1 text-[10px] font-bold font-mono tracking-wider text-text-primary pointer-events-none whitespace-nowrap z-20 shadow-lg"
              >
                {tech.name}
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
