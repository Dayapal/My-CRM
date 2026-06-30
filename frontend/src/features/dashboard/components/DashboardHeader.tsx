import { Button } from "@/components/ui/button";

import {
  Plus,
  CalendarPlus,
  BriefcaseBusiness,
} from "lucide-react";

interface Props {
  userName?: string;
}

export default function DashboardHeader({
  userName = "Daya Pal",
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        gap-6

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div>
        <h1
          className="
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
          "
        >
          Welcome back,
          <span className="text-blue-600">
            {" "}
            {userName}
          </span>
          👋
        </h1>

        <p
          className="
            mt-2
            text-slate-500
            text-lg
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
  );
}