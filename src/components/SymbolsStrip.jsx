import React from 'react';
import { Bird, Leaf, Flower2 } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { icon: Bird, label: 'Pigeon', hint: 'letters carried across a blue morning' },
  { icon: Leaf, label: 'Acacia', hint: 'shade that remembers your name' },
  { icon: Flower2, label: 'Hibiscus', hint: 'a brief, scarlet attention' },
];

export default function SymbolsStrip() {
  return (
    <section className="relative py-10">
      <div className="pointer-events-none absolute inset-0 -z-[1]">
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-200/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-slate-200/70 bg-white/60 p-5 backdrop-blur hover:bg-white/80"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-sky-50 text-sky-700 ring-1 ring-sky-200/60">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-slate-900">{it.label}</div>
                  <div className="text-sm text-slate-500">{it.hint}</div>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-300/20 blur-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
