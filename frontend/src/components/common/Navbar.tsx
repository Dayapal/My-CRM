import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="border-b bg-background">
      <div className="flex h-16 items-center justify-between px-6">
        <Input
          placeholder="Search..."
          className="max-w-sm"
        />

        <div className="flex items-center gap-3">
          <div>
            <p className="font-medium">
              Daya Pal
            </p>

            <p className="text-xs text-muted-foreground">
              Owner
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}