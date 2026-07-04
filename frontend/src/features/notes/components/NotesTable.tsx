import {
    Pencil,
    Trash2,
} from "lucide-react";

import {
    Button,
} from "@/components/ui/button";

import {
    Badge,
} from "@/components/ui/badge";

import {
    format,
} from "date-fns";

import {
    useState,
} from "react";

import EditNoteDialog
    from "./EditNoteDialog";

import {
    deleteNote,
} from "../notes.api";
import NoteActions
    from "./NoteActions";

interface Props {
    notes: any[];
}

export default function NotesTable({
    notes,
}: Props) {

    const [
        selectedNote,
        setSelectedNote,
    ] = useState<any>(null);

    const [
        open,
        setOpen,
    ] = useState(false);

    const removeNote =
        async (
            id: string
        ) => {

            if (
                !window.confirm(
                    "Delete this note?"
                )
            ) {
                return;
            }

            try {

                await deleteNote(id);

                window.location.reload();

            } catch {

                alert(
                    "Failed To Delete Note"
                );

            }

        };

    return (

        <div className="overflow-x-auto rounded-xl border bg-white">

            <table className="min-w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="px-4 py-3 text-left">
                            Title
                        </th>

                        <th className="px-4 py-3 text-left">
                            Entity
                        </th>

                        <th className="px-4 py-3 text-left">
                            Author
                        </th>

                        <th className="px-4 py-3 text-left">
                            Created
                        </th>

                        <th className="px-4 py-3 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {notes.length === 0 && (

                        <tr>

                            <td
                                colSpan={5}
                                className="py-10 text-center"
                            >

                                No Notes Found

                            </td>

                        </tr>

                    )}

                    {notes.map(
                        (note: any) => (
                            <tr
                                key={note._id}
                                className="border-t"
                            >
                                <td className="px-4 py-4">
                                    <div>
                                        <p className="font-medium">
                                            {note.title}
                                        </p>

                                        <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                                            {note.content}
                                        </p>
                                    </div>
                                </td>

                                <td className="px-4 py-4">
                                    <Badge>
                                        {note.entityType}
                                    </Badge>
                                </td>

                                <td className="px-4 py-4">
                                    {note.createdBy
                                        ?.firstName}{" "}
                                    {
                                        note.createdBy
                                            ?.lastName
                                    }
                                </td>

                                <td className="px-4 py-4">
                                    {format(
                                        new Date(
                                            note.createdAt
                                        ),
                                        "dd MMM yyyy"
                                    )}
                                </td>

                                <td className="px-4 py-4">

                                    <div className="flex items-center justify-center gap-2">

                                        <Button
                                            size="icon"
                                            variant="outline"
                                            onClick={() => {
                                                setSelectedNote(
                                                    note
                                                );

                                                setOpen(
                                                    true
                                                );
                                            }}
                                        >
                                            <Pencil
                                                className="h-4 w-4"
                                            />
                                        </Button>

                                        <Button
                                            size="icon"
                                            variant="destructive"
                                            onClick={() =>
                                                removeNote(
                                                    note._id
                                                )
                                            }
                                        >
                                            <Trash2
                                                className="h-4 w-4"
                                            />
                                        </Button>

                                        <NoteActions
                                            note={note}
                                        />

                                    </div>

                                </td>

                            </tr>

                        )
                    )}

                </tbody>

            </table>

            {selectedNote && (

                <EditNoteDialog
                    open={open}
                    onClose={() =>
                        setOpen(false)
                    }
                    note={selectedNote}
                />

            )}

        </div>

    );

}