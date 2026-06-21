import { Button }
from "@/components/ui/button";

import {
  deleteLead,
  convertLead,
} from "../leads.api";

interface Props {
  leadId: string;
}

export default function LeadActions({
  leadId,
}: Props) {

  const handleConvert =
    async () => {
      try {
        await convertLead(
          leadId
        );

        alert(
          "Lead Converted"
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
          "Delete this lead?"
        );

      if (!confirmed) return;

      try {

        await deleteLead(
          leadId
        );

        alert(
          "Lead Deleted"
        );

        window.location.reload();

      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="flex gap-2">

      <Button
        size="sm"
        onClick={
          handleConvert
        }
      >
        Convert
      </Button>

      <Button
        size="sm"
        variant="destructive"
        onClick={
          handleDelete
        }
      >
        Delete
      </Button>

    </div>
  );
}