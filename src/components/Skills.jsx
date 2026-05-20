'use client';

import { motion } from 'framer-motion';
import { Code2, LayoutTemplate, Server, Cpu, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'border-accent-blue/20 hover:border-accent-blue/40 text-accent-blue shadow-accent-blue/5',
    bg: 'bg-accent-blue/5',
    skills: [
      { name: 'C++', desc: 'Core programming' },
      { name: 'C', desc: 'System fundamentals' },
      { name: 'Python', desc: 'AI, scripting & backends' },
      { name: 'JavaScript', desc: 'Web dynamic logic' },
    ],
  },
  {
    title: 'Frontend',
    icon: LayoutTemplate,
    color: 'border-accent-cyan/20 hover:border-accent-cyan/40 text-accent-cyan shadow-accent-cyan/5',
    bg: 'bg-accent-cyan/5',
    skills: [
      { name: 'React', desc: 'Stateful UI components' },
      { name: 'HTML5', desc: 'Semantic layouts' },
      { name: 'CSS3 / Tailwind', desc: 'Fluid premium styling' },
      { name: 'Bootstrap', desc: 'Grid structures' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'border-accent-purple/20 hover:border-accent-purple/40 text-accent-purple shadow-accent-purple/5',
    bg: 'bg-accent-purple/5',
    skills: [
      { name: 'FastAPI', desc: 'High-performance async' },
      { name: 'REST APIs', desc: 'Standard endpoints' },
    ],
  },
  {
    title: 'AI / ML / CV',
    icon: Cpu,
    color: 'border-pink-500/20 hover:border-pink-500/40 text-pink-400 shadow-pink-500/5',
    bg: 'bg-pink-500/5',
    skills: [
      { name: 'YOLOv8', desc: 'Object detection models' },
      { name: 'OpenCV', desc: 'Real-time video processing' },
      { name: 'MediaPipe', desc: 'Landmarking & tracking' },
      { name: 'NumPy', desc: 'Matrix array operations' },
      { name: 'Pandas', desc: 'Structured data analysis' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'border-emerald-500/20 hover:border-emerald-500/40 text-emerald-400 shadow-emerald-500/5',
    bg: 'bg-emerald-500/5',
    skills: [
      { name: 'MongoDB', desc: 'NoSQL document storage' },
      { name: 'MySQL', desc: 'Relational data structures' },
    ],
  },
  {
    title: 'Tools / Others',
    icon: Wrench,
    color: 'border-orange-500/20 hover:border-orange-500/40 text-orange-400 shadow-orange-500/5',
    bg: 'bg-orange-500/5',
    skills: [
      { name: 'Git & GitHub', desc: 'Version control workflows' },
      { name: 'VS Code', desc: 'Development environment' },
      { name: 'Postman', desc: 'API testing environment' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-[#0B0F19]">
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-accent-cyan" />
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-wider">Skills & Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
            Technology Stack & Frameworks
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`glass-card p-6 rounded-2xl border transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.15)] flex flex-col gap-6 group hover:translate-y-[-4px] ${category.color}`}
              >
                {/* Category Title */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${category.bg} flex items-center justify-center border border-white/5`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-text-primary font-bold font-heading text-lg tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      className="flex flex-col p-3 rounded-xl bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.05] hover:border-white/[0.08] transition-all"
                    >
                      <span className="text-text-primary text-sm font-semibold tracking-wide font-heading">
                        {skill.name}
                      </span>
                      <span className="text-text-secondary text-xs mt-0.5 font-medium leading-relaxed">
                        {skill.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
