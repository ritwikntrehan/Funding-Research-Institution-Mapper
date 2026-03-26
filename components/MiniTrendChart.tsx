import { Trend } from '@/lib/types';

type Props = { trends: Trend[] };

export function MiniTrendChart({ trends }: Props) {
  const sorted = [...trends].sort((a, b) => a.year - b.year);
  const max = Math.max(...sorted.map((t) => t.amount), 1);
  return (
    <div className="flex items-end gap-2">
      {sorted.map((t) => (
        <div key={t.id} className="flex flex-col items-center gap-1 text-[11px] text-slate-500">
          <div className="w-6 rounded-t bg-atlas/70" style={{ height: `${Math.round((t.amount / max) * 70)}px` }} />
          <span>{t.year}</span>
        </div>
      ))}
    </div>
  );
}
