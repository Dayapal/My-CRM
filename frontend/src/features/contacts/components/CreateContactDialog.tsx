import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { createContact } from "../contacts.api";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateContactDialog({
  open,
  onClose,
}: Props) {
  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await createContact(formData);

      alert(
        "Contact Created Successfully"
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });

      onClose();

      window.location.reload();
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data
          ?.message ||
          "Failed To Create Contact"
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
            Create Contact
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            className="w-full rounded-md border p-3"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName:
                  e.target.value,
              })
            }
          />

          <input
            className="w-full rounded-md border p-3"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName:
                  e.target.value,
              })
            }
          />

          <input
            type="email"
            className="w-full rounded-md border p-3"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
          />

          <input
            className="w-full rounded-md border p-3"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone:
                  e.target.value,
              })
            }
          />

          <Button
            type="submit"
            className="w-full"
          >
            Create Contact
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}