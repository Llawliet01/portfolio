'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Award, GraduationCap, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

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

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'patelyug01234@gmail.com', href: 'mailto:patelyug01234@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 7600598827', href: 'tel:+917600598827' },
  { icon: Linkedin, label: 'LinkedIn', value: 'yug-patel-595ba4264', href: 'https://www.linkedin.com/in/yug-patel-595ba4264/' },
  { icon: Github, label: 'GitHub', value: 'Llawliet01', href: 'https://github.com/Llawliet01' },
  { icon: Award, label: 'LeetCode', value: 'patelyug01234', href: 'https://leetcode.com/u/patelyug01234/' },
  { icon: GraduationCap, label: 'GeeksforGeeks', value: 'patelyu0n4z', href: 'https://www.geeksforgeeks.org/profile/patelyu0n4z' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all the fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Fire confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 }
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-[#0B0F19]">
      {/* Glow Effects */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-accent-cyan" />
            <span className="text-accent-cyan text-xs font-semibold uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text-primary">
            Let's Build Something Impactful
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Information Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 flex flex-col gap-6 flex-1">
              <div>
                <h3 className="text-text-primary font-bold font-heading text-lg mb-2">Contact Details</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Have an exciting project, internship opportunity, or technical problem you need solved? Drop a message or reach out through social platforms.
                </p>
              </div>

              {/* Contact Info List */}
              <div className="flex flex-col gap-4">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={idx}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.01] border border-white/5 hover:border-accent-cyan/20 hover:bg-white/[0.03] transition-all group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary group-hover:text-accent-cyan transition-colors">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] text-text-secondary uppercase tracking-wider font-semibold">{info.label}</div>
                        <div className="text-sm text-text-primary font-medium truncate mt-0.5">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Office Location */}
              <div className="flex items-center gap-3 text-xs text-text-secondary border-t border-white/5 pt-6">
                <MapPin className="w-4 h-4 text-accent-blue" />
                <span>Surat, Gujarat, India (IIIT Surat Hostels)</span>
              </div>
            </div>
          </div>

          {/* Right Block: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 h-full relative overflow-hidden flex flex-col justify-center">
              
              {/* Neon border glow overlay */}
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-accent-blue to-accent-cyan" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <h3 className="text-text-primary font-bold font-heading text-lg mb-1">Send a Message</h3>
                      <p className="text-text-secondary text-xs">Typically replies within 24 hours.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      {/* Name Field */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-text-secondary font-mono">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-bg-dark/50 border border-white/5 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-text-primary outline-none transition-all placeholder:text-text-secondary/30"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-text-secondary font-mono">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="johndoe@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-bg-dark/50 border border-white/5 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-text-primary outline-none transition-all placeholder:text-text-secondary/30"
                        />
                      </div>

                      {/* Message Field */}
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-text-secondary font-mono">
                          Message Body
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your project ideas or questions..."
                          className="w-full px-4 py-3 rounded-xl bg-bg-dark/50 border border-white/5 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue text-sm text-text-primary outline-none transition-all placeholder:text-text-secondary/30 resize-none"
                        />
                      </div>
                    </div>

                    {/* Validation Error Display */}
                    {error && (
                      <div className="text-rose-500 text-xs font-mono">{error}</div>
                    )}

                    {/* Action Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-cyan text-white text-sm font-semibold transition-all hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] disabled:opacity-50 disabled:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center text-center gap-4 py-8"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-text-primary">Transmission Complete</h3>
                      <p className="text-text-secondary text-xs sm:text-sm max-w-sm mt-2 leading-relaxed">
                        Thank you for reaching out! Your message was delivered successfully. I will get in touch with you shortly.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-5 py-2.5 rounded-xl border border-white/5 hover:border-white/10 bg-white/5 hover:bg-white/10 text-xs text-text-primary font-semibold transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
