import { Feather, PenTool, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white/80 to-sky-50/60 p-8 shadow-sm backdrop-blur-md">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl text-slate-900">About the poet</h2>
              <p className="mt-3 text-slate-700">
                Writing toward a tenderness big enough to include the ordinary, I gather moments
                like pigeons on a windowsill—each a small arrival. My work asks quiet questions
                about attention, memory, and how language holds the hand of what we love.
              </p>
              <p className="mt-3 text-slate-700">
                The symbols that return: a sky-colored bird, the shade of acacia, the flare of
                hibiscus—companions in a field of slow constellations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-sky-100 bg-white/70 p-4 shadow-sm">
                <div className="flex items-center gap-2 font-medium text-slate-800">
                  <PenTool className="h-4 w-4 text-sky-700" /> Practice
                </div>
                <p className="mt-1 text-sm text-slate-600">Poetry, fragment, epistolary notes.</p>
              </div>
              <div className="rounded-xl border border-sky-100 bg-white/70 p-4 shadow-sm">
                <div className="flex items-center gap-2 font-medium text-slate-800">
                  <Feather className="h-4 w-4 text-sky-700" /> Themes
                </div>
                <p className="mt-1 text-sm text-slate-600">Intimacy, memory, attention, belonging.</p>
              </div>
              <div className="rounded-xl border border-sky-100 bg-white/70 p-4 shadow-sm">
                <div className="flex items-center gap-2 font-medium text-slate-800">
                  <Sparkles className="h-4 w-4 text-sky-700" /> Current project
                </div>
                <p className="mt-1 text-sm text-slate-600">A manuscript of gentle astronomical notes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
