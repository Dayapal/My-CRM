import {
  Pencil,
  Trash2,
} from "lucide-react";

import {
  Button,
} from "@/components/ui/button";

import {
  deleteTask,
} from "../tasks.api";

import { useState } from "react";

import EditTaskDialog
from "./EditTaskDialog";

interface Props {
  task: any;
}

export default function TaskActions({
  task,
}: Props) {
  const [open, setOpen] =
    useState(false);

  const handleDelete =
    async () => {
      const confirmed =
        window.confirm(
          "Delete Task?"
        );

      if (!confirmed) return;

      try {
        await deleteTask(
          task._id
        );

        alert(
          "Task Deleted"
        );

        window.location.reload();

      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <div className="flex gap-2">

        <Button
          size="sm"
          variant="outline"
          onClick={() =>
            setOpen(true)
          }
        >
          <Pencil className="h-4 w-4 mr-2" />
          Edit
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={
            handleDelete
          }
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>

      </div>

      <EditTaskDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        task={task}
      />
    </>
  );
}