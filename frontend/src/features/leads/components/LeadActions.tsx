import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Pencil,
  Trash2,
} from "lucide-react";
import { useState } from "react";

import EditLeadDialog from "./EditLeadDialog";

import {
  deleteLead,
  convertLead,
} from "../leads.api";

interface Props {
  lead: any;
}

export default function LeadActions({
  lead,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const handleConvert =
    async () => {
      try {
        await convertLead(
          lead._id
        );

        alert(
          "Lead Converted Successfully"
        );

        window.location.reload();

      } catch (error) {
        console.error(error);
      }
    };

  const handleDelete =
    async () => {
      const confirmed =
        window.confirm(
          `Delete ${lead.firstName} ${lead.lastName}?`
        );

      if (!confirmed) return;

      try {
        await deleteLead(
          lead._id
        );

        alert(
          "Lead Deleted Successfully"
        );

        window.location.reload();

      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <div className="flex items-center gap-2">

        {!lead.convertedAt && (
          <Button
            size="sm"
            variant="outline"
            onClick={handleConvert}
            className="
      border-emerald-200
      bg-emerald-50
      text-emerald-700
      hover:bg-emerald-100
      hover:border-emerald-300
      hover:shadow-sm
      transition-all
    "
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Convert
          </Button>
        )}

        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            setOpen(true)
          }
          className="
            border-slate-200
            hover:bg-slate-100
            hover:border-slate-300
            hover:shadow-sm
            transition-all
          "
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
          className="
            border-red-200
            bg-red-50
            text-red-600
            hover:bg-red-100
            hover:border-red-300
            hover:shadow-sm
            transition-all
          "
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>

      </div>

      <EditLeadDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        lead={lead}
      />
    </>
  );
}