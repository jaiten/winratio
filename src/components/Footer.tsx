/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActiveTab } from '../types';

interface FooterProps {
  onNavClick: (tab: ActiveTab) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-12 max-w-5xl mx-auto flex flex-col gap-12 border-t border-text-dark/10 bg-bg-warm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <button
          onClick={() => {
            onNavClick('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-serif text-2xl tracking-tighter text-text-dark font-medium hover:opacity-80 transition-opacity cursor-pointer"
        >
          WIN RATIO
        </button>
        
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <button
            onClick={() => {
              onNavClick('information');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-sans text-xs uppercase tracking-widest text-text-muted hover:text-accent-gold transition-colors duration-300 font-semibold"
          >
            INFORMATION
          </button>
          <a
            href="mailto:info@winratio.ca"
            className="font-sans text-xs uppercase tracking-widest text-text-muted hover:text-accent-gold transition-colors duration-300 font-semibold"
          >
            info@winratio.ca
          </a>
          <a
            href="tel:+16049283534"
            className="font-sans text-xs uppercase tracking-widest text-text-muted hover:text-accent-gold transition-colors duration-300 font-semibold"
          >
            604 928 3534
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Work Winning Privacy Policy & NDA regulations match maximum UK and North America engineering proposal compliance frameworks.");
            }}
            className="font-sans text-xs uppercase tracking-widest text-text-muted hover:text-accent-gold transition-colors duration-300 font-semibold"
          >
            PRIVACY
          </a>
        </div>
      </div>

      <div className="pt-6 border-t border-text-dark/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.15em] text-text-muted/60 font-bold uppercase select-none">
        <p>
          Copyright {currentYear} WORK WINNING. ALL RIGHTS RESERVED.
        </p>
        <p>
          EST. 2016 - VANCOUVER / NORTH AMERICA / UK
        </p>
      </div>
    </footer>
  );
}
