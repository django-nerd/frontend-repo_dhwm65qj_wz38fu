export default function SymbolsStrip() {
  return (
    <div className="relative isolate">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(120px_120px_at_10%_40%,theme(colors.sky.200)_0%,transparent_60%),radial-gradient(140px_140px_at_90%_30%,theme(colors.sky.100)_0%,transparent_60%),radial-gradient(160px_160px_at_50%_90%,theme(colors.sky.50)_0%,transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-6 py-10 sm:grid-cols-3">
        <div className="rounded-xl border border-sky-100 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm">
          <div className="mx-auto size-14 rounded-full bg-gradient-to-br from-sky-100 to-white ring-1 ring-sky-200/60" />
          <h3 className="mt-3 font-medium text-slate-800">Pigeon</h3>
          <p className="text-sm text-slate-600">City-blue messenger of ordinary miracles.</p>
        </div>
        <div className="rounded-xl border border-sky-100 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm">
          <div className="mx-auto size-14 rounded-full bg-gradient-to-br from-emerald-50 to-white ring-1 ring-emerald-200/60" />
          <h3 className="mt-3 font-medium text-slate-800">Acacia</h3>
          <p className="text-sm text-slate-600">Shade and shelter; the patience of trees.</p>
        </div>
        <div className="rounded-xl border border-sky-100 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm">
          <div className="mx-auto size-14 rounded-full bg-gradient-to-br from-rose-50 to-white ring-1 ring-rose-200/60" />
          <h3 className="mt-3 font-medium text-slate-800">Hibiscus</h3>
          <p className="text-sm text-slate-600">Brief flare of color, like a heartbeat.</p>
        </div>
      </div>
    </div>
  );
}
