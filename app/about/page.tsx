export default function AboutPage() {
  return (
    <div className="container-atlas py-10 space-y-6">
      <h1 className="text-3xl font-semibold">About this prototype</h1>
      <p className="max-w-3xl text-slate-700">Funding / Research / Institution Mapper was built as a public demonstration of funding-intelligence product design. The goal is to show how public research awards can be structured into searchable profiles and field-level landscape views.</p>
      <div className="card p-5">
        <h2 className="mb-2 font-semibold">Capability areas demonstrated</h2>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Public data ingestion planning</li>
          <li>Entity resolution and normalized profile IDs</li>
          <li>Searchable profile system architecture</li>
          <li>Trend and landscape analysis framing</li>
          <li>Static-first product architecture for fast deployment</li>
        </ul>
      </div>
      <p className="text-sm text-slate-600">Tone and scope are intentionally restrained: this is a credible capability artifact, not a complete or live-updating national research funding database.</p>
    </div>
  );
}
