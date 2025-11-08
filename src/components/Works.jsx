import React from 'react';

const poems = [
  {
    title: 'Senja di Halaman',
    excerpt:
      'langit menutup pelan, dan kata-kata jatuh seperti daun, menyentuh tanah tanpa suara',
  },
  {
    title: 'Malam yang Tertinggal',
    excerpt:
      'lampu-lampu berkedip seperti ingatan, kita duduk diam dan membiarkan waktu mengering',
  },
  {
    title: 'Air yang Menjaga',
    excerpt:
      'di antara alirannya, namamu menetap, sebuah bisik yang tak ingin selesai',
  },
];

function PoemCard({ title, excerpt }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <h3 className="font-medium text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600 leading-relaxed">{excerpt}</p>
      <div className="mt-4 text-sm text-sky-700 opacity-0 transition group-hover:opacity-100">
        Baca selengkapnya →
      </div>
    </div>
  );
}

export default function Works() {
  return (
    <section id="works" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">Karya Terpilih</h2>
        <a href="#" className="text-sm text-sky-700 hover:underline">Lihat semua</a>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {poems.map((p) => (
          <PoemCard key={p.title} title={p.title} excerpt={p.excerpt} />
        ))}
      </div>
    </section>
  );
}
