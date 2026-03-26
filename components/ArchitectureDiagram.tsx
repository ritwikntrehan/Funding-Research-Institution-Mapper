export function ArchitectureDiagram() {
  const box = 'rounded-lg border border-slate-300 bg-white p-3 text-sm';
  return (
    <div className="card p-4">
      <h3 className="mb-4 font-medium">Phase 1 architecture sketch</h3>
      <div className="grid gap-3 md:grid-cols-3">
        <div className={box}>Public award sources (represented by local sample JSON)</div>
        <div className={box}>Normalization layer: institutions, investigators, fields, geographies</div>
        <div className={box}>Static profile pages + searchable directory views</div>
      </div>
      <div className="my-3 text-center text-slate-400">↓</div>
      <div className={box}>Funding landscape interpretation: trend signals, concentration, and adjacency hints</div>
    </div>
  );
}
