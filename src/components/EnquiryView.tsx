/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import EnquiryForm from './EnquiryForm';

export default function EnquiryView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-16"
    >
      <section className="max-w-3xl">
        <span className="font-sans text-xs uppercase text-accent-gold tracking-[0.2em] font-bold mb-4 block">
          Enquiry
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-text-dark mb-6 tracking-tight leading-none">
          Start a conversation about your next pursuit.
        </h1>
        <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed font-light">
          Use this form for proposal support, qualification submissions, technical documentation, or supplemental personnel requests.
        </p>
      </section>

      <EnquiryForm />
    </motion.div>
  );
}
