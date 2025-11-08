import React from 'react';
import { BookOpen, Feather, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Feather className="h-5 w-5 text-sky-600" />
          <span className="font-semibold tracking-tight text-slate-800">Literary Affection</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#works" className="hover:text-slate-900 transition-colors">Karya</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">Tentang</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Kontak</a>
        </nav>
        <button aria-label="Menu" className="md:hidden p-2 rounded-md hover:bg-slate-100">
          <Menu className="h-5 w-5 text-slate-700" />
        </button>
      </div>
    </header>
  );
}
