import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Button,
} from "@/components/ui/button";

import {
  createNote,
} from "../notes.api";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateNoteDialog({
  open,
  onClose,
}: Props) {

  const [formData, setFormData] =
    useState({
      title: "",
      content: "",
      entityType: "Lead",
      entityId: "",
    });

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {

      e.preventDefault();

      try {

        await createNote(
          formData
        );

        alert(
          "Note Created Successfully"
        );

        onClose();

        window.location.reload();

      } catch (error) {

        console.error(error);

        alert(
          "Failed To Create Note"
        );

      }

    };

  return (

    <Dialog
      open={open}
      onOpenChange={onClose}
    >

      <DialogContent className="sm:max-w-xl">

        <DialogHeader>

          <DialogTitle>

            Create Note

          </DialogTitle>

        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            className="w-full rounded border p-3"
            placeholder="Title"
            value={formData.title}
            onChange={(e)=>
              setFormData({
                ...formData,
                title:e.target.value,
              })
            }
          />

          <textarea
            rows={6}
            className="w-full rounded border p-3"
            placeholder="Write your note..."
            value={formData.content}
            onChange={(e)=>
              setFormData({
                ...formData,
                content:e.target.value,
              })
            }
          />

          <select
            className="w-full rounded border p-3"
            value={formData.entityType}
            onChange={(e)=>
              setFormData({
                ...formData,
                entityType:e.target.value,
              })
            }
          >

            <option value="Lead">
              Lead
            </option>

            <option value="Contact">
              Contact
            </option>

            <option value="Company">
              Company
            </option>

            <option value="Deal">
              Deal
            </option>

            <option value="Task">
              Task
            </option>

            <option value="Meeting">
              Meeting
            </option>

          </select>

          <input
            className="w-full rounded border p-3"
            placeholder="Entity ID"
            value={formData.entityId}
            onChange={(e)=>
              setFormData({
                ...formData,
                entityId:e.target.value,
              })
            }
          />

          <div className="flex justify-end gap-3">

            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              type="submit"
            >
              Create Note
            </Button>

          </div>

        </form>

      </DialogContent>

    </Dialog>

  );

}