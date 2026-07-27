import {
  useState,
} from "react";

const TRIGGERS = [
  "Lead Created",
  "Lead Updated",

  "Lead Qualified",

  "Deal Won",

  "Task Completed",

];

const ACTIONS = [

  "Assign Owner",

  "Create Task",

  "Send Email",

  "Send Notification",

  "Create Audit Log",

];

export default function WorkflowBuilder() {

  const [trigger, setTrigger] =
    useState(TRIGGERS[0]);

  const [actions, setActions] =
    useState<string[]>([]);

  function toggleAction(
    action: string
  ) {

    if (
      actions.includes(action)
    ) {

      setActions(

        actions.filter(
          (item) =>
            item !== action
        )

      );

      return;

    }

    setActions([
      ...actions,
      action,
    ]);

  }

  return (

    <div className="space-y-6">

      {/* Trigger */}

      <div className="rounded-lg border bg-white p-5">

        <h2 className="mb-4 text-lg font-semibold">

          Trigger

        </h2>

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

      </div>

      {/* Flow */}

      <div className="flex justify-center">

        <div className="h-10 w-px bg-gray-300" />

      </div>

      {/* Actions */}

      <div className="rounded-lg border bg-white p-5">

        <h2 className="mb-4 text-lg font-semibold">

          Actions

        </h2>

        <div className="grid gap-3">

          {ACTIONS.map(
            (action) => (

              <label
                key={action}
                className="flex items-center gap-3"
              >

                <input
                  type="checkbox"
                  checked={actions.includes(action)}
                  onChange={() =>
                    toggleAction(
                      action
                    )
                  }
                />

                {action}

              </label>

            )
          )}

        </div>

      </div>

      {/* Preview */}

      <div className="rounded-lg border bg-blue-50 p-5">

        <h2 className="mb-3 font-semibold">

          Workflow Preview

        </h2>

        <p>

          <strong>

            Trigger

          </strong>

        </p>

        <p className="mb-4">

          {trigger}

        </p>

        <p>

          <strong>

            Actions

          </strong>

        </p>

        <ul className="list-disc pl-6">

          {actions.map(
            (action) => (

              <li
                key={action}
              >

                {action}

              </li>

            )
          )}

        </ul>

      </div>
    </div>
  );

}