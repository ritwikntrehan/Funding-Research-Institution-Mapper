import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MiniTrendChart } from '@/components/MiniTrendChart';
import { ProfileCard } from '@/components/ProfileCard';
import { currency, db } from '@/lib/data';

export function generateStaticParams() {
  return db.institutions.map((i) => ({ id: i.id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function InstitutionPage({ params }: Props) {
  const { id } = await params;

  const institution = db.institutions.find((i) => i.id === id);
  if (!institution) notFound();

  const geography = db.geographies.find((g) => g.id === institution.geographyId);
  const notable = db.investigators.filter((i) =>
    institution.notableInvestigatorIds.includes(i.id)
  );
  const fields = db.fields.filter((f) => institution.fieldIds.includes(f.id));
  const trend = db.trends
    .filter((t) => institution.fieldIds.includes(t.fieldId))
    .slice(0, 4);

  return (
    <div className="container-atlas py-10 space-y-6">
      <h1 className="text-3xl font-semibold">{institution.name}</h1>

      <div className="card p-5 grid gap-3 md:grid-cols-2 text-sm">
        <p><strong>Type:</strong> {institution.type}</p>
        <p><strong>Geography:</strong> {geography?.name}</p>
        <p><strong>Recent funding summary:</strong> {currency(institution.recentFundingAmount)}</p>
        <p><strong>Trend:</strong> {institution.trendLabel}</p>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold mb-2">Field strengths</h2>
        <p>{institution.strengths.join(' • ')}</p>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold mb-2">Trend chart</h2>
        <MiniTrendChart trends={trend} />
      </div>

      <div className="card p-5">
        <h2 className="font-semibold mb-2">Notable investigators</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {notable.map((n) => (
            <ProfileCard
              key={n.id}
              title={n.name}
              subtitle={n.title}
              description={n.summary}
              href={`/investigator/${n.id}`}
              badge={n.trendLabel}
            />
          ))}
        </div>
      </div>

      <div className="card p-5">
        <h2 className="font-semibold mb-2">Related fields</h2>
        <div className="flex flex-wrap gap-2">
          {fields.map((f) => (
            <Link
              className="rounded border px-2 py-1 text-sm"
              key={f.id}
              href={`/field/${f.id}`}
            >
              {f.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="card p-5 text-slate-700">
        Narrative interpretation: {institution.summary} This profile is derived from sample records to illustrate institution intelligence workflows.
      </div>

      <Link
        href="/request-analysis"
        className="inline-block rounded-md bg-atlas px-4 py-2 text-white"
      >
        Request tailored analysis
      </Link>
    </div>
  );
}
