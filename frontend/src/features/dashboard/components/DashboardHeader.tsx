import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import SearchDialog from "../../search/SearchDialog"

import {
  Plus,
  CalendarPlus,
  BriefcaseBusiness,
  Search,
} from "lucide-react";

interface Props {
  userName?: string;
}

export default function DashboardHeader({
  userName = "Daya Pal",
}: Props) {
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpenSearch(true);
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <>
      <div
        className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between
        "
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight  text-slate-900">
            Welcome back,
            <span className="text-blue-600"> {userName}</span> 👋</h1>

          <p
            className="mt-2 text-lg text-slate-500
            "
          >
            Here's what's happening in your CRM today.
          </p>
        </div>

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >
          <Button
            variant="outline"
            onClick={() => setOpenSearch(true)}
          >
            <Search className="mr-2 h-4 w-4" />
            Search
            <span className="ml-2 text-xs text-muted-foreground">
              Ctrl + K
            </span>
          </Button>

          <Button
            className="
              bg-blue-600
              hover:bg-blue-700
            "
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Lead
          </Button>

          <Button variant="outline">
            <BriefcaseBusiness className="mr-2 h-4 w-4" />
            New Deal
          </Button>

          <Button variant="outline">
            <CalendarPlus className="mr-2 h-4 w-4" />
            Schedule Meeting
          </Button>
        </div>
      </div>

      <SearchDialog
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      />
    </>
  );
}