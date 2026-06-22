import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { createDeal } from "../deals.api";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateDealDialog({
  open,
  onClose,
}: Props) {
  const [formData, setFormData] =
    useState({
      title: "",
      value: "",
      company: "",
      contact: "",
      expectedCloseDate: "",
    });

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await createDeal({
          ...formData,
          value:
            Number(
              formData.value
            ),
        });

        alert(
          "Deal Created Successfully"
        );

        window.location.reload();
      } catch (error: any) {
        console.error(error);

        alert(
          error?.response?.data
            ?.message ||
            "Failed To Create Deal"
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
            Create Deal
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            className="w-full border rounded p-3"
            placeholder="Deal Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title:
                  e.target.value,
              })
            }
          />

          <input
            type="number"
            className="w-full border rounded p-3"
            placeholder="Deal Value"
            value={formData.value}
            onChange={(e) =>
              setFormData({
                ...formData,
                value:
                  e.target.value,
              })
            }
          />

          <input
            className="w-full border rounded p-3"
            placeholder="Company ID"
            value={
              formData.company
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                company:
                  e.target.value,
              })
            }
          />

          <input
            className="w-full border rounded p-3"
            placeholder="Contact ID"
            value={
              formData.contact
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                contact:
                  e.target.value,
              })
            }
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
            Create Deal
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}