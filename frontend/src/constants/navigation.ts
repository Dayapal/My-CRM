
import {
  LayoutDashboard,
  Users,
  Contact,
  Building2,
  Handshake,
  CheckSquare,
  Settings,
   CalendarDays,

} from "lucide-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },

  {
    title: "Leads",
    href: "/leads",
    icon: Users,
  },

  {
    title: "Contacts",
    href: "/contacts",
    icon: Contact,
  },

  {
    title: "Companies",
    href: "/companies",
    icon: Building2,
  },

  {
    title: "Deals",
    href: "/deals",
    icon: Handshake,
  },

  {
    title: "Tasks",
    href: "/tasks",
    icon: CheckSquare,
  },

  {
  label: "Users",
  path: "/users",
  icon: Users,
},
  {
  label: "Reports",
  path: "/reports",
  icon: Users,
},

  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
  title: "Meetings",
  href: "/meetings",
  icon: CalendarDays,
}
];