export function FilterRail() {
  const filters = ['Field', 'Agency', 'Geography', 'Institution Type', 'Project Status'];
  return (
    <aside className="card h-fit p-4">
      <h3 className="mb-3 font-medium">Filters</h3>
      <div className="space-y-2 text-sm text-slate-700">
        {filters.map((f) => <div key={f} className="rounded border border-slate-200 p-2">{f}</div>)}
      </div>
    </aside>
  );
}
