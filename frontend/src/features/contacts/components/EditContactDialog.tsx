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

import { updateContact } from "../contacts.api";

interface Props {
  open: boolean;
  onClose: () => void;
  contact: any;
}

export default function EditContactDialog({
  open,
  onClose,
  contact,
}: Props) {
  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });

  useEffect(() => {
    if (contact) {
      setFormData({
        firstName:
          contact.firstName || "",
        lastName:
          contact.lastName || "",
        email:
          contact.email || "",
        phone:
          contact.phone || "",
      });
    }
  }, [contact]);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await updateContact(
        contact._id,
        formData
      );

      alert(
        "Contact Updated Successfully"
      );

      onClose();

      window.location.reload();
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data
          ?.message ||
          "Failed To Update Contact"
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
            Edit Contact
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            className="w-full rounded-md border p-3"
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
            placeholder="First Name"
          />

          <input
            className="w-full rounded-md border p-3"
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
            placeholder="Last Name"
          />

          <input
            type="email"
            className="w-full rounded-md border p-3"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
            placeholder="Email"
          />

          <input
            className="w-full rounded-md border p-3"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone:
                  e.target.value,
              })
            }
            placeholder="Phone"
          />

          <Button
            type="submit"
            className="w-full"
          >
            Update Contact
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}