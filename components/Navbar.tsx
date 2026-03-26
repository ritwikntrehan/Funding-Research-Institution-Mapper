import Link from 'next/link';

const links = [
  { href: '/explore', label: 'Explore' },
  { href: '/field/additive-manufacturing', label: 'Fields' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/request-analysis', label: 'Request Analysis' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-atlas flex items-center justify-between py-4">
        <Link href="/" className="font-semibold text-atlas">Funding / Research / Institution Mapper</Link>
        <nav className="flex gap-5 text-sm text-slate-700">
          {links.map((link) => <Link key={link.href} href={link.href} className="hover:text-atlas">{link.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
