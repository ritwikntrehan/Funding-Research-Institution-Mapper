import Link from 'next/link';
import { FilterRail } from '@/components/FilterRail';
import { MiniTrendChart } from '@/components/MiniTrendChart';
import { ProfileCard } from '@/components/ProfileCard';
import { SearchBar } from '@/components/SearchBar';
import { db } from '@/lib/data';

export default function ExplorePage() {
  const field = db.fields.find((f) => f.id === 'additive-manufacturing') ?? db.fields[0];
  const institutions = db.institutions.filter((i) => field.topInstitutionIds.includes(i.id));
  const investigators = db.investigators.filter((i) => field.topInvestigatorIds.includes(i.id));
  const geos = db.geographies.filter((g) => field.geographyIds.includes(g.id));
  const trends = db.trends.filter((t) => t.fieldId === field.id);

  return (
    <div className="container-atlas py-10">
      <h1 className="mb-4 text-3xl font-semibold">Explore funding landscape</h1>
      <SearchBar defaultValue="additive manufacturing" />
      <p className="mt-2 text-sm text-slate-600">Prototype note: this page uses curated sample records for demonstration.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[260px,1fr]">
        <FilterRail />
        <div className="space-y-6">
          <div className="card p-5">
            <h2 className="text-xl font-semibold">Funding landscape summary: {field.name}</h2>
            <p className="mt-2 text-slate-700">{field.summary}</p>
            <div className="mt-4"><MiniTrendChart trends={trends} /></div>
            <p className="mt-3 text-sm text-slate-600">Recent trend direction: {field.trendLabel}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card p-4"><h3 className="font-medium">Top institutions</h3><div className="mt-3 space-y-2">{institutions.map((i) => <ProfileCard key={i.id} title={i.name} subtitle={i.type} description={i.summary} href={`/institution/${i.id}`} badge={i.trendLabel} />)}</div></div>
            <div className="card p-4"><h3 className="font-medium">Top investigators</h3><div className="mt-3 space-y-2">{investigators.map((i) => <ProfileCard key={i.id} title={i.name} subtitle={i.title} description={i.summary} href={`/investigator/${i.id}`} badge={i.trendLabel} />)}</div></div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="card p-4"><h3 className="font-medium">Geographic clusters</h3><ul className="mt-3 space-y-2 text-sm text-slate-700">{geos.map((g) => <li key={g.id}>{g.name} — {g.summary}</li>)}</ul></div>
            <div className="card p-4"><h3 className="font-medium">Rising / underfunded themes</h3><p className="mt-2 text-sm text-slate-700">Emerging: {field.emergingAreas.join('; ')}</p><p className="mt-2 text-sm text-slate-700">Potentially underfunded: {field.underfundedAreas.join('; ')}</p></div>
          </div>
          <div className="card p-4 text-sm text-slate-700">Narrative summary: {field.name} appears increasingly concentrated across a few institutions while adjacent themes suggest room for targeted pilot analysis. <Link href="/request-analysis" className="text-atlas">Request a tailored landscape review.</Link></div>
        </div>
      </div>
    </div>
  );
}
