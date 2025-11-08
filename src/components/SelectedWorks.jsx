import React from 'react';
import { motion } from 'framer-motion';

const works = [
  {
    title: 'Birdsong at Dusk',
    excerpt:
      'pigeon blue sky, a single note / crossing the quiet street to where you stand',
  },
  {
    title: 'Acacia Noon',
    excerpt:
      'under the acacia, we count the soft wind / each leaf practicing your name',
  },
  {
    title: 'Hibiscus Hour',
    excerpt:
      'a red that listens / then leaves the room without closing the door',
  },
];

function PoemCard({ title, excerpt }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-sm backdrop-blur"
    >
      <h3 className="text-lg font-medium text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600">{excerpt}</p>
      <div className="pointer-events-none absolute -bottom-10 right-0 h-28 w-28 rounded-full bg-purple-300/20 blur-2xl transition-transform duration-700 group-hover:translate-y-2" />
    </motion.article>
  );
}

export default function SelectedWorks() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Selected Works</h2>
            <p className="mt-1 text-sm text-slate-500">A few doors to step through, gently.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <PoemCard key={w.title} title={w.title} excerpt={w.excerpt} />
          ))}
        </div>
      </div>
    </section>
  );
}
