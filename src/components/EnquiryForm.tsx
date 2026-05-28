/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { BookOpen, Check, Send } from 'lucide-react';
import { Inquiry } from '../types';

export default function EnquiryForm() {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('Proposal Support');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedInquiries, setSubmittedInquiries] = useState<Inquiry[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('win_ratio_enquiries');
      if (saved) {
        setSubmittedInquiries(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Could not load enquiries from storage:', e);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !company || !message) {
      alert('Please fill in all the core fields of the enquiry.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: Math.random().toString(36).substring(2, 9),
        fullName,
        company,
        projectType,
        message,
        timestamp: new Date().toLocaleString()
      };

      const updated = [newInquiry, ...submittedInquiries];
      setSubmittedInquiries(updated);
      try {
        localStorage.setItem('win_ratio_enquiries', JSON.stringify(updated));
      } catch (err) {
        console.error('Could not save to storage:', err);
      }

      setIsSubmitting(false);
      setSubmitted(true);
      setFullName('');
      setCompany('');
      setMessage('');
    }, 1200);
  };

  const clearInquiriesLog = () => {
    if (confirm('Are you sure you want to clear your local submission history log?')) {
      setSubmittedInquiries([]);
      localStorage.removeItem('win_ratio_enquiries');
    }
  };

  return (
    <div className="flex flex-col gap-16">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="font-serif text-2xl md:text-4xl text-text-dark tracking-tight mb-4">
            Initiate an Enquiry.
          </h2>
          <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed font-light">
            Tell us what you are pursuing and what kind of support you need. For live enquiries, you can also contact info@winratio.ca or 604 928 3534.
          </p>
        </div>

        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="enquiry-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs text-text-muted uppercase tracking-[0.1em] font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Johnathan Doe"
                      className="bg-transparent border-0 border-b border-text-dark/30 hover:border-text-dark focus:border-accent-gold focus:ring-0 px-0 py-2 font-sans text-base transition-colors duration-200 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs text-text-muted uppercase tracking-[0.1em] font-semibold">
                      Company
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Company Ltd."
                      className="bg-transparent border-0 border-b border-text-dark/30 hover:border-text-dark focus:border-accent-gold focus:ring-0 px-0 py-2 font-sans text-base transition-colors duration-200 outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs text-text-muted uppercase tracking-[0.1em] font-semibold">
                    Project Type
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="bg-transparent border-0 border-b border-text-dark/30 hover:border-text-dark focus:border-accent-gold focus:ring-0 px-0 py-2 font-sans text-base transition-colors duration-200 outline-none cursor-pointer"
                  >
                    <option value="Proposal Support" className="bg-bg-warm text-text-dark">Proposal Support</option>
                    <option value="Qualification Submission" className="bg-bg-warm text-text-dark">Qualification Submission</option>
                    <option value="Technical Documentation" className="bg-bg-warm text-text-dark">Technical Documentation</option>
                    <option value="Supplemental Personnel" className="bg-bg-warm text-text-dark">Supplemental Personnel</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs text-text-muted uppercase tracking-[0.1em] font-semibold">
                    Message / Outline of Scope
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the scope of your requirements..."
                    className="bg-transparent border-0 border-b border-text-dark/30 hover:border-text-dark focus:border-accent-gold focus:ring-0 px-0 py-2 font-sans text-base transition-colors duration-200 outline-none resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto border border-text-dark px-12 py-5 font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-text-dark hover:text-bg-warm disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {isSubmitting ? 'SENDING...' : 'SEND ENQUIRY'}
                    <Send size={12} className={isSubmitting ? 'animate-pulse' : ''} />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-response"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-surface-low border border-accent-gold/20 p-8 md:p-12 text-center rounded-sm flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold">
                  <Check size={24} />
                </div>
                <h3 className="font-serif text-2xl text-text-dark font-medium">Enquiry Received</h3>
                <p className="font-sans text-sm md:text-base text-text-muted font-light max-w-md leading-relaxed">
                  Your request has been logged locally in this prototype. Contact info@winratio.ca or 604 928 3534 for live enquiries.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 font-sans text-xs uppercase tracking-widest text-accent-gold font-semibold hover:text-text-dark cursor-pointer pb-1 border-b border-accent-gold"
                >
                  Send another request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {submittedInquiries.length > 0 && (
        <section className="border-t border-text-dark/10 pt-16 animate-fadeIn">
          <div className="flex justify-between items-baseline mb-8">
            <h4 className="font-serif text-xl md:text-2xl text-text-dark italic flex items-center gap-2">
              <BookOpen size={16} className="text-accent-gold" /> Local Enquiries Log ({submittedInquiries.length})
            </h4>
            <button
              onClick={clearInquiriesLog}
              className="font-sans text-[10px] tracking-wider text-text-muted hover:text-red-700 uppercase font-semibold cursor-pointer"
            >
              Clear Log History
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {submittedInquiries.map((inq) => (
              <div
                key={inq.id}
                className="bg-surface-low/50 p-6 rounded border border-text-dark/5 flex flex-col sm:flex-row justify-between gap-4"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[10px] uppercase font-bold text-accent-gold">
                    {inq.projectType}
                  </span>
                  <p className="font-sans text-sm font-semibold text-text-dark">
                    {inq.fullName} <span className="text-text-muted font-normal">at</span> {inq.company}
                  </p>
                  <p className="font-sans text-xs text-text-muted mt-2 max-w-xl italic">
                    "{inq.message}"
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-sans text-[10px] text-text-muted font-bold uppercase block">
                    Logged
                  </span>
                  <span className="font-sans text-[11px] text-text-muted/70">
                    {inq.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
