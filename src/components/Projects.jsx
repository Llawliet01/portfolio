'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Play, CheckCircle2, Server, Sliders, Database, Activity, ToggleLeft, ToggleRight, Sparkles, Plus, ShoppingCart, ShoppingBag, Filter } from 'lucide-react';
import confetti from 'canvas-confetti';

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  // --- PROJECT 1: Apparel Sizing Simulator State ---
  const [showLandmarks, setShowLandmarks] = useState(true);
  const [showBoundingBox, setShowBoundingBox] = useState(true);
  const [activeView, setActiveView] = useState('front'); // 'front' | 'side'
  const [simulatedSize, setSimulatedSize] = useState('Calculating...');
  const [simulatedFit, setSimulatedFit] = useState('Analyzing frame...');
  const [progress, setProgress] = useState(0);

  // Simulated AI loop
  useEffect(() => {
    setProgress(0);
    setSimulatedSize('Calculating...');
    setSimulatedFit('Analyzing frame...');

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (activeView === 'front') {
            setSimulatedSize('M (Medium)');
            setSimulatedFit('Regular Fit (98% confidence)');
          } else {
            setSimulatedSize('M (Waist: 32")');
            setSimulatedFit('Slim Fit (94% confidence)');
          }
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [activeView]);

  // --- PROJECT 2: Pizza Ordering Widget State ---
  const [pizzaToppings, setPizzaToppings] = useState([
    { name: 'Pepperoni', added: true, price: 1.5 },
    { name: 'Mushrooms', added: false, price: 1.0 },
    { name: 'Olives', added: false, price: 0.75 },
    { name: 'Extra Cheese', added: true, price: 2.0 },
  ]);
  const [pizzaPrice, setPizzaPrice] = useState(13.5);

  const toggleTopping = (idx) => {
    const updated = [...pizzaToppings];
    updated[idx].added = !updated[idx].added;
    setPizzaToppings(updated);

    // Calculate price
    let base = 10.0;
    updated.forEach(t => {
      if (t.added) base += t.price;
    });
    setPizzaPrice(base);
  };

  const handleOrderPizza = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06B6D4', '#3B82F6', '#EF4444', '#F59E0B']
    });
  };

  // --- PROJECT 3: Myntra Storefront Filter State ---
  const [activeCategory, setActiveCategory] = useState('All');
  const storeItems = [
    { id: 1, name: 'Cybernetic Tech Hoodie', category: 'Men', price: '$89.00', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=300&auto=format&fit=crop' },
    { id: 2, name: 'Neural Network Tee', category: 'Men', price: '$35.00', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=300&auto=format&fit=crop' },
    { id: 3, name: 'Matrix Glass Heels', category: 'Women', price: '$120.00', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=300&auto=format&fit=crop' },
    { id: 4, name: 'Neon Gradient Windbreaker', category: 'Women', price: '$110.00', image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=300&auto=format&fit=crop' },
  ];

  const filteredStoreItems = activeCategory === 'All' 
    ? storeItems 
    : storeItems.filter(item => item.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-[#0A0D16]">
      {/* Background Gradients */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-accent-blue/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-accent-cyan/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-8 bg-accent-blue" />
              <span className="text-accent-blue text-xs font-semibold uppercase tracking-wider">Works & Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
              Featured Software Systems
            </h2>
          </div>
          <a
            href="https://github.com/Llawliet01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-cyan border border-white/5 bg-white/5 rounded-xl px-4 py-2 hover:border-accent-cyan/20 transition-all font-heading font-medium w-fit"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* --- HERO PROJECT: AI apparel size estimation system --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl border border-white/5 p-6 lg:p-10 mb-12 shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          {/* Neon highlight band */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple" />
          
          {/* P1 Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-cyan text-[10px] font-bold uppercase tracking-wider">
                Hero Project
              </span>
              <span className="flex items-center gap-1 text-xs text-text-secondary">
                <Activity className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                Computer Vision System
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-text-primary">
              AI-Based Apparel Size Estimation System
            </h3>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              A real-time AI-powered apparel size estimation system using computer vision and deep learning pipelines for automated apparel fitting analysis. The system processes video inputs to map body metrics and map them against sizing metrics instantly.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-secondary">
              {[
                'Real-time YOLOv8 object detection',
                'MediaPipe pose landmark extraction',
                'Asynchronous WebSockets protocol',
                'Automatic fit-type classification',
                'Continuous confidence scoring',
                'MongoDB Session/State tracking',
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {['FastAPI', 'Python', 'OpenCV', 'YOLOv8', 'MediaPipe', 'MongoDB', 'WebSockets'].map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-semibold text-text-primary uppercase tracking-wide">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/Llawliet01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-bg-card border border-white/5 text-text-primary hover:bg-white/5 hover:border-white/20 text-xs font-semibold transition-all hover:scale-[1.02]"
              >
                <Github className="w-4 h-4" />
                GitHub Code
              </a>
              <button
                onClick={() => {
                  setActiveView(activeView === 'front' ? 'side' : 'front');
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-xs font-semibold hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                Toggle Frame View
              </button>
            </div>
          </div>

          {/* P1 Right: Simulated Live Detector Frame */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[420px] aspect-[4/3] rounded-2xl bg-bg-dark border border-white/10 relative overflow-hidden flex flex-col shadow-2xl">
              
              {/* Camera Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-bg-card/80 text-[10px] font-mono text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                  LIVE FEED_
                </span>
                <span>FPS: 30 | Latency: 42ms</span>
              </div>

              {/* Viewport Frame */}
              <div className="flex-1 bg-[#07090F] relative overflow-hidden flex items-center justify-center">
                
                {/* Crosshairs */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/20" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />

                {/* Simulated Pose Skeleton SVG */}
                <svg className="w-full h-full absolute inset-0 z-10 pointer-events-none" viewBox="0 0 400 300">
                  <AnimatePresence mode="wait">
                    {activeView === 'front' ? (
                      <motion.g
                        key="front"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Bounding Box */}
                        {showBoundingBox && (
                          <rect x="130" y="40" width="140" height="220" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
                        )}

                        {/* Person Label */}
                        {showBoundingBox && (
                          <foreignObject x="130" y="20" width="100" height="20">
                            <span className="bg-accent-blue text-[8px] font-bold text-white px-1 py-0.5 rounded uppercase font-mono">
                              person: 98%
                            </span>
                          </foreignObject>
                        )}

                        {/* Landmarks lines (Skeletal connections) */}
                        {showLandmarks && (
                          <>
                            {/* Shoulders */}
                            <line x1="165" y1="85" x2="235" y2="85" stroke="#06B6D4" strokeWidth="1.5" />
                            {/* Torso */}
                            <line x1="165" y1="85" x2="170" y2="160" stroke="#06B6D4" strokeWidth="1.5" />
                            <line x1="235" y1="85" x2="230" y2="160" stroke="#06B6D4" strokeWidth="1.5" />
                            {/* Waist */}
                            <line x1="170" y1="160" x2="230" y2="160" stroke="#06B6D4" strokeWidth="1.5" />
                            {/* Hips to knees */}
                            <line x1="170" y1="160" x2="175" y2="215" stroke="#06B6D4" strokeWidth="1" />
                            <line x1="230" y1="160" x2="225" y2="215" stroke="#06B6D4" strokeWidth="1" />
                            {/* Arms */}
                            <line x1="165" y1="85" x2="150" y2="135" stroke="#06B6D4" strokeWidth="1" />
                            <line x1="235" y1="85" x2="250" y2="135" stroke="#06B6D4" strokeWidth="1" />
                          </>
                        )}

                        {/* Landmark joints */}
                        {showLandmarks && (
                          <>
                            <circle cx="165" cy="85" r="4" fill="#8B5CF6" stroke="#fff" strokeWidth="1" />
                            <circle cx="235" cy="85" r="4" fill="#8B5CF6" stroke="#fff" strokeWidth="1" />
                            <circle cx="170" cy="160" r="4" fill="#8B5CF6" stroke="#fff" strokeWidth="1" />
                            <circle cx="230" cy="160" r="4" fill="#8B5CF6" stroke="#fff" strokeWidth="1" />
                            <circle cx="150" cy="135" r="3" fill="#06B6D4" stroke="#fff" strokeWidth="1" />
                            <circle cx="250" cy="135" r="3" fill="#06B6D4" stroke="#fff" strokeWidth="1" />
                            <circle cx="175" cy="215" r="3.5" fill="#06B6D4" stroke="#fff" strokeWidth="1" />
                            <circle cx="225" cy="215" r="3.5" fill="#06B6D4" stroke="#fff" strokeWidth="1" />
                          </>
                        )}
                      </motion.g>
                    ) : (
                      <motion.g
                        key="side"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Side Bounding Box */}
                        {showBoundingBox && (
                          <rect x="160" y="40" width="80" height="220" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 3" />
                        )}

                        {/* Person Label */}
                        {showBoundingBox && (
                          <foreignObject x="160" y="20" width="100" height="20">
                            <span className="bg-accent-blue text-[8px] font-bold text-white px-1 py-0.5 rounded uppercase font-mono">
                              side_pose: 95%
                            </span>
                          </foreignObject>
                        )}

                        {/* Side Landmarks */}
                        {showLandmarks && (
                          <>
                            {/* Neck to spine */}
                            <line x1="200" y1="85" x2="195" y2="160" stroke="#06B6D4" strokeWidth="1.5" />
                            <line x1="195" y1="160" x2="200" y2="215" stroke="#06B6D4" strokeWidth="1" />
                            {/* Arm */}
                            <line x1="200" y1="85" x2="185" y2="135" stroke="#06B6D4" strokeWidth="1" />
                          </>
                        )}

                        {/* Joints */}
                        {showLandmarks && (
                          <>
                            <circle cx="200" cy="85" r="4" fill="#8B5CF6" stroke="#fff" strokeWidth="1" />
                            <circle cx="195" cy="160" r="4" fill="#8B5CF6" stroke="#fff" strokeWidth="1" />
                            <circle cx="185" cy="135" r="3" fill="#06B6D4" stroke="#fff" strokeWidth="1" />
                            <circle cx="200" cy="215" r="3.5" fill="#06B6D4" stroke="#fff" strokeWidth="1" />
                          </>
                        )}
                      </motion.g>
                    )}
                  </AnimatePresence>
                </svg>

                {/* SVG Silhouette Silhouette */}
                <div className="w-[120px] h-[220px] opacity-10 pointer-events-none flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                  </svg>
                </div>

                {/* Scan Overlay Bar */}
                {progress < 100 && (
                  <motion.div 
                    initial={{ top: '0%' }}
                    animate={{ top: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-0 right-0 h-0.5 bg-accent-cyan shadow-[0_0_8px_#06B6D4] z-20 pointer-events-none"
                  />
                )}
              </div>

              {/* Control Panel Panel */}
              <div className="p-4 border-t border-white/5 bg-bg-card/90 font-mono text-xs flex flex-col gap-3">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 text-text-secondary">
                  <div>
                    <span>Frame view: </span>
                    <span className="text-text-primary capitalize">{activeView}</span>
                  </div>
                  <div>
                    <span>Progress: </span>
                    <span className="text-accent-cyan font-bold">{progress}%</span>
                  </div>
                  <div>
                    <span>Estimated Size: </span>
                    <span className="text-emerald-400 font-bold">{simulatedSize}</span>
                  </div>
                  <div>
                    <span>Classification: </span>
                    <span className="text-text-primary text-[10px] truncate">{simulatedFit}</span>
                  </div>
                </div>

                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent-blue"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                {/* Toggles */}
                <div className="flex gap-4 justify-between border-t border-white/5 pt-3">
                  <button 
                    onClick={() => setShowLandmarks(!showLandmarks)}
                    className="flex items-center gap-1.5 hover:text-text-primary text-text-secondary transition-colors"
                  >
                    {showLandmarks ? <ToggleRight className="w-5 h-5 text-accent-cyan" /> : <ToggleLeft className="w-5 h-5" />}
                    <span>Landmarks</span>
                  </button>

                  <button 
                    onClick={() => setShowBoundingBox(!showBoundingBox)}
                    className="flex items-center gap-1.5 hover:text-text-primary text-text-secondary transition-colors"
                  >
                    {showBoundingBox ? <ToggleRight className="w-5 h-5 text-accent-cyan" /> : <ToggleLeft className="w-5 h-5" />}
                    <span>Bounding Box</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* --- OTHER PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PROJECT 2: Pizza Time */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl border border-white/5 p-6 flex flex-col gap-6 hover:border-accent-blue/20 transition-all shadow-[0_0_20px_rgba(0,0,0,0.15)] justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-[10px] font-bold uppercase tracking-wider">
                  Full Stack Dev
                </span>
                <span className="text-xs text-text-secondary font-mono">React, Redux, CSS</span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
                  Pizza Time
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Dynamic web app for customizable pizza ordering. Features high performance state management with Redux, shopping cart hooks, and dynamic menu filtering.
                </p>
              </div>

              {/* Interactive Pizza Builder Mock */}
              <div className="p-4 rounded-xl bg-bg-dark/60 border border-white/5 flex flex-col gap-3 font-mono text-xs text-text-secondary">
                <div className="text-text-primary font-bold flex justify-between">
                  <span>Interactive Mini-Builder:</span>
                  <span className="text-accent-cyan">${pizzaPrice.toFixed(2)}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-1.5">
                  {pizzaToppings.map((topping, idx) => (
                    <button
                      key={topping.name}
                      onClick={() => toggleTopping(idx)}
                      className={`flex items-center justify-between p-2 rounded-lg border text-[10px] transition-all ${
                        topping.added 
                          ? 'bg-accent-blue/10 border-accent-blue/30 text-text-primary' 
                          : 'bg-white/[0.01] border-white/5 hover:border-white/10 text-text-secondary'
                      }`}
                    >
                      <span>{topping.name}</span>
                      <span>+{topping.price}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleOrderPizza}
                  className="mt-2 w-full py-2.5 rounded-lg bg-accent-blue hover:bg-accent-blue/80 text-white font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Order Pizza
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <a
                href="https://github.com/Llawliet01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* PROJECT 3: Myntra Clone */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl border border-white/5 p-6 flex flex-col gap-6 hover:border-accent-cyan/20 transition-all shadow-[0_0_20px_rgba(0,0,0,0.15)] justify-between"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-[10px] font-bold uppercase tracking-wider">
                  Frontend clone
                </span>
                <span className="text-xs text-text-secondary font-mono">HTML, CSS, JS</span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-text-primary mb-2">
                  Myntra Clone
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Responsive frontend replica of Myntra. Features catalog product filters, login layouts, bag views, and product grids using reusable responsive elements.
                </p>
              </div>

              {/* Interactive Mini-Store Filter Mock */}
              <div className="p-4 rounded-xl bg-bg-dark/60 border border-white/5 flex flex-col gap-3 text-xs text-text-secondary">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-text-primary font-bold">Catalog Filters:</span>
                  <div className="flex gap-1.5">
                    {['All', 'Men', 'Women'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-2 py-0.5 rounded text-[10px] border transition-all ${
                          activeCategory === cat 
                            ? 'bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan font-bold' 
                            : 'bg-white/[0.01] border-white/5 text-text-secondary hover:border-white/10'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Animated Store Items */}
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {filteredStoreItems.map(item => (
                    <div key={item.id} className="p-1.5 rounded-lg bg-bg-dark border border-white/[0.03] flex items-center gap-2">
                      <div 
                        className="w-10 h-10 rounded bg-cover bg-center shrink-0 border border-white/5" 
                        style={{ backgroundImage: `url(${item.image})` }} 
                      />
                      <div className="min-w-0 flex flex-col">
                        <span className="text-[10px] text-text-primary font-semibold truncate leading-tight">{item.name}</span>
                        <span className="text-[9px] text-accent-cyan font-mono">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <a
                href="https://github.com/Llawliet01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
