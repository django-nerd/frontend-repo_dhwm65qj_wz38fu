import Hero from "./components/Hero";
import SymbolsStrip from "./components/SymbolsStrip";
import SelectedWorks from "./components/SelectedWorks";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-white text-slate-800">
      {/* Cosmic background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-70">
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,theme(colors.sky.100)_0%,transparent_60%)]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,theme(colors.slate.100)_0%,transparent_60%)]" />
      </div>

      {/* Simple header */}
      <header className="sticky top-0 z-10 border-b border-sky-100/60 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="font-serif text-xl text-slate-900">Literary Affection</a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#works" className="hover:text-sky-800">Works</a>
            <a href="#about" className="hover:text-sky-800">About</a>
            <a href="#contact" className="hover:text-sky-800">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <SymbolsStrip />
        <SelectedWorks />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-sky-100/60 bg-white/70 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Literary Affection — made with calm attention.
      </footer>
    </div>
  );
}
