import { useState }
from "react";

import {
  updateOrganization,
} from "../settings.api";

export default function OrganizationSettings({
  organization,
}: any) {

  const [formData, setFormData] =
    useState({
      name:
        organization?.name || "",
    });

  const handleSubmit =
  async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    await updateOrganization(
      formData
    );

    alert(
      "Organization Updated"
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
        Organization
      </h2>

      <input
        className="
          mb-4
          w-full
          border
          rounded
          p-3
        "
        value={
          formData.name
        }
        onChange={(e)=>
          setFormData({
            ...formData,
            name:
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
        Save Organization
      </button>
    </form>
  );
}