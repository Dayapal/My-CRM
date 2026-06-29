import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Contact,
  Building2,
  Handshake,
  CheckSquare,
  ChartColumn,
  Settings,
  History,

   CalendarDays,
  
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Leads", href: "/leads", icon: Users },
  { title: "Contacts", href: "/contacts", icon: Contact },
  { title: "Companies", href: "/companies", icon: Building2 },
  { title: "Deals", href: "/deals", icon: Handshake },
  { title: "Tasks", href: "/tasks", icon: CheckSquare },
  { title: "Users", href: "/users", icon: Users },
  { title: "Reports", href: "/reports", icon: ChartColumn },
  { title: "Settings", href: "/settings", icon: Settings },
  {title: "Activities",href: "/activities", icon: History,},
  {title: "Meetings",href: "/meetings", icon: CalendarDays,}
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r bg-slate-900 text-white">
      <div className="p-6">

      <div className="border-b border-slate-800 p-6">
  <h1 className="text-xl font-bold">
    CRM Pro
  </h1>

  <p className="text-xs text-slate-400">
    Sales Management
  </p>
</div>

      </div>

      <nav className="space-y-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.title}
              to={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-slate-800"
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