export function SearchBar({ defaultValue = '' }: { defaultValue?: string }) {
  return <input defaultValue={defaultValue} placeholder="Search fields, institutions, investigators..." className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" />;
}
