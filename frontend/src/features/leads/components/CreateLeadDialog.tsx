import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button }
  from "@/components/ui/button";

import { createLead }
  from "../leads.api";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateLeadDialog({
  open,
  onClose,
}: Props) {

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      source: "WEBSITE",
    });

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {

        await createLead(
          formData
        );

        alert(
          "Lead Created"
        );
        window.location.reload();
        onClose();

      } catch (error) {
        console.error(error);
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
            Create Lead
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            placeholder="First Name"
            className="w-full border p-3"
            value={
              formData.firstName
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="Last Name"
            className="w-full border p-3"
            value={
              formData.lastName
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="Email"
            className="w-full border p-3"
            value={
              formData.email
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="Phone"
            className="w-full border p-3"
            value={
              formData.phone
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                phone:
                  e.target.value,
              })
            }
          />

          <input
            placeholder="Company"
            className="w-full border p-3"
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

          <Button
            type="submit"
            className="w-full bg-green-600"
          >

            Create Lead
          </Button>

        </form>

      </DialogContent>
    </Dialog>
  );
}