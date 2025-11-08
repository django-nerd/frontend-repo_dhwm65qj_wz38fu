import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur"
        >
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-sky-700" />
            <h2 className="text-lg font-medium text-slate-900">About</h2>
          </div>
          <p className="mt-3 text-slate-600">
            I write toward human connection and the subtle geographies of care. This is a small room for tenderness—
            pigeon blue light, acacia shade, a hibiscus flare at the edge of vision.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
