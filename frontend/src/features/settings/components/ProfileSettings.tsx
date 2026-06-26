import { useState }
from "react";

import {
  updateProfile,
} from "../settings.api";

export default function ProfileSettings({
  user,
}: any) {

  const [formData, setFormData] =
    useState({
      firstName:
        user.firstName || "",

      lastName:
        user.lastName || "",

      email:
        user.email || "",
    });

  const handleSubmit =
  async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    await updateProfile(
      formData
    );

    alert(
      "Profile Updated"
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        rounded-xl
        border
        bg-white
        p-6
      "
    >
      <h2 className="mb-4 text-lg font-semibold">
        Profile
      </h2>

      <div className="space-y-3">

        <input
          className="w-full border rounded p-3"
          value={
            formData.firstName
          }
          onChange={(e)=>
            setFormData({
              ...formData,
              firstName:
              e.target.value
            })
          }
        />

        <input
          className="w-full border rounded p-3"
          value={
            formData.lastName
          }
          onChange={(e)=>
            setFormData({
              ...formData,
              lastName:
              e.target.value
            })
          }
        />

        <input
          className="w-full border rounded p-3"
          value={
            formData.email
          }
          onChange={(e)=>
            setFormData({
              ...formData,
              email:
              e.target.value
            })
          }
        />

        <button
          className="
            rounded-lg
            bg-blue-600
            px-4
            py-2
            text-white
          "
        >
          Save Profile
        </button>

      </div>
    </form>
  );
}