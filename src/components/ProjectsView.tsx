/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, DollarSign, Bookmark, ArrowLeft, Target, Award } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data';

interface ProjectsViewProps {
  onEnquireClick: () => void;
}

export default function ProjectsView({ onEnquireClick }: ProjectsViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'ALL',
    'HIGHWAYS',
    'TRANSIT',
    'RAIL',
    'BUILDINGS',
    'ENERGY',
    'CLIMATE',
    'TUNNELS',
    'MINING'
  ];

  // Filters the projects based on the selected category button
  const filteredProjects = PROJECTS.filter((project) => {
    if (selectedCategory === 'ALL') return true;
    return project.category === selectedCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 relative">
      {/* Header Section */}
      <header className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-6xl text-text-dark mb-4 tracking-tight"
        >
          Our Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-base md:text-lg text-text-muted max-w-2xl leading-relaxed"
        >
          A public archive of proposal, qualification, and technical documentation engagements across highways, transit, rail, buildings, energy, climate, tunnels, and mining.
        </motion.p>
      </header>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-x-6 gap-y-3 border-b border-text-dark/10 pb-4 mb-12 select-none overflow-x-auto scrollbar-none scroll-smooth">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`font-sans text-xs uppercase tracking-[0.15em] font-semibold pb-2 transition-all duration-300 relative cursor-pointer hover:text-text-dark ${
              selectedCategory === category
                ? 'text-text-dark font-bold'
                : 'text-text-muted/70'
            }`}
          >
            {category}
            {selectedCategory === category && (
              <motion.div
                layoutId="activeFilterBorder"
                className="absolute left-0 right-0 bottom-[-1px] h-[2px] bg-accent-gold"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Project list table */}
      <div className="flex flex-col mb-16">
        {/* Table Header */}
        <div className="grid grid-cols-12 py-3 px-4 text-xs tracking-wider opacity-50 border-b border-text-dark/10 font-bold uppercase text-text-muted">
          <div className="col-span-7 sm:col-span-6">PROJECT NAME</div>
          <div className="col-span-3 sm:col-span-4">CATEGORY</div>
          <div className="col-span-2 text-right">YEAR</div>
        </div>

        {/* Project table rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="divide-y divide-text-dark/10"
          >
            {filteredProjects.map((project, index) => {
              const isUnsuccessful = project.status === 'cancelled';
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index, 8) * 0.03, duration: 0.18 }}
                  onClick={() => setSelectedProject(project)}
                  className={`grid grid-cols-12 py-7 px-4 items-baseline cursor-pointer group transition-all duration-300 border-l-2 ${
                    isUnsuccessful
                      ? 'opacity-35 hover:opacity-85 border-transparent'
                      : 'border-transparent hover:bg-surface-low hover:border-accent-gold'
                  }`}
                >
                  <div className="col-span-7 sm:col-span-6 pr-4">
                    <h3 className={`font-serif text-lg md:text-2xl font-light text-text-dark group-hover:text-accent-gold transition-colors duration-200 ${
                      isUnsuccessful ? 'italic' : ''
                    }`}>
                      {project.name}
                    </h3>
                  </div>
                  <div className="col-span-3 sm:col-span-4 font-sans text-[10px] md:text-xs uppercase tracking-[0.15em] text-text-muted select-none">
                    {project.subCategory}
                  </div>
                  <div className="col-span-2 font-sans text-xs md:text-sm text-right text-text-dark/50 select-none">
                    {project.year}
                  </div>
                </motion.div>
              );
            })}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16 font-serif text-xl italic text-text-muted">
                No matching archive records found.
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Archive pagination/CTA block */}
      <div className="flex justify-center">
        <button
          onClick={() => alert("You are currently viewing the complete active archive.")}
          className="font-sans text-xs uppercase tracking-[0.2em] px-12 py-5 border border-text-dark/30 hover:border-text-dark transition-all duration-500 font-semibold cursor-pointer"
        >
          VIEW ARCHIVE
        </button>
      </div>

      {/* Detailed Side-Panel Drawer Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-text-dark/30 md:bg-text-dark/20 md:backdrop-blur-xs z-50 cursor-pointer"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.32, 0, 0.08, 1], duration: 0.28 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:max-w-xl md:max-w-2xl bg-bg-warm h-full shadow-2xl z-50 overflow-y-auto border-l border-text-dark/15 flex flex-col"
              id="project-drawer"
            >
              {/* Drawer Header */}
              <div className="px-8 py-6 border-b border-text-dark/10 flex items-center justify-between sticky top-0 bg-bg-warm z-10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="font-sans text-xs uppercase tracking-widest text-text-muted hover:text-text-dark flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft size={14} /> Back to List
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-sm text-text-muted hover:text-text-dark hover:bg-text-dark/5 transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="p-8 md:p-12 flex-1 flex flex-col gap-8">
                {/* Meta details */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[10px] uppercase tracking-[0.15em] font-bold text-accent-gold">
                      {selectedProject.subCategory}
                    </span>
                    <span className="text-text-muted/30">•</span>
                    <span className={`font-sans text-[10px] uppercase tracking-[0.1em] font-bold px-2 py-0.5 rounded-sm ${
                      selectedProject.status === 'won' || selectedProject.status === 'qualified' || selectedProject.status === 'successful'
                        ? 'bg-accent-gold/10 text-accent-gold' 
                        : 'bg-text-dark/10 text-text-muted'
                    }`}>
                      {selectedProject.status === 'won'
                        ? 'Won'
                        : selectedProject.status === 'qualified'
                          ? 'Qualified'
                          : selectedProject.status === 'successful'
                            ? 'Successful'
                            : selectedProject.status === 'cancelled'
                              ? 'Cancelled'
                              : 'Outcome not listed'}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-text-dark tracking-tight leading-tight">
                    {selectedProject.name}
                  </h2>
                </div>

                {/* Logistics Key-Value list */}
                <div className="grid grid-cols-3 gap-6 border-y border-text-dark/10 py-6 text-sm">
                  <div className="flex flex-col gap-1">
                    <span className="text-text-muted/60 text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
                      <Bookmark size={12} /> Engagement
                    </span>
                    <span className="text-text-dark font-medium">{selectedProject.client}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-text-muted/60 text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
                      <MapPin size={12} /> Location
                    </span>
                    <span className="text-text-dark font-medium">{selectedProject.location}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-text-muted/60 text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5">
                      <DollarSign size={12} /> Value / outcome
                    </span>
                    <span className="text-text-dark font-medium">{selectedProject.value}</span>
                  </div>
                </div>

                {/* Sub-narratives */}
                <div className="flex flex-col gap-8 font-sans">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-serif text-lg text-text-dark italic flex items-center gap-2">
                      <Award size={16} className="text-accent-gold shrink-0" /> Project Summary
                    </h4>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
                      {selectedProject.scopeOfWork}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 bg-text-dark/2 p-6 rounded-xs border-l-2 border-text-dark/20">
                    <h4 className="font-serif text-lg text-text-dark italic flex items-center gap-2">
                      <Target size={16} className="text-text-dark shrink-0" /> Proposal Context
                    </h4>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="font-serif text-lg text-text-dark italic flex items-center gap-2 text-accent-gold">
                      WIN / RATIO Role
                    </h4>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Drawer Call to Action */}
              <div className="p-8 border-t border-text-dark/10 bg-surface-low text-center">
                <p className="font-sans text-xs text-text-muted mb-4 max-w-sm mx-auto">
                  Interested in support for a similar pursuit? Email or call WIN / RATIO.
                </p>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onEnquireClick();
                  }}
                  className="font-sans text-xs uppercase tracking-[0.15em] font-semibold border border-text-dark px-6 py-3 hover:bg-text-dark hover:text-bg-warm transition-all duration-300 w-full"
                >
                  Initiate Bidding Enquiry
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
