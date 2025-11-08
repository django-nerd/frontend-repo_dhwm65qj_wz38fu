import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-14">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <Mail className="h-5 w-5 text-sky-600" />
          <h2 className="text-lg font-semibold text-slate-900">Kontak</h2>
        </div>
        {sent ? (
          <p className="text-slate-700">Terima kasih. Pesanmu sudah terkirim (simulasi).</p>
        ) : (
          <form onSubmit={onSubmit} className="grid gap-4">
            <input
              type="text"
              required
              placeholder="Namamu"
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-sky-500 focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-sky-500 focus:outline-none"
            />
            <textarea
              required
              placeholder="Pesan"
              rows={4}
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:border-sky-500 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-700"
            >
              Kirim
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
