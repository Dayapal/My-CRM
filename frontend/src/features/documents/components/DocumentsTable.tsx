import {
  Download,
  Eye,
  Trash2,
} from "lucide-react";

import {
  format,
} from "date-fns";

import {
  Button,
} from "@/components/ui/button";

import {
  Badge,
} from "@/components/ui/badge";

import {
  useState,
} from "react";

import DocumentActions
from "./DocumentActions";

interface Props {
  documents: any[];
}

export default function DocumentsTable({
  documents,
}: Props) {

  const [
    preview,
    setPreview,
  ] = useState<any>(null);

  return (

    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="min-w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-4 py-3 text-left">

              Document

            </th>

            <th className="px-4 py-3 text-left">

              Entity

            </th>

            <th className="px-4 py-3 text-left">

              Uploaded By

            </th>

            <th className="px-4 py-3 text-left">

              Size

            </th>

            <th className="px-4 py-3 text-left">

              Uploaded

            </th>

            <th className="px-4 py-3 text-center">

              Actions

            </th>

          </tr>

        </thead>

        <tbody>

          {documents.length === 0 && (

            <tr>

              <td
                colSpan={6}
                className="py-10 text-center"
              >

                No Documents Found

              </td>

            </tr>

          )}

          {documents.map(
            (
              document: any
            ) => (              <tr
                key={document._id}
                className="border-t"
              >

                <td className="px-4 py-4">

                  <div>

                    <p className="font-medium">

                      {document.title}

                    </p>

                    <p className="text-sm text-slate-500">

                      {
                        document.originalName
                      }

                    </p>

                  </div>

                </td>

                <td className="px-4 py-4">

                  <Badge>

                    {
                      document.entityType
                    }

                  </Badge>

                </td>

                <td className="px-4 py-4">

                  {
                    document.uploadedBy
                      ?.firstName
                  }{" "}

                  {
                    document.uploadedBy
                      ?.lastName
                  }

                </td>

                <td className="px-4 py-4">

                  {(
                    document.size /
                    1024
                  ).toFixed(1)}

                  KB

                </td>

                <td className="px-4 py-4">

                  {format(

                    new Date(
                      document.createdAt
                    ),

                    "dd MMM yyyy"

                  )}

                </td>

                <td className="px-4 py-4">

                  <div className="flex justify-center gap-2">

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        window.open(
                          document.fileUrl,
                          "_blank"
                        )
                      }
                    >

                      <Eye
                        className="h-4 w-4"
                      />

                    </Button>

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        window.open(
                          document.fileUrl,
                          "_blank"
                        )
                      }
                    >

                      <Download
                        className="h-4 w-4"
                      />

                    </Button>

                    <DocumentActions
                      document={
                        document
                      }
                    />

                  </div>

                </td>

              </tr>

            )

          )}

        </tbody>

      </table>

    </div>

  );

}