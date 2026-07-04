import { useState } from "react";

import {
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  Button,
} from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import EditNoteDialog
from "./EditNoteDialog";

import {
  deleteNote,
} from "../notes.api";

interface Props {
  note: any;
}

export default function NoteActions({
  note,
}: Props) {

  const [
    open,
    setOpen,
  ] = useState(false);

  const handleDelete =
    async () => {

      const confirmed =
        window.confirm(
          "Are you sure you want to delete this note?"
        );

      if (!confirmed) {
        return;
      }

      try {

        await deleteNote(
          note._id
        );

        alert(
          "Note Deleted Successfully"
        );

        window.location.reload();

      } catch (error) {

        console.error(error);

        alert(
          "Failed To Delete Note"
        );

      }

    };

  return (
    <>

      <DropdownMenu>

        <DropdownMenuTrigger
          asChild
        >

          <Button
            variant="ghost"
            size="icon"
          >

            <MoreHorizontal
              className="h-5 w-5"
            />

          </Button>

        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
        >

          <DropdownMenuItem
            onClick={() =>
              setOpen(true)
            }
          >

            <Pencil
              className="mr-2 h-4 w-4"
            />

            Edit

          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={
              handleDelete
            }
            className="text-red-600"
          >

            <Trash2
              className="mr-2 h-4 w-4"
            />

            Delete

          </DropdownMenuItem>

        </DropdownMenuContent>

      </DropdownMenu>

      <EditNoteDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
        note={note}
      />

    </>
  );

}