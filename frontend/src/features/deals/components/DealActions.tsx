import { useState } from "react";

import {
  Trash2,
  Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  deleteDeal,
  updateDealStage,
} from "../deals.api";

import EditDealDialog from "./EditDealDialog";

export default function DealActions({
  deal,
}: any) {
  const [open, setOpen] =
    useState(false);

  const moveDeal =
    async (
      stage: string
    ) => {
      try {
        await updateDealStage(
          deal._id,
          stage
        );

        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };

  const removeDeal =
    async () => {
      const confirmed =
        window.confirm(
          "Delete this deal?"
        );

      if (!confirmed) return;

      try {
        await deleteDeal(
          deal._id
        );

        alert(
          "Deal Deleted"
        );

        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <div className="space-y-2">

        <select
          className="
            w-full
            rounded-lg
            border
            p-2
            text-sm
          "
          defaultValue=""
          onChange={(e) =>
            moveDeal(
              e.target.value
            )
          }
        >
          <option value="">
            Move Stage
          </option>

          <option value="LEAD">
            LEAD
          </option>

          <option value="QUALIFIED">
            QUALIFIED
          </option>

          <option value="PROPOSAL">
            PROPOSAL
          </option>

          <option value="NEGOTIATION">
            NEGOTIATION
          </option>

          <option value="WON">
            WON
          </option>

          <option value="LOST">
            LOST
          </option>
        </select>

        <div className="flex gap-2">

          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            onClick={() =>
              setOpen(true)
            }
          >
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </Button>

          <Button
            size="sm"
            variant="destructive"
            className="flex-1"
            onClick={
              removeDeal
            }
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>

        </div>
      </div>

      <EditDealDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        deal={deal}
      />
    </>
  );
}