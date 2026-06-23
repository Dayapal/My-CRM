import DashboardLayout from "@/layouts/DashboardLayout";

import { Button } from "@/components/ui/button";

import { useState } from "react";

import UsersTable from "../components/UsersTable";
import CreateUserDialog from "../components/CreateUserDialog";

import { useUsers } from "../useUsers";

export default function UsersPage() {
  const [open, setOpen] =
    useState(false);

  const {
    data,
    isLoading,
  } = useUsers();

  if (isLoading) {
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Team Members
            </h1>

            <p className="text-slate-500">
              Manage CRM users
            </p>
          </div>

          <Button
            onClick={() =>
              setOpen(true)
            }
          >
            Create User
          </Button>
        </div>

        <UsersTable
          users={data || []}
        />

        <CreateUserDialog
          open={open}
          onClose={() =>
            setOpen(false)
          }
        />
      </div>
    </DashboardLayout>
  );
}