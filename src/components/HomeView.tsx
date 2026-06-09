/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { EXPERTISE_ITEMS } from '../data';

interface HomeViewProps {
  onSeeWorkClick: () => void;
  onExpertiseSelect: (index: number) => void;
}

export default function HomeView({ onSeeWorkClick, onExpertiseSelect }: HomeViewProps) {
  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="flex flex-col w-full"
    >
      {/* Section 1: Hero */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-5xl md:text-8xl tracking-tighter text-text-dark font-medium leading-tight"
          >
            WIN / RATIO
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="divider-fade opacity-30 my-4"
          />

          <motion.p 
            variants={itemVariants}
            className="font-sans text-lg md:text-xl text-text-muted font-light max-w-2xl mx-auto leading-relaxed"
          >
            We are a team of writers, editors, designers and project managers who help companies win work.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8">
            <button
              onClick={onSeeWorkClick}
              className="font-sans text-xs uppercase tracking-[0.2em] font-semibold border border-text-dark px-10 py-5 hover:bg-accent-gold hover:border-accent-gold hover:text-white transition-all duration-500 group flex items-center gap-3 cursor-pointer"
            >
              SEE OUR WORK
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: About / Stats */}
      <section className="bg-surface-low py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            {/* Left Header & Huge Credential */}
            <div className="md:col-span-8 flex flex-col gap-4">
              <span className="font-sans text-xs text-accent-gold uppercase tracking-[0.2em] font-semibold">
                Work Winning
              </span>
              <h2 className="font-serif text-4xl md:text-7xl text-text-dark leading-none tracking-tight">
                $60B+ <span className="text-text-muted italic font-normal">in projects</span><br />completed since 2016
              </h2>
            </div>
            
            {/* Team Description Block */}
            <div className="md:col-span-4 pb-2">
              <p className="font-sans text-sm md:text-base text-text-muted border-l border-text-dark/20 pl-6 leading-relaxed">
                Headquartered in Vancouver, with team members across North America and the UK, we support clients worldwide and across time zones.
              </p>
            </div>
          </div>

          {/* Divider line */}
          <div className="my-16 border-t border-text-dark/10 w-full" />

          {/* 3-column Stat Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-3 group">
              <span className="font-sans text-xs text-text-muted/60 uppercase tracking-widest font-semibold">
                Index 01
              </span>
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl text-text-dark font-medium group-hover:text-accent-gold transition-colors duration-300">
                  Founded 2016
                </h3>
                <p className="font-sans text-sm text-text-muted mt-2 leading-relaxed">
                  Serving clients since 2016.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 group">
              <span className="font-sans text-xs text-text-muted/60 uppercase tracking-widest font-semibold">
                Index 02
              </span>
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl text-text-dark font-medium group-hover:text-accent-gold transition-colors duration-300">
                  Worldwide Support
                </h3>
                <p className="font-sans text-sm text-text-muted mt-2 leading-relaxed">
                  English-language services for clients worldwide, across time zones.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 group">
              <span className="font-sans text-xs text-text-muted/60 uppercase tracking-widest font-semibold">
                Index 03
              </span>
              <div className="flex flex-col">
                <h3 className="font-serif text-2xl text-text-dark font-medium group-hover:text-accent-gold transition-colors duration-300">
                  Diverse Sectors
                </h3>
                <p className="font-sans text-sm text-text-muted mt-2 leading-relaxed">
                  Highways, transit, rail, buildings, energy, climate, tunnels, and mining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto w-full">
        <div className="border-t border-b border-text-dark/10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-8">
            <div className="md:col-span-3">
              <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-accent-gold font-bold">
                Expertise
              </h4>
            </div>

            <div className="md:col-span-9 flex flex-col md:flex-row md:gap-12 w-full">
              {/* Item list */}
              <ul className="flex flex-col divide-y divide-text-dark/5 md:min-w-[260px] md:flex-shrink-0">
                {EXPERTISE_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.id}
                    onClick={() => onExpertiseSelect(index)}
                    onMouseEnter={() => setHoveredExpertise(index)}
                    onMouseLeave={() => setHoveredExpertise(null)}
                    className="flex items-baseline gap-6 py-6 group cursor-pointer hover:bg-surface-low px-4 -mx-4 transition-colors duration-300 rounded"
                    whileHover={{ x: 4 }}
                  >
                    <span className="font-serif text-2xl md:text-3xl italic text-text-dark/30 select-none w-10 shrink-0">
                      {item.numeral}
                    </span>
                    <span className="font-serif text-lg md:text-xl text-text-dark group-hover:text-accent-gold transition-colors duration-300">
                      {item.title}
                    </span>
                    <ArrowUpRight size={16} className="text-text-dark/30 group-hover:text-accent-gold transition-colors duration-300 ml-auto shrink-0" />
                  </motion.li>
                ))}
              </ul>

              {/* Description panel */}
              <div className="hidden md:flex flex-1 items-start pt-7 min-h-[160px]">
                <AnimatePresence mode="wait">
                  {hoveredExpertise !== null && (
                    <motion.div
                      key={hoveredExpertise}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -6 }}
                      transition={{ duration: 0.18 }}
                      className="flex flex-col gap-3 border-l border-text-dark/15 pl-8"
                    >
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">
                        {EXPERTISE_ITEMS[hoveredExpertise].title}
                      </span>
                      <p className="font-sans text-sm text-text-muted leading-relaxed">
                        {EXPERTISE_ITEMS[hoveredExpertise].description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
