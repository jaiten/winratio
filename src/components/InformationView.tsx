/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

interface InformationViewProps {
  onEnquireClick: () => void;
}

export default function InformationView({ onEnquireClick }: InformationViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-20"
    >
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-4">
          <span className="font-sans text-xs uppercase text-accent-gold tracking-[0.2em] font-bold mb-4 block">
            About
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-text-dark tracking-tight leading-none">
            Proposal teams for winning work.
          </h1>
        </div>

        <div className="md:col-span-8 flex flex-col gap-6 font-sans text-base md:text-lg text-text-muted leading-relaxed font-light">
          <p>
            Our team of writers, editors, and graphic designers help companies of all sizes craft winning proposals across diverse industries. Since 2016, we have completed over $60 billion worth in projects, and counting.
          </p>
          <p>
            Headquartered in Vancouver, Canada, with team members across North America and the UK, we provide our services in English to clients worldwide, in all time zones.
          </p>
          <p>
            We are a team with a stable roster that collaborates on every project, so that our work is efficient, strategic, and personal.
          </p>
          <p>
            Our consistency allows us to build lasting relationships with our clients, delivering excellent results time and time again.
          </p>
        </div>
      </section>

      <section className="border-y border-text-dark/10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-sans text-xs text-text-muted/60 uppercase tracking-widest font-semibold flex items-center gap-2">
            <MapPin size={14} /> Headquarters
          </span>
          <p className="font-serif text-2xl text-text-dark">Vancouver, Canada</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-sans text-xs text-text-muted/60 uppercase tracking-widest font-semibold flex items-center gap-2">
            <Mail size={14} /> Email
          </span>
          <a
            href="mailto:info@winratio.ca"
            className="font-serif text-2xl text-text-dark hover:text-accent-gold transition-colors"
          >
            info@winratio.ca
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-sans text-xs text-text-muted/60 uppercase tracking-widest font-semibold flex items-center gap-2">
            <Phone size={14} /> Phone
          </span>
          <a
            href="tel:+16049283534"
            className="font-serif text-2xl text-text-dark hover:text-accent-gold transition-colors"
          >
            604 928 3534
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7">
          <span className="font-sans text-xs uppercase text-accent-gold tracking-[0.2em] font-bold mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-text-dark tracking-tight leading-tight">
            Email or call us today to see how we can help you win your next big opportunity.
          </h2>
        </div>

        <div className="md:col-span-5 flex md:justify-end">
          <button
            onClick={onEnquireClick}
            className="font-sans text-xs uppercase tracking-[0.2em] font-semibold border border-text-dark px-8 py-5 hover:bg-text-dark hover:text-bg-warm transition-all duration-300 group flex items-center gap-3 cursor-pointer"
          >
            Start an Enquiry
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </motion.div>
  );
}
