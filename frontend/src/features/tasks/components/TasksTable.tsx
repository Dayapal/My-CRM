import TaskActions from "./TaskActions";
import TaskStatusBadge from "./TaskStatusBadge";

interface Props {
  tasks: any[];
}

export default function TasksTable({
  tasks,
}: Props) {
  return (
    <div
      className="
      overflow-hidden
      rounded-2xl
      border
      bg-white
      shadow-sm
    "
    >
      <table className="w-full">
        <thead>
          <tr className="border-b bg-slate-50">

            <th className="p-4 text-left text-xs font-semibold uppercase text-slate-500">
              Title
            </th>

            <th className="p-4 text-left text-xs font-semibold uppercase text-slate-500">
              Priority
            </th>

            <th className="p-4 text-left text-xs font-semibold uppercase text-slate-500">
              Assigned To
            </th>

            <th className="p-4 text-left text-xs font-semibold uppercase text-slate-500">
              Due Date
            </th>

            <th className="p-4 text-left text-xs font-semibold uppercase text-slate-500">
              Status
            </th>

            <th className="p-4 text-center text-xs font-semibold uppercase text-slate-500">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {tasks.map((task) => (
            <tr
              key={task._id}
              className="
              border-b
              hover:bg-slate-50
              transition-colors
            "
            >
              <td className="p-4">
                <div>
                  <p className="font-medium">
                    {task.title}
                  </p>

                  <p className="text-xs text-slate-500">
                    {task.description}
                  </p>
                </div>
              </td>

              <td className="p-4">
                <span
                  className={`
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-semibold

                  ${
                    task.priority === "HIGH"
                      ? "bg-red-100 text-red-700"
                      : task.priority === "MEDIUM"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }
                `}
                >
                  {task.priority}
                </span>
              </td>

              <td className="p-4">
                {task.assignedTo
                  ? `${task.assignedTo.firstName} ${task.assignedTo.lastName}`
                  : "—"}
              </td>

              <td className="p-4">
                {task.dueDate
                  ? new Date(
                      task.dueDate
                    ).toLocaleDateString()
                  : "—"}
              </td>

              <td className="p-4">
                <TaskStatusBadge
                  status={
                    task.status
                  }
                />
              </td>

              <td className="p-4">
                <TaskActions
                  task={task}
                />
              </td>
            </tr>
          ))}

        </tbody>
      </table>

      {tasks.length === 0 && (
        <div className="p-10 text-center text-slate-500">
          No Tasks Found
        </div>
      )}
    </div>
  );
}