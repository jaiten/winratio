/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ActiveTab, NavTab } from '../types';

interface NavBarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: NavTab) => void;
  onEnquireClick: () => void;
}

export default function NavBar({ activeTab, setActiveTab, onEnquireClick }: NavBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-warm/95 backdrop-blur-md border-b border-text-dark/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => handleTabClick('home')}
          className="font-serif text-2xl tracking-tighter text-text-dark font-medium transition-opacity hover:opacity-80 cursor-pointer"
          id="brand-logo"
        >
          WIN / RATIO
        </button>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex xl:gap-12 gap-8 items-center">
          <button
            onClick={() => handleTabClick('projects')}
            className={`font-sans text-xs uppercase tracking-[0.15em] font-semibold pb-1 cursor-pointer transition-all duration-300 hover:text-accent-gold ${
              activeTab === 'projects'
                ? 'text-text-dark border-b-2 border-text-dark'
                : 'text-text-muted border-b-2 border-transparent'
            }`}
            id="nav-projects"
          >
            PROJECTS
          </button>
          <button
            onClick={() => handleTabClick('services')}
            className={`font-sans text-xs uppercase tracking-[0.15em] font-semibold pb-1 cursor-pointer transition-all duration-300 hover:text-accent-gold ${
              activeTab === 'services'
                ? 'text-text-dark border-b-2 border-text-dark'
                : 'text-text-muted border-b-2 border-transparent'
            }`}
            id="nav-services"
          >
            SERVICES
          </button>
          <button
            onClick={() => handleTabClick('information')}
            className={`font-sans text-xs uppercase tracking-[0.15em] font-semibold pb-1 cursor-pointer transition-all duration-300 hover:text-accent-gold ${
              activeTab === 'information'
                ? 'text-text-dark border-b-2 border-text-dark'
                : 'text-text-muted border-b-2 border-transparent'
            }`}
            id="nav-info"
          >
            INFORMATION
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={onEnquireClick}
            className="font-sans text-xs uppercase tracking-[0.15em] font-semibold border border-text-dark px-6 py-3 hover:bg-text-dark hover:text-bg-warm transition-all duration-300 cursor-pointer"
            id="nav-enquire"
          >
            ENQUIRE
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-text-dark focus:outline-none p-1"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-bg-warm border-b border-text-dark/10 px-6 py-6 flex flex-col gap-6 animate-fadeIn absolute w-full left-0">
          <button
            onClick={() => handleTabClick('projects')}
            className={`font-sans text-sm uppercase tracking-[0.15em] font-semibold text-left py-2 ${
              activeTab === 'projects' ? 'text-accent-gold' : 'text-text-dark'
            }`}
          >
            PROJECTS
          </button>
          <button
            onClick={() => handleTabClick('services')}
            className={`font-sans text-sm uppercase tracking-[0.15em] font-semibold text-left py-2 ${
              activeTab === 'services' ? 'text-accent-gold' : 'text-text-dark'
            }`}
          >
            SERVICES
          </button>
          <button
            onClick={() => handleTabClick('information')}
            className={`font-sans text-sm uppercase tracking-[0.15em] font-semibold text-left py-2 ${
              activeTab === 'information' ? 'text-accent-gold' : 'text-text-dark'
            }`}
          >
            INFORMATION
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onEnquireClick();
            }}
            className="font-sans text-xs uppercase tracking-[0.15em] font-semibold border border-text-dark text-center py-3 hover:bg-text-dark hover:text-bg-warm transition-all"
          >
            ENQUIRE
          </button>
        </div>
      )}
    </nav>
  );
}
