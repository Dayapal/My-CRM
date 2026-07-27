import {
  format,
} from "date-fns";

import type {
  Workflow,
} from "../workflow.types";


import EditWorkflowDialog from "./EditWorkflowDialog";

interface Props {

  workflows: Workflow[];

}

export default function WorkflowTable({

  workflows,

}: Props) {

  if (workflows.length === 0) {

    return (

      <div className="rounded-lg border bg-white p-8 text-center">

        <h2 className="text-lg font-semibold">

          No Workflows Found

        </h2>

        <p className="mt-2 text-gray-500">

          Create your first workflow to automate CRM tasks.

        </p>

      </div>

    );

  }

  return (

    <div className="overflow-x-auto rounded-lg border bg-white shadow">

      <table className="min-w-full">

        <thead className="border-b bg-gray-50">

          <tr>

            <th className="px-4 py-3 text-left">

              Workflow

            </th>

            <th className="px-4 py-3 text-left">

              Trigger

            </th>

            <th className="px-4 py-3 text-left">

              Conditions

            </th>

            <th className="px-4 py-3 text-left">

              Actions

            </th>

            <th className="px-4 py-3 text-left">

              Status

            </th>

            <th className="px-4 py-3 text-left">

              Created By

            </th>

            <th className="px-4 py-3 text-left">

              Created

            </th>

            <th className="px-4 py-3 text-center">

              Manage

            </th>

          </tr>

        </thead>

        <tbody>

          {workflows.map((workflow) => (

            <tr

              key={workflow._id}

              className="border-b hover:bg-gray-50"

            >

              <td className="px-4 py-3 font-medium">

                {workflow.name}

              </td>

              <td className="px-4 py-3">

                {workflow.trigger}

              </td>

              <td className="px-4 py-3">

                {workflow.conditions.length}

              </td>

              <td className="px-4 py-3">

                {workflow.actions.length}

              </td>

              <td className="px-4 py-3">

                <span

                  className={`rounded px-2 py-1 text-xs font-semibold ${
                    workflow.isActive

                      ? "bg-green-100 text-green-700"

                      : "bg-red-100 text-red-700"

                  }`}

                >

                  {workflow.isActive

                    ? "Active"

                    : "Inactive"}

                </span>

              </td>

              <td className="px-4 py-3">

                {workflow.createdBy.firstName}{" "}

                {workflow.createdBy.lastName}

              </td>

              <td className="px-4 py-3 text-sm text-gray-500">

                {format(

                  new Date(workflow.createdAt),

                  "dd MMM yyyy"

                )}

              </td>

              <td className="px-4 py-3 text-center">

                <EditWorkflowDialog

                  workflow={workflow}

                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}