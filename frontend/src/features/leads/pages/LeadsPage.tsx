import DashboardLayout from "@/layouts/DashboardLayout";

import LeadsTable from "../components/LeadsTable";

import { useLeads } from "../useLeads";
import { useState } from "react";

import CreateLeadDialog from "../components/CreateLeadDialog";

import { Button } from "@/components/ui/button";

export default function LeadsPage() {
  const [open, setOpen] = useState(false);

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

  return (
    <DashboardLayout>

      <div className="flex justify-between">

        <h1 className="text-3xl font-bold">
          Leads
        </h1>

        <Button
          onClick={() =>
            setOpen(true)
          }
          className="bg-blue-600 text-white p-5 m-2"
        >
          Create Lead
        </Button>

      </div>
      <div className="space-y-6">



        <LeadsTable
          leads={
            data?.leads || []
          }
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