import { useState } from "react";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import { Button }
from "@/components/ui/button";

import {
  deleteCompany,
} from "../companies.api";

import EditCompanyDialog
from "./EditCompanyDialog";

interface Props {
  company: any;
}

export default function CompanyActions({
  company,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const handleDelete =
    async () => {

      const confirmed =
        window.confirm(
          `Delete ${company.name}?`
        );

      if (!confirmed)
        return;

      try {

        await deleteCompany(
          company._id
        );

        alert(
          "Company Deleted"
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
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </Button>

        <Button
          size="sm"
          variant="outline"
          onClick={
            handleDelete
          }
          className="
            border-red-200
            text-red-600
            hover:bg-red-50
          "
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </Button>

      </div>

      <EditCompanyDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        company={company}
      />
    </>
  );
}