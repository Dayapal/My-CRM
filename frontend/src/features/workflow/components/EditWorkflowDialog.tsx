import {
  useEffect,
  useState,
} from "react";

import type {
  Workflow,
} from "../workflow.types";

import {
  useUpdateWorkflow,
} from "../useWorkflow";

interface Props {
  workflow: Workflow;
}

const TRIGGERS = [
  "Lead Created",
  "Lead Updated",
  "Lead Qualified",
  "Deal Created",
  "Deal Won",
  "Task Completed",
  "Meeting Scheduled",
];

const ACTIONS = [
  "Assign Owner",
  "Create Task",
  "Send Email",
  "Send Notification",
  "Create Audit Log",
];

export default function EditWorkflowDialog({
  workflow,
}: Props) {

  const updateWorkflow =
    useUpdateWorkflow();

  const [open, setOpen] =
    useState(false);

  const [name, setName] =
    useState(workflow.name);

  const [trigger, setTrigger] =
    useState(workflow.trigger);

  const [conditions, setConditions] =
    useState<string[]>(
      workflow.conditions
    );

  const [actions, setActions] =
    useState<string[]>(
      workflow.actions
    );

  const [isActive, setIsActive] =
    useState(
      workflow.isActive
    );

  useEffect(() => {

    setName(workflow.name);

    setTrigger(workflow.trigger);

    setConditions(
      workflow.conditions
    );

    setActions(
      workflow.actions
    );

    setIsActive(
      workflow.isActive
    );

  }, [workflow]);

  function toggleCondition(
    value: string
  ) {

    if (
      conditions.includes(value)
    ) {

      setConditions(

        conditions.filter(
          (item) =>
            item !== value
        )

      );

      return;

    }

    setConditions([
      ...conditions,
      value,
    ]);

  }

  function toggleAction(
    value: string
  ) {

    if (
      actions.includes(value)
    ) {

      setActions(

        actions.filter(
          (item) =>
            item !== value
        )

      );

      return;

    }

    setActions([
      ...actions,
      value,
    ]);

  }

  async function handleSubmit() {

    await updateWorkflow.mutateAsync({

      id: workflow._id,

      payload: {

        name,

        trigger,

        conditions,

        actions,

        isActive,

      },

    });

    setOpen(false);

  }

  if (!open) {

    return (

      <button
        onClick={() =>
          setOpen(true)
        }
        className="rounded border px-3 py-1 text-sm hover:bg-gray-100"
      >
        Edit
      </button>

    );

  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-xl rounded-xl bg-white p-6">

        <h2 className="mb-6 text-xl font-semibold">

          Edit Workflow

        </h2>

        <div className="space-y-5">

          <input
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            placeholder="Workflow Name"
            className="w-full rounded border p-3"
          />

          <select
            value={trigger}
            onChange={(e) =>
              setTrigger(
                e.target.value
              )
            }
            className="w-full rounded border p-3"
          >

            {TRIGGERS.map(
              (item) => (

                <option
                  key={item}
                >
                  {item}
                </option>

              )
            )}

          </select>

          <div>

            <h3 className="mb-2 font-medium">

              Conditions

            </h3>

            <div className="grid gap-2">

              {TRIGGERS.map(
                (item) => (

                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >

                    <input
                      type="checkbox"
                      checked={conditions.includes(item)}
                      onChange={() =>
                        toggleCondition(item)
                      }
                    />

                    {item}

                  </label>

                )
              )}

            </div>

          </div>

          <div>

            <h3 className="mb-2 font-medium">

              Actions

            </h3>

            <div className="grid gap-2">

              {ACTIONS.map(
                (item) => (

                  <label
                    key={item}
                    className="flex items-center gap-2"
                  >

                    <input
                      type="checkbox"
                      checked={actions.includes(item)}
                      onChange={() =>
                        toggleAction(item)
                      }
                    />

                    {item}

                  </label>

                )
              )}

            </div>

          </div>

          <label className="flex items-center gap-3">

            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) =>
                setIsActive(
                  e.target.checked
                )
              }
            />

            Active Workflow

          </label>

          <div className="flex justify-end gap-3">

            <button
              onClick={() =>
                setOpen(false)
              }
              className="rounded border px-4 py-2"
            >
              Cancel
            </button>

            <button
              onClick={handleSubmit}
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Save Changes
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}