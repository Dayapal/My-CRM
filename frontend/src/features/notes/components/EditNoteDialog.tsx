import { useEffect, useState } from "react";

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
  updateNote,
} from "../notes.api";

interface Props {
  open: boolean;
  onClose: () => void;
  note: any;
}

export default function EditNoteDialog({
  open,
  onClose,
  note,
}: Props) {
  const [formData, setFormData] =
    useState({
      title: "",
      content: "",
    });

  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title || "",
        content:
          note.content || "",
      });
    }
  }, [note]);

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await updateNote(
          note._id,
          formData
        );

        alert(
          "Note Updated Successfully"
        );

        onClose();

        window.location.reload();
      } catch (error) {
        console.error(error);

        alert(
          "Failed To Update Note"
        );
      }
    };

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="sm:max-w-lg">

        <DialogHeader>

          <DialogTitle>
            Edit Note
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
            onChange={(e) =>
              setFormData({
                ...formData,
                title:
                  e.target.value,
              })
            }
          />

          <textarea
            rows={8}
            className="w-full rounded border p-3"
            placeholder="Write your note..."
            value={
              formData.content
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                content:
                  e.target.value,
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
              Update Note
            </Button>

          </div>

        </form>

      </DialogContent>
    </Dialog>
  );
}