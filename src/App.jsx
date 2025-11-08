import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <Works />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-slate-500">
          © {new Date().getFullYear()} Literary Affection — dibuat dengan kesederhanaan.
        </div>
      </footer>
    </div>
  );
}
