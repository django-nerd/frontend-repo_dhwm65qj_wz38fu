import React from 'react';
import Hero from './components/Hero';
import SymbolsStrip from './components/SymbolsStrip';
import SelectedWorks from './components/SelectedWorks';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-slate-200/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
            <span className="font-medium text-slate-900">Literary Affection</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#works" className="hover:text-slate-900">Works</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Connect</a>
          </nav>
        </div>
      </header>

      {/* Main sections */}
      <main>
        <Hero />
        <SymbolsStrip />
        <section id="works">
          <SelectedWorks />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t border-slate-200/60 bg-white/60 py-8">
        <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Literary Affection. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
