import DashboardLayout
from "@/layouts/DashboardLayout";

import { Button }
from "@/components/ui/button";

import { useState }
from "react";

import {
  useCompanies,
} from "../useCompanies";

import CompaniesTable
from "../components/CompaniesTable";

import CreateCompanyDialog
from "../components/CreateCompanyDialog";

export default function CompaniesPage() {

  const [open, setOpen] =
    useState(false);

  const {
    data,
    isLoading,
  } = useCompanies();

  if (isLoading) {
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div
        className="
          flex
          items-center
          justify-between
          mb-6
        "
      >
        <div>
          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Companies
          </h1>

          <p className="text-slate-500">
            Manage all companies
          </p>
        </div>

        <Button
          onClick={() =>
            setOpen(true)
          }
        >
          Create Company
        </Button>
      </div>

      <CompaniesTable
        companies={
          data?.companies || []
        }
      />

      <CreateCompanyDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />

    </DashboardLayout>
  );
}