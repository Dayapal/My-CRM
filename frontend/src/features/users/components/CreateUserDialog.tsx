import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { createUser } from "../users.api";

export default function CreateUserDialog({
  open,
  onClose,
}: any) {
  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "SALES",
    });

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      await createUser(
        formData
      );

      window.location.reload();
    };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create User
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            className="w-full border p-3"
            placeholder="First Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                firstName:
                  e.target.value,
              })
            }
          />

          <input
            className="w-full border p-3"
            placeholder="Last Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                lastName:
                  e.target.value,
              })
            }
          />

          <input
            className="w-full border p-3"
            placeholder="Email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email:
                  e.target.value,
              })
            }
          />

          <input
            type="password"
            className="w-full border p-3"
            placeholder="Password"
            onChange={(e) =>
              setFormData({
                ...formData,
                password:
                  e.target.value,
              })
            }
          />

          <select
            className="w-full border p-3"
            onChange={(e) =>
              setFormData({
                ...formData,
                role:
                  e.target.value,
              })
            }
          >
            <option value="SALES">
              SALES
            </option>

            <option value="ADMIN">
              ADMIN
            </option>

            <option value="VIEWER">
              VIEWER
            </option>
          </select>

          <Button
            className="w-full"
            type="submit"
          >
            Create User
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}