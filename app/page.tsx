import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { db } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container-atlas grid gap-6 pb-8 md:grid-cols-2">
        <div className="card p-5">
          <h2 className="mb-2 text-xl font-semibold">The problem</h2>
          <p className="text-slate-700">It is easy to know that funding exists. It is harder to see who is winning in a niche, where activity is concentrated, and which institutions or investigators are rising.</p>
        </div>
        <div className="card p-5">
          <h2 className="mb-2 text-xl font-semibold">Product value</h2>
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            <li>Searchable profiles across institutions and investigators</li>
            <li>Funding landscape exploration by research field</li>
            <li>Institution comparison and trend views</li>
          </ul>
        </div>
      </section>
      <section className="container-atlas pb-8">
        <h2 className="mb-3 text-xl font-semibold">Three-step workflow</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {['Search field', 'Map winners', 'Identify patterns'].map((step, i) => (
            <div className="card p-4" key={step}><p className="text-xs text-atlas">Step {i + 1}</p><p className="font-medium">{step}</p></div>
          ))}
        </div>
      </section>
      <section className="container-atlas pb-8">
        <h2 className="mb-3 text-xl font-semibold">Screen preview</h2>
        <div className="card p-5">
          <p className="mb-3 text-slate-700">Atlas-style field cards and profile directories for {db.fields.length} curated research niches.</p>
          <div className="grid gap-3 md:grid-cols-4">
            {db.fields.slice(0, 4).map((f) => (
              <Link href={`/field/${f.id}`} key={f.id} className="rounded border border-slate-200 bg-slate-50 p-3 text-sm hover:border-atlas">{f.name}</Link>
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">Phase 1 uses a curated prototype dataset with sample records inspired by public funding data. It is not complete and does not live-update.</p>
      </section>
    </>
  );
}
