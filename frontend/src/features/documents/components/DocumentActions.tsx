import {
  MoreHorizontal,
  Eye,
  Download,
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

import {
  deleteDocument,
} from "../documents.api";

interface Props {
  document: any;
}

export default function DocumentActions({
  document,
}: Props) {

  const handleDelete =
    async () => {

      const confirmed =
        window.confirm(
          "Delete this document?"
        );

      if (!confirmed) return;

      try {

        await deleteDocument(
          document._id
        );

        alert(
          "Document Deleted Successfully"
        );

        window.location.reload();

      } catch (error) {

        console.error(error);

        alert(
          "Failed To Delete Document"
        );

      }

    };

  return (

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
            window.open(
              document.fileUrl,
              "_blank"
            )
          }
        >

          <Eye
            className="mr-2 h-4 w-4"
          />

          Preview

        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() =>
            window.open(
              document.fileUrl,
              "_blank"
            )
          }
        >

          <Download
            className="mr-2 h-4 w-4"
          />

          Download

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

  );

}