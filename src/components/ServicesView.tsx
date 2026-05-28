/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronRight, ListCollapse } from 'lucide-react';
import { CAPABILITIES } from '../data';

export default function ServicesView() {
  const [expandedCapability, setExpandedCapability] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-24">
      {/* Hero Header Section */}
      <section className="max-w-3xl">
        <span className="font-sans text-xs uppercase text-accent-gold tracking-[0.2em] font-bold mb-4 block">
          SERVICES
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-text-dark mb-6 tracking-tight leading-none">
          People, proposals, and project documentation.
        </h1>
        <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed font-light">
          WIN / RATIO provides full-service proposal development, from supplemental proposal staff to complete proposal teams and post-award technical documentation support.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {CAPABILITIES.map((cap) => {
          const isExpanded = expandedCapability === cap.id;
          return (
            <div
              key={cap.id}
              className="group border-t border-text-dark/10 pt-6 flex flex-col gap-4 animate-fadeIn"
            >
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif text-2xl text-text-dark font-medium group-hover:text-accent-gold transition-colors duration-300">
                  {cap.title}
                </h3>
                <span className="font-serif text-3xl md:text-5xl text-text-muted/20 font-light select-none">
                  {cap.number}
                </span>
              </div>
              
              <p className="font-sans text-sm md:text-base text-text-muted max-w-md leading-relaxed font-light">
                {cap.description}
              </p>

              {/* Collapsible service sub-details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-text-dark/2 p-4 mt-2 border-l border-accent-gold"
                  >
                    <span className="font-sans text-[10px] tracking-wider text-text-muted/60 font-bold uppercase block mb-2">
                      Expertise scope:
                    </span>
                    <ul className="flex flex-col gap-1.5">
                      {cap.details.map((detail, idx) => (
                        <li key={idx} className="font-sans text-xs text-text-dark flex items-center gap-2 font-medium">
                          <Check size={12} className="text-accent-gold" /> {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action trigger button */}
              <div className="mt-4">
                <button
                  onClick={() => setExpandedCapability(isExpanded ? null : cap.id)}
                  className="font-sans text-xs uppercase tracking-[0.15em] text-accent-gold hover:text-text-dark font-semibold pb-1 border-b border-transparent hover:border-text-dark transition-all duration-300 flex items-center gap-1 cursor-pointer"
                >
                  {isExpanded ? (
                    <>
                      COLLAPSE <ListCollapse size={12} />
                    </>
                  ) : (
                    <>
                      LEARN MORE <ChevronRight size={12} />
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
