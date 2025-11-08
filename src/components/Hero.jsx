import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[60vh] md:h-[70vh] lg:h-[75vh]">
        <Spline scene="https://prod.spline.design/6c3u8wqv3V3Zs4tY/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/90" />
      </div>
      <div className="mx-auto -mt-20 max-w-3xl px-4">
        <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-6 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="rounded-lg bg-sky-100 p-2 text-sky-700">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Puisi tentang kelembutan yang kembali
              </h1>
              <p className="mt-2 text-slate-600">
                Situs sederhana untuk menyimpan karya dan catatan—tenang, ringan, dan fokus pada kata.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
