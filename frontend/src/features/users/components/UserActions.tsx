import { Button } from "@/components/ui/button";

import {
  deleteUser,
} from "../users.api";

export default function UserActions({
  user,
}: any) {
  const handleDelete =
    async () => {
      const confirmed =
        window.confirm(
          "Delete User?"
        );

      if (!confirmed) return;

      await deleteUser(
        user._id
      );

      window.location.reload();
    };

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
      >
        Edit
      </Button>

      <Button
        variant="destructive"
        onClick={
          handleDelete
        }
      >
        Delete
      </Button>
    </div>
  );
}