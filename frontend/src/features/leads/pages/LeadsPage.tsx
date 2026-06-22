import { useState } from "react";

import type { Lead } from "../leads.types";
import DashboardLayout from "@/layouts/DashboardLayout";

import LeadsTable from "../components/LeadsTable";
import CreateLeadDialog from "../components/CreateLeadDialog";

import { useLeads } from "../useLeads";

import { Button } from "@/components/ui/button";

import { Search } from "lucide-react";

export default function LeadsPage() {
  const [open, setOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const {
    data,
    isLoading,
  } = useLeads();

  if (isLoading) {
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

 const leads: Lead[] =
  data?.leads || [];

  const filteredLeads =
    leads.filter((lead) =>
      `${lead.firstName} ${lead.lastName}`
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  const totalLeads =
    leads.length;

  const convertedLeads =
    leads.filter(
      (lead) =>
        lead.status ===
        "CONVERTED"
    ).length;

  const qualifiedLeads =
    leads.filter(
      (lead) =>
        lead.status ===
        "QUALIFIED"
    ).length;

  const newLeads =
    leads.filter(
      (lead) =>
        lead.status === "NEW"
    ).length;

  return (
    <DashboardLayout>

      <div className="space-y-6">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Leads
            </h1>

            <p className="text-slate-500">
              Manage and track all your sales leads
            </p>
          </div>

          <Button
            onClick={() =>
              setOpen(true)
            }
          >
            Create Lead
          </Button>

        </div>

        {/* KPI Cards */}

        <div
          className="
            grid
            gap-4
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Total Leads
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {totalLeads}
            </h2>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              New Leads
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {newLeads}
            </h2>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Qualified
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {qualifiedLeads}
            </h2>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">
              Converted
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {convertedLeads}
            </h2>
          </div>
        </div>

        {/* Search */}

        <div className="relative">

          <Search
            className="
              absolute
              left-3
              top-1/2
              h-4
              w-4
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            placeholder="Search leads..."
            className="
              w-full
              rounded-xl
              border
              bg-white
              py-3
              pl-10
              pr-4
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          />
        </div>

        {/* Leads Table */}

        <LeadsTable
          leads={filteredLeads}
        />

      </div>

      <CreateLeadDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />

    </DashboardLayout>
  );
}