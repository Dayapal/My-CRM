import {
  format,
} from "date-fns";

import type {
  AuditLog,
} from "../audit.types";

interface Props {

  logs: AuditLog[];

}

export default function AuditTable({

  logs,

}: Props) {

  if (logs.length === 0) {

    return (

      <div className="rounded-lg border bg-white p-6 text-center text-gray-500">

        No Audit Logs Found

      </div>

    );

  }

  return (

    <div className="overflow-x-auto rounded-lg border bg-white shadow">

      <table className="min-w-full">

        <thead className="border-b bg-gray-50">

          <tr>

            <th className="px-4 py-3 text-left">
              User
            </th>

            <th className="px-4 py-3 text-left">
              Action
            </th>

            <th className="px-4 py-3 text-left">
              Module
            </th>

            <th className="px-4 py-3 text-left">
              Entity
            </th>

            <th className="px-4 py-3 text-left">
              Description
            </th>

            <th className="px-4 py-3 text-left">
              Date
            </th>

          </tr>

        </thead>

        <tbody>

          {logs.map((log) => (

            <tr
              key={log._id}
              className="border-b hover:bg-gray-50"
            >

              <td className="px-4 py-3">

                <div>

                  <p className="font-medium">

                    {log.user.firstName}{" "}
                    {log.user.lastName}

                  </p>

                  <p className="text-xs text-gray-500">

                    {log.user.email}

                  </p>

                </div>

              </td>

              <td className="px-4 py-3">

                <span className="rounded bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">

                  {log.action}

                </span>

              </td>

              <td className="px-4 py-3">

                {log.module}

              </td>

              <td className="px-4 py-3">

                {log.entityName}

              </td>

              <td className="px-4 py-3">

                {log.description}

              </td>

              <td className="px-4 py-3 text-sm text-gray-500">

                {format(
                  new Date(log.createdAt),
                  "dd MMM yyyy, hh:mm a"
                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}