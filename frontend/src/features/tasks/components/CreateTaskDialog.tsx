import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button, } from "@/components/ui/button";

import { createTask, } from "../tasks.api";

import { useUsers } from "@/features/users/useUsers";
interface Props {
  open: boolean;
  onClose: () => void;
}


export default function CreateTaskDialog({
  open,
  onClose,
}: Props) {

  const [formData, setFormData] =
    useState({
      title: "",
      description: "",
      priority: "MEDIUM",
      dueDate: "",
      assignedTo: "",
    });
  const { data: users } =
    useUsers();
  const handleSubmit =
    async (
      e: React.FormEvent
    ) => {
      e.preventDefault();

      try {
        await createTask(
          formData
        );

        alert(
          "Task Created Successfully"
        );

        window.location.reload();

      } catch (error) {
        console.error(error);

        alert(
          "Failed To Create Task"
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
            Create Task
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            className="w-full border rounded p-3"
            placeholder="Task Title"
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
            placeholder="Description"
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

          <select
            value={formData.assignedTo}
            onChange={(e) =>
              setFormData({
                ...formData,
                assignedTo:
                  e.target.value,
              })
            }
            className="w-full rounded border p-3"
          >
            <option value="">
              Select Assignee
            </option>

            {users?.map(
              (user: any) => (
                <option
                  key={user._id}
                  value={user._id}
                >
                  {user.firstName}{" "}
                  {user.lastName}
                </option>
              )
            )}
          </select>
          <Button
            type="submit"
            className="w-full"
          >
            Create Task
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}