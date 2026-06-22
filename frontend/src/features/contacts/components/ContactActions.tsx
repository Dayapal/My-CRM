import { Button }
from "@/components/ui/button";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import { useState } from "react";

import EditContactDialog
from "./EditContactDialog";

import {
  deleteContact,
} from "../contacts.api";

interface Props {
  contact: any;
}

export default function ContactActions({
  contact,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const handleDelete =
    async () => {
      const confirmed =
        window.confirm(
          `Delete ${contact.firstName}?`
        );

      if (!confirmed) return;

      try {
        await deleteContact(
          contact._id
        );

        alert(
          "Contact Deleted"
        );

        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <div className="flex gap-2">

        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            setOpen(true)
          }
        >
          <Pencil className="h-4 w-4 mr-2" />
          Edit
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={
            handleDelete
          }
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>

      </div>

      <EditContactDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        contact={contact}
      />
    </>
  );
}