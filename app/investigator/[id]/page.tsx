import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MiniTrendChart } from '@/components/MiniTrendChart';
import { ProfileCard } from '@/components/ProfileCard';
import { currency, db } from '@/lib/data';

export function generateStaticParams() {
  return db.investigators.map((i) => ({ id: i.id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function InvestigatorPage({ params }: Props) {
  const { id } = await params;

  const investigator = db.investigators.find((i) => i.id === id);
  if (!investigator) notFound();

  const institution = db.institutions.find(
    (i) => i.id === investigator.institutionId
  );
  const awards = db.awards.filter((a) =>
    investigator.recentAwardIds.includes(a.id)
  );
  const fields = db.fields.filter((f) => investigator.fieldIds.includes(f.id));
  const related = db.investigators.filter((i) =>
    investigator.relatedInvestigatorIds.includes(i.id)
  );
  const trend = db.trends
    .filter((t) => investigator.fieldIds.includes(t.fieldId))
    .slice(0, 4);

  return (
    <div className="container-atlas py-10 space-y-6">
      <h1 className="text-3xl font-semibold">{investigator.name}</h1>

      <div className="card p-5 grid gap-3 md:grid-cols-2 text-sm">
        <p>
          <strong>Institution:</strong>{' '}
          <Link href={`/institution/${institution?.id}`} className="text-atlas">
            {institution?.name}
          </Link>
        </p>
        <p>
          <strong>Field focus:</strong>{' '}
          {fields.map((f) => f.name).join(', ')}
        </p>
        <p>
          <strong>Role:</strong> {investigator.title}
        </p>
        <p>
          <strong>Funding trend snapshot:</strong> {investigator.trendLabel}
        </p>
      </div>

      <div className="card p-5">
        <h2 className="mb-2 font-semibold">Recent awards/projects</h2>
        <ul className="space-y-2 text-sm">
          {awards.map((a) => (
            <li key={a.id}>
              {a.title} — {currency(a.amount)} ({a.year})
            </li>
          ))}
        </ul>
      </div>

      <div className="card p-5">
        <h2 className="mb-2 font-semibold">Trend chart</h2>
        <MiniTrendChart trends={trend} />
      </div>

      <div className="card p-5">
        <h2 className="mb-2 font-semibold">Related fields & adjacency hints</h2>
        <p>
          {fields
            .flatMap((f) => f.relatedFieldIds)
            .slice(0, 4)
            .map((id) => db.fields.find((f) => f.id === id)?.name)
            .filter(Boolean)
            .join(', ')}
        </p>
      </div>

      <div className="card p-5">
        <h2 className="mb-2 font-semibold">Collaboration hints</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {related.map((r) => (
            <ProfileCard
              key={r.id}
              title={r.name}
              subtitle={r.title}
              description={r.summary}
              href={`/investigator/${r.id}`}
              badge={r.trendLabel}
            />
          ))}
        </div>
      </div>

      <div className="card p-5 text-slate-700">
        Narrative interpretation: {investigator.summary} Relationships shown
        here are indicative and based on the curated sample.
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
