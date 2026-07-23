import {
  format,
} from "date-fns";

import type {
  AuditLog,
} from "../audit.types";

interface Props {
  log: AuditLog;
}

export default function AuditCard({
  log,
}: Props) {

  return (

    <div className="rounded-xl border bg-white p-5 shadow">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="font-semibold">

            {log.user.firstName}{" "}
            {log.user.lastName}

          </h3>

          <p className="text-sm text-gray-500">

            {log.user.email}

          </p>

        </div>

        <span className="rounded bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">

          {log.action}

        </span>

      </div>

      <div className="mt-4 space-y-2">

        <p>

          <span className="font-medium">

            Module:

          </span>{" "}

          {log.module}

        </p>

        <p>

          <span className="font-medium">

            Entity:

          </span>{" "}

          {log.entityName}

        </p>

        <p>

          <span className="font-medium">

            Description:

          </span>{" "}

          {log.description}

        </p>

      </div>

      <div className="mt-4 border-t pt-3 text-sm text-gray-500">

        {format(

          new Date(log.createdAt),

          "dd MMM yyyy, hh:mm a"

        )}

      </div>

    </div>

  );

}