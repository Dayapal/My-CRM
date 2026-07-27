import {
  useState,
} from "react";

import {
  useCreateWorkflow,
} from "../useWorkflow";

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

export default function CreateWorkflowDialog() {

  const createWorkflow =
    useCreateWorkflow();

  const [open, setOpen] =
    useState(false);

  const [name, setName] =
    useState("");

  const [trigger, setTrigger] =
    useState(TRIGGERS[0]);

  const [conditions, setConditions] =
    useState<string[]>([]);

  const [actions, setActions] =
    useState<string[]>([]);

  async function handleSubmit() {

    await createWorkflow.mutateAsync({

      name,

      trigger,

      conditions,

      actions,

    });

    setOpen(false);

    setName("");

    setConditions([]);

    setActions([]);

  }

  if (!open) {

    return (

      <button
        onClick={() =>
          setOpen(true)
        }
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        + Create Workflow
      </button>

    );

  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-xl bg-white p-6">

        <h2 className="mb-5 text-xl font-semibold">

          Create Workflow

        </h2>

        <div className="space-y-4">

          <input
            placeholder="Workflow Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
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

            <p className="mb-2 font-medium">

              Conditions

            </p>

            {ACTIONS.map(
              (item) => (

                <label
                  key={item}
                  className="flex items-center gap-2"
                >

                  <input
                    type="checkbox"
                    checked={conditions.includes(item)}
                    onChange={(e) => {

                      if (e.target.checked) {

                        setConditions([
                          ...conditions,
                          item,
                        ]);

                      } else {

                        setConditions(

                          conditions.filter(
                            (x) =>
                              x !== item
                          )

                        );

                      }

                    }}
                  />

                  {item}

                </label>

              )
            )}

          </div>

          <div>

            <p className="mb-2 font-medium">

              Actions

            </p>

            {ACTIONS.map(
              (item) => (

                <label
                  key={item}
                  className="flex items-center gap-2"
                >

                  <input
                    type="checkbox"
                    checked={actions.includes(item)}
                    onChange={(e) => {

                      if (e.target.checked) {

                        setActions([
                          ...actions,
                          item,
                        ]);

                      } else {

                        setActions(

                          actions.filter(
                            (x) =>
                              x !== item
                          )

                        );

                      }

                    }}
                  />

                  {item}

                </label>

              )
            )}

          </div>

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
              className="rounded bg-blue-600 px-4 py-2 text-white"
            >
              Save Workflow
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}