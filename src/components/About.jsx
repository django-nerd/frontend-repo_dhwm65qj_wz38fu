import React from 'react';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-4 py-14">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-slate-100 p-2 text-slate-700">
          <User className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Tentang Penulis</h2>
          <p className="mt-2 text-slate-600 leading-relaxed">
            Aku menulis puisi pendek tentang hal-hal kecil yang sering luput—gesekan angin, tatap yang
            tertahan, dan cara kota menyimpan sunyi. Situs ini adalah ruang yang lebih tenang untuk
            menyimpan kata-kata itu.
          </p>
        </div>
      </div>
    </section>
  );
}
