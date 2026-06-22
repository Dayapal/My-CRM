import DashboardLayout
from "@/layouts/DashboardLayout";

import { useState }
from "react";

import { Button }
from "@/components/ui/button";

import { useContacts }
from "../useContacts";

import ContactsTable
from "../components/ContactsTable";

import CreateContactDialog
from "../components/CreateContactDialog";

export default function ContactsPage() {

  const [open, setOpen] =
    useState(false);

  const {
    data,
    isLoading,
  } = useContacts();

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
        justify-between
        items-center
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
            Contacts
          </h1>

          <p
            className="
            text-slate-500
          "
          >
            Manage customer contacts
          </p>

        </div>

        <Button
          onClick={() =>
            setOpen(true)
          }
        >
          Create Contact
        </Button>

      </div>

      <ContactsTable
        contacts={
          data?.contacts || []
        }
      />

      <CreateContactDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />

    </DashboardLayout>
  );
}