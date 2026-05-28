/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import NavBar from './components/NavBar';
import HomeView from './components/HomeView';
import ProjectsView from './components/ProjectsView';
import ServicesView from './components/ServicesView';
import InformationView from './components/InformationView';
import EnquiryView from './components/EnquiryView';
import Footer from './components/Footer';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  const handleEnquireClick = () => {
    setActiveTab('enquiry');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExpertiseSelect = () => {
    setActiveTab('services');
    // Scroll or focus of attention if required
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to render active screen view with custom animation wrappers
  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HomeView
              onSeeWorkClick={() => setActiveTab('projects')}
              onExpertiseSelect={handleExpertiseSelect}
            />
          </motion.div>
        );
      case 'projects':
        return (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectsView onEnquireClick={handleEnquireClick} />
          </motion.div>
        );
      case 'services':
        return (
          <motion.div
            key="services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ServicesView />
          </motion.div>
        );
      case 'information':
        return (
          <motion.div
            key="information"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <InformationView onEnquireClick={handleEnquireClick} />
          </motion.div>
        );
      case 'enquiry':
        return (
          <motion.div
            key="enquiry"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <EnquiryView />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden pt-20">
      {/* Top sticky Navigation header */}
      <NavBar
        activeTab={activeTab}
        setActiveTab={(tab) => setActiveTab(tab)}
        onEnquireClick={handleEnquireClick}
      />

      {/* Primary animated main content section */}
      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          {renderActiveView()}
        </AnimatePresence>
      </main>

      {/* Styled Footer */}
      <Footer onNavClick={setActiveTab} />
    </div>
  );
}
