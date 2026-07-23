import { useState } from "react";

export default function AuditFilters() {

  const [search, setSearch] =
    useState("");

  const [action, setAction] =
    useState("");

  const [module, setModule] =
    useState("");

  return (

    <div className="grid gap-4 rounded-lg border bg-white p-4 shadow md:grid-cols-3">

      {/* Search */}

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Action */}

      <select
        value={action}
        onChange={(e) =>
          setAction(e.target.value)
        }
        className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">
          All Actions
        </option>

        <option value="CREATE">
          CREATE
        </option>

        <option value="UPDATE">
          UPDATE
        </option>

        <option value="DELETE">
          DELETE
        </option>

        <option value="LOGIN">
          LOGIN
        </option>

        <option value="LOGOUT">
          LOGOUT
        </option>

      </select>

      {/* Module */}

      <select
        value={module}
        onChange={(e) =>
          setModule(e.target.value)
        }
        className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">
          All Modules
        </option>

        <option value="Lead">
          Lead
        </option>

        <option value="Contact">
          Contact
        </option>

        <option value="Company">
          Company
        </option>

        <option value="Deal">
          Deal</option>
        <option value="Task">
          Task
        </option>
        <option value="Meeting">
          Meeting
        </option>
        <option value="Note">
          Note
        </option>
        <option value="Document">
          Document
        </option>
      </select>

    </div>

  );

}