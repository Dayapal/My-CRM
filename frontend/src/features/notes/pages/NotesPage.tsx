import { useState } from "react";

import DashboardLayout from "@/layouts/DashboardLayout";

import { Button } from "@/components/ui/button";

import NotesTable from "../components/NotesTable";
import CreateNoteDialog from "../components/CreateNoteDialog";

import { useNotes } from "../useNotes";

export default function NotesPage() {
  const [open, setOpen] =
    useState(false);

  const {
    data: notes = [],
    isLoading,
    isError,
  } = useNotes();

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center">
          Loading Notes...
        </div>
      </DashboardLayout>
    );
  }

  if (isError) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center text-red-500">
          Failed To Load Notes
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <h1 className="text-3xl font-bold">
              Notes
            </h1>

            <p className="text-slate-500">
              Manage notes for Leads,
              Contacts, Companies,
              Deals, Tasks &
              Meetings.
            </p>

          </div>

          <Button
            onClick={() =>
              setOpen(true)
            }
          >
            + Create Note
          </Button>

        </div>

        <NotesTable
          notes={notes}
        />

        <CreateNoteDialog
          open={open}
          onClose={() =>
            setOpen(false)
          }
        />

      </div>
    </DashboardLayout>
  );
}