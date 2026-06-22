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

import {
  Button,
} from "@/components/ui/button";

import {
  updateTask,
} from "../tasks.api";

interface Props {
  open: boolean;
  onClose: () => void;
  task: any;
}

export default function EditTaskDialog({
  open,
  onClose,
  task,
}: Props) {
  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      priority:
        "MEDIUM",
      dueDate: "",
    });

  useEffect(() => {
    if (task) {
      setFormData({
        title:
          task.title || "",

        description:
          task.description ||
          "",

        priority:
          task.priority ||
          "MEDIUM",

        dueDate:
          task.dueDate
            ?.split("T")[0] ||
          "",
      });
    }
  }, [task]);

  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await updateTask(
          task._id,
          formData
        );

        alert(
          "Task Updated Successfully"
        );

        window.location.reload();

      } catch (error) {
        console.error(error);

        alert(
          "Failed To Update Task"
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
            Edit Task
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
          />

          <textarea
            className="w-full border rounded p-3"
            value={
              formData.description
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                description:
                  e.target.value,
              })
            }
          />

          <select
            className="w-full border rounded p-3"
            value={
              formData.priority
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                priority:
                  e.target.value,
              })
            }
          >
            <option value="LOW">
              LOW
            </option>

            <option value="MEDIUM">
              MEDIUM
            </option>

            <option value="HIGH">
              HIGH
            </option>
          </select>

          <input
            type="date"
            className="w-full border rounded p-3"
            value={
              formData.dueDate
            }
            onChange={(e) =>
              setFormData({
                ...formData,
                dueDate:
                  e.target.value,
              })
            }
          />

          <Button
            type="submit"
            className="w-full"
          >
            Update Task
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}