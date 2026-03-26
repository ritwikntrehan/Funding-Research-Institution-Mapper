import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MiniTrendChart } from '@/components/MiniTrendChart';
import { ProfileCard } from '@/components/ProfileCard';
import { db } from '@/lib/data';

export function generateStaticParams() {
  return db.fields.map((f) => ({ id: f.id }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function FieldPage({ params }: Props) {
  const { id } = await params;

  const field = db.fields.find((f) => f.id === id);
  if (!field) notFound();

  const institutions = db.institutions.filter((i) =>
    field.topInstitutionIds.includes(i.id)
  );
  const investigators = db.investigators.filter((i) =>
    field.topInvestigatorIds.includes(i.id)
  );
  const agencies = db.agencies.filter((a) => field.agencyIds.includes(a.id));
  const geos = db.geographies.filter((g) => field.geographyIds.includes(g.id));
  const trends = db.trends.filter((t) => t.fieldId === field.id);

  return (
    <div className="container-atlas py-10 space-y-6">
      <h1 className="text-3xl font-semibold">
        Who is funded in {field.name.toLowerCase()}?
      </h1>

      <div className="card p-5 text-slate-700">{field.summary}</div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <h2 className="font-semibold mb-2">Top institutions</h2>
          <div className="space-y-2">
            {institutions.map((i) => (
              <ProfileCard
                key={i.id}
                title={i.name}
                subtitle={i.type}
                description={i.summary}
                href={`/institution/${i.id}`}
                badge={i.trendLabel}
              />
            ))}
          </div>
        </div>

        <div className="card p-4">
          <h2 className="font-semibold mb-2">Top investigators</h2>
          <div className="space-y-2">
            {investigators.map((i) => (
              <ProfileCard
                key={i.id}
                title={i.name}
                subtitle={i.title}
                description={i.summary}
                href={`/investigator/${i.id}`}
                badge={i.trendLabel}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-4">
          <h2 className="font-semibold mb-2">Top agencies</h2>
          <ul className="list-disc pl-5 text-sm">
            {agencies.map((a) => (
              <li key={a.id}>{a.name}</li>
            ))}
          </ul>
        </div>

        <div className="card p-4">
          <h2 className="font-semibold mb-2">Geography distribution</h2>
          <ul className="list-disc pl-5 text-sm">
            {geos.map((g) => (
              <li key={g.id}>{g.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card p-4">
        <h2 className="font-semibold mb-2">Trend signal</h2>
        <MiniTrendChart trends={trends} />
        <p className="mt-2 text-sm">Signal: {field.trendLabel}</p>
      </div>

      <div className="card p-4 text-sm">
        <p>
          <strong>Emerging adjacent areas:</strong>{' '}
          {field.emergingAreas.join('; ')}
        </p>
        <p className="mt-2">
          <strong>Caveats / limitations:</strong> {field.caveats.join(' ')}
        </p>
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
