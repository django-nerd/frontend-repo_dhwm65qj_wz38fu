import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background soft glows that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          className="relative order-2 lg:order-1"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/40 bg-white/40 px-3 py-1 text-sm text-sky-700 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Literary affection
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Quiet mysteries, tender distances
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
            A small sanctuary for poems and gentle thoughts. Pigeon blue horizons, acacia shade, and a brief hibiscus glow.
          </p>
          <div className="mt-6 flex items-center gap-3 text-slate-500">
            <span className="inline-block h-2 w-2 rounded-full bg-sky-400" />
            <span>Better with headphones and unhurried time.</span>
          </div>
        </motion.div>

        {/* 3D Scene */}
        <div className="relative order-1 aspect-[4/3] w-full rounded-2xl border border-slate-200/60 bg-white/30 shadow-sm backdrop-blur lg:order-2">
          <Spline
            scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Decorative overlay gradients - keep non-interactive */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/70 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
