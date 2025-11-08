import { Bird, Heart, Quote, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/60 bg-white/60 px-4 py-2 backdrop-blur-sm">
          <Bird className="h-4 w-4 text-sky-700" />
          <span className="text-xs tracking-wide text-sky-800">literary affection</span>
        </div>

        <h1 className="mt-6 font-serif text-4xl leading-tight text-slate-800 sm:text-5xl md:text-6xl">
          Quiet constellations of the human heart
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Poems and fragments exploring tenderness, memory, and the soft gravity between souls.
          A practice in sincerity, silence, and luminous attention.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#works"
            className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <BookOpen className="h-4 w-4" /> Read selected works
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/70 px-5 py-3 text-sm font-medium text-sky-800 shadow-sm backdrop-blur-sm transition hover:bg-white"
          >
            <Heart className="h-4 w-4" /> About the poet
          </a>
        </div>

        <figure className="mx-auto mt-12 max-w-3xl rounded-2xl border border-sky-100 bg-white/70 p-6 text-left shadow-sm backdrop-blur-sm">
          <Quote className="mb-3 h-6 w-6 text-sky-600" />
          <blockquote className="text-slate-700">
            In the hush between two names, a small light organizes itself into a bird;
            it lands in the palm of a morning and remembers a city it never left.
          </blockquote>
        </figure>
      </div>
    </section>
  );
}
