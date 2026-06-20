import { Link } from "react-router-dom";
import { navigation } from "@/constants/navigation";

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen bg-background text-foreground">
      <div className="p-6">
        <h1 className="text-xl font-bold">
          CRM Pro
        </h1>
      </div>

      <nav className="space-y-2 px-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.href}
              className="
                flex
                items-center
                gap-3
                rounded-lg
                px-3
                py-2
                text-sm
                hover:bg-muted
              "
            >
              <Icon size={18} />

              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}