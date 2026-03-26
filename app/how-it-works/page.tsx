import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';

const sections = [
  ['Source data', 'Phase 1 uses local JSON sample records inspired by public award datasets to simulate ingestable grant data.'],
  ['Entity normalization', 'Institution names, investigator identities, and agency labels are normalized into reusable IDs.'],
  ['Field tagging', 'Awards are assigned one or more field tags to support niche-level exploration and adjacency signals.'],
  ['Institution mapping', 'Institution profiles aggregate strengths, geography, recent funding totals, and notable investigators.'],
  ['Investigator profiles', 'Investigator pages summarize role, field focus, selected awards, and collaboration hints.'],
  ['Trend signals', 'Trends use annual totals and award counts to produce compact directional labels for exploration.'],
  ['Limitations', 'This prototype is simplified, static, and non-exhaustive. It is a proof-of-capability for structure and product thinking.'],
] as const;

export default function HowItWorksPage() {
  return (
    <div className="container-atlas py-10 space-y-6">
      <h1 className="text-3xl font-semibold">How it works</h1>
      <p className="max-w-3xl text-slate-700">This site demonstrates the structure of a searchable funding-intelligence layer over public research award data. Phase 1 uses simplified assumptions and local sample data.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map(([title, copy]) => <div key={title} className="card p-4"><h2 className="font-semibold">{title}</h2><p className="mt-2 text-sm text-slate-700">{copy}</p></div>)}
      </div>
      <ArchitectureDiagram />
    </div>
  );
}
