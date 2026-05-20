'use client';

import { motion } from 'framer-motion';
import { BookOpen, Code, Award, Cpu, Star, Activity } from 'lucide-react';

const timelineEvents = [
  {
    year: '2023',
    title: 'Started B.Tech Journey',
    desc: 'Commenced B.Tech in Computer Science & Engineering at IIIT Surat, laying a solid foundation in programming, algorithms, and logic.',
    icon: BookOpen,
    color: 'border-accent-blue/30 text-accent-blue bg-accent-blue/5',
  },
  {
    year: '2023 - 2024',
    title: 'Learned Web Development',
    desc: 'Mastered HTML5, CSS3, ES6 JavaScript, and core frontend concepts. Built responsive interfaces and dynamic web elements.',
    icon: Code,
    color: 'border-accent-cyan/30 text-accent-cyan bg-accent-cyan/5',
  },
  {
    year: '2023 - 2024',
    title: 'Built Frontend Projects',
    desc: 'Developed complete frontend applications, interactive dashboards, and clones (like Myntra UI and Pizza Time ordering logic).',
    icon: Award,
    color: 'border-accent-purple/30 text-accent-purple bg-accent-purple/5',
  },
  {
    year: '2024',
    title: 'Dived into AI & Computer Vision',
    desc: 'Studied convolution architectures, object detection algorithms (YOLOv8), image analysis (OpenCV), and facial/pose landmarking (MediaPipe).',
    icon: Cpu,
    color: 'border-pink-500/30 text-pink-400 bg-pink-500/5',
  },
  {
    year: '2024 - 2025',
    title: 'Built Real-time AI Systems',
    desc: 'Engineered complex systems like the Apparel Size Estimation System, combining Python backends (FastAPI), OpenCV/YOLO models, and full-duplex WebSockets.',
    icon: Activity,
    color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5',
  },
  {
    year: '2025 & Beyond',
    title: 'Continuously Improving & Scaling',
    desc: 'Exploring deep neural networks, edge AI optimization, robust backend systems, and preparing to build industry-level products.',
    icon: Star,
    color: 'border-orange-500/30 text-orange-400 bg-orange-500/5',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 relative overflow-hidden bg-[#0A0D16]">
      {/* Glow Effects */}
      <div className="absolute top-[40%] left-[-10%] w-[300px] h-[300px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-6 bg-accent-blue" />
            <span className="text-accent-blue text-xs font-semibold uppercase tracking-wider">My Journey</span>
            <span className="h-[2px] w-6 bg-accent-blue" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
            Timeline of Growth & Milestones
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-purple opacity-20 transform -translate-x-1/2" />

          {/* Timeline Cards */}
          <div className="flex flex-col gap-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`flex flex-col sm:flex-row items-stretch relative ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-80px' }}
                      className={`w-9 h-9 rounded-full border-2 ${event.color} flex items-center justify-center shadow-lg relative bg-[#0A0D16]`}
                    >
                      <Icon className="w-4 h-4" />
                      <div className="absolute inset-0 rounded-full bg-inherit blur-[4px] opacity-35" />
                    </motion.div>
                  </div>

                  {/* Spacer / Outer margin for side layout */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Event Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
                    className="w-full sm:w-[45%] pl-12 sm:pl-0 sm:px-6"
                  >
                    <div className="glass-card p-6 rounded-2xl border border-white/5 relative group hover:border-white/10 transition-all duration-300">
                      
                      {/* Floating Indicator for Year */}
                      <span className="text-[10px] sm:text-xs font-bold font-mono tracking-wider text-accent-cyan block mb-2 uppercase">
                        {event.year}
                      </span>
                      
                      <h3 className="text-lg font-bold font-heading text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {event.desc}
                      </p>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
