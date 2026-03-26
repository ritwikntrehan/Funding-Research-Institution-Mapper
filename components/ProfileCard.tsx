import Link from 'next/link';

type Props = { title: string; subtitle: string; description: string; href: string; badge?: string };

export function ProfileCard({ title, subtitle, description, href, badge }: Props) {
  return (
    <Link href={href} className="card block p-4 hover:border-atlas/40">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="font-medium text-slate-900">{title}</h3>
        {badge && <span className="rounded bg-atlas/10 px-2 py-0.5 text-xs text-atlas">{badge}</span>}
      </div>
      <p className="text-sm text-slate-600">{subtitle}</p>
      <p className="mt-2 text-sm text-slate-700">{description}</p>
    </Link>
  );
}
