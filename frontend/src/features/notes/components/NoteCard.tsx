import {
  FileText,
} from "lucide-react";

import {
  format,
} from "date-fns";

import NoteActions
from "./NoteActions";

interface Props {
  note: any;
}

export default function NoteCard({
  note,
}: Props) {

  return (

    <div
      className="
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
      "
    >

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              rounded-full
              bg-blue-100
              p-2
            "
          >

            <FileText
              className="h-5 w-5 text-blue-600"
            />

          </div>

          <div>

            <h3 className="font-semibold">

              {note.title}

            </h3>

            <p className="text-xs text-slate-500">

              {note.entityType}

            </p>

          </div>

        </div>

        <NoteActions
          note={note}
        />

      </div>

      <p
        className="
          mt-4
          whitespace-pre-wrap
          text-sm
          text-slate-700
        "
      >

        {note.content}

      </p>

      <div
        className="
          mt-5
          flex
          items-center
          justify-between
          text-xs
          text-slate-500
        "
      >

        <span>

          {note.createdBy
            ?.firstName}{" "}
          {
            note.createdBy
              ?.lastName
          }

        </span>

        <span>

          {format(
            new Date(
              note.createdAt
            ),
            "dd MMM yyyy"
          )}

        </span>

      </div>

    </div>

  );

}