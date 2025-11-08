import { Mail, Instagram, Link as LinkIcon } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-sky-100 bg-white/70 p-8 shadow-sm backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-slate-900">Connect</h2>
              <p className="mt-2 text-slate-700">
                For readings, collaborations, or just to say hello.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-800"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-medium text-sky-800 shadow-sm transition hover:bg-white/80"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-3 text-sm font-medium text-sky-800 shadow-sm transition hover:bg-white/80"
                >
                  <LinkIcon className="h-4 w-4" /> Linktree
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-sky-200 bg-white/70 px-3 py-2 text-slate-800 shadow-inner outline-none ring-0 placeholder:text-slate-400 focus:border-sky-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-sky-200 bg-white/70 px-3 py-2 text-slate-800 shadow-inner outline-none ring-0 placeholder:text-slate-400 focus:border-sky-300"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    rows="4"
                    className="mt-1 w-full rounded-lg border border-sky-200 bg-white/70 px-3 py-2 text-slate-800 shadow-inner outline-none ring-0 placeholder:text-slate-400 focus:border-sky-300"
                    placeholder="A note, a question, or a poem."
                  />
                </div>
                <button
                  type="button"
                  className="rounded-full bg-sky-700 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-sky-800"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
