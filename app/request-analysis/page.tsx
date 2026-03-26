export default function RequestAnalysisPage() {
  const fields = ['Name', 'Organization', 'Role', 'Field / Topic of Interest', 'Agency Interest', 'Geography', 'Institution Names (if relevant)', 'What You Want to Understand', 'Website', 'Notes'];
  return (
    <div className="container-atlas py-10">
      <h1 className="text-3xl font-semibold">Request tailored landscape review</h1>
      <p className="mt-3 max-w-3xl text-slate-700">Tailored funding landscape analysis is available by request or pilot engagement. This form is demo-ready and can route to email in phase 1.</p>
      <form action="mailto:pilot@example.com" method="post" encType="text/plain" className="card mt-6 grid gap-4 p-5 md:grid-cols-2">
        {fields.map((f) => (
          <label key={f} className={f === 'What You Want to Understand' || f === 'Notes' ? 'md:col-span-2' : ''}>
            <span className="mb-1 block text-sm font-medium">{f}</span>
            {f === 'What You Want to Understand' || f === 'Notes' ? <textarea className="w-full rounded-md border border-slate-300 p-2" rows={4} name={f} /> : <input className="w-full rounded-md border border-slate-300 p-2" name={f} />}
          </label>
        ))}
        <div className="md:col-span-2">
          <button className="rounded-md bg-atlas px-4 py-2 text-white" type="submit">Submit demo request</button>
          <p className="mt-2 text-xs text-slate-600">Placeholder submission path: configurable mailto. Can be switched to an external form endpoint.</p>
        </div>
      </form>
    </div>
  );
}
