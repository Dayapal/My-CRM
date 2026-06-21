import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="h-16 border-b bg-white shadow-sm">
      <div className="flex h-full items-center justify-between px-6">
        <Input
          placeholder="Search..."
          className="max-w-sm"
        />

        <div className="text-right">
          <p className="font-medium">
            Daya Pal
          </p>

          <p className="text-xs text-slate-500">
            Owner
          </p>
        </div>
      </div>
    </header>
  );
}