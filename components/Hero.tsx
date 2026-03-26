import Link from 'next/link';

export function Hero() {
  return (
    <section className="container-atlas py-16">
      <p className="mb-4 text-sm uppercase tracking-[0.2em] text-atlas">Funding landscape prototype</p>
      <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-900">Map who is funded in a field, where activity is concentrated, and which institutions are gaining momentum.</h1>
      <p className="mt-5 max-w-3xl text-lg text-slate-700">A static-first, searchable funding landscape explorer built to demonstrate institution intelligence design on top of public-data-inspired records.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/explore" className="rounded-md bg-atlas px-4 py-2 text-white">Explore Landscape</Link>
        <Link href="/request-analysis" className="rounded-md border border-slate-300 bg-white px-4 py-2">Request Analysis</Link>
      </div>
    </section>
  );
}
