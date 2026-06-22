import {
  useEffect,
  useState,
} from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { updateDeal } from "../deals.api";

interface Props {
  open: boolean;
  onClose: () => void;
  deal: any;
}

export default function EditDealDialog({
  open,
  onClose,
  deal,
}: Props) {
  const [formData, setFormData] =
    useState({
      title: "",
      value: "",
      expectedCloseDate: "",
    });

  useEffect(() => {
    if (deal) {
      setFormData({
        title:
          deal.title || "",
        value:
          String(
            deal.value
          ) || "",
        expectedCloseDate:
          deal.expectedCloseDate
            ?.split("T")[0] ||
          "",
      });
    }
  }, [deal]);

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await updateDeal(
          deal._id,
          {
            ...formData,
            value:
              Number(
                formData.value
              ),
          }
        );

        alert(
          "Deal Updated Successfully"
        );

        window.location.reload();
      } catch (error: any) {
        console.error(error);

        alert(
          error?.response?.data
            ?.message ||
            "Failed To Update Deal"
        );
      }
    };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Edit Deal
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            className="w-full border rounded p-3"
            value={
              formData.title
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                title:
                  e.target.value,
              })
            }
            placeholder="Title"
          />

          <input
            type="number"
            className="w-full border rounded p-3"
            value={
              formData.value
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                value:
                  e.target.value,
              })
            }
            placeholder="Value"
          />

          <input
            type="date"
            className="w-full border rounded p-3"
            value={
              formData.expectedCloseDate
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                expectedCloseDate:
                  e.target.value,
              })
            }
          />

          <Button
            type="submit"
            className="w-full"
          >
            Update Deal
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}