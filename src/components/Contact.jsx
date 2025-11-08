import React, { useState } from 'react';
import { Mail, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-6 backdrop-blur"
        >
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-sky-700" />
            <h3 className="text-lg font-medium text-slate-900">Connect</h3>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Write a brief note. I will read it when the room is quiet.
          </p>

          <form onSubmit={onSubmit} className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Your name"
              className="col-span-1 rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 text-slate-800 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="col-span-1 rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 text-slate-800 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
            />
            <textarea
              required
              placeholder="Your message"
              rows={4}
              className="col-span-1 sm:col-span-2 rounded-lg border border-slate-300/70 bg-white/80 px-3 py-2 text-slate-800 placeholder-slate-400 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
            />
            <div className="col-span-1 sm:col-span-2 flex items-center gap-3">
              <button
                type="submit"
                className="rounded-lg bg-sky-600 px-4 py-2 text-white shadow-sm transition-colors hover:bg-sky-700"
              >
                Send
              </button>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900"
              >
                <Share2 className="h-4 w-4" />
                Share
              </a>
              {sent && (
                <span className="text-sm text-green-600">Sent. Thank you.</span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
