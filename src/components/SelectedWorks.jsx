import { useEffect, useState } from "react";

function PoemCard({ title, excerpt }) {
  return (
    <div className="group rounded-2xl border border-sky-100 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:shadow-md">
      <h3 className="font-serif text-xl text-slate-800">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{excerpt}</p>
    </div>
  );
}

export default function SelectedWorks() {
  const [works, setWorks] = useState([
    {
      title: "Pigeon Letters",
      excerpt:
        "The city loosens its knots at dusk; a winged envelope opening above the train yard.",
    },
    {
      title: "Acacia Noon",
      excerpt:
        "Under a patient canopy, we inventory our shadows and call it tenderness.",
    },
    {
      title: "Hibiscus Theory",
      excerpt:
        "A red syllable opens in the throat of morning, explaining nothing beautifully.",
    },
  ]);

  return (
    <section id="works" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-slate-900">Selected Works</h2>
            <p className="mt-1 text-slate-600">Fragments and poems from an ongoing manuscript.</p>
          </div>
          <a href="#contact" className="text-sm font-medium text-sky-800 hover:underline">
            Request full manuscript
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {works.map((w) => (
            <PoemCard key={w.title} title={w.title} excerpt={w.excerpt} />)
          )}
        </div>
      </div>
    </section>
  );
}
