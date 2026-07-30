import { createAuditLog } from "../audit/audit.service.js";
import { createTask } from "../task/task.service.js";

interface ExecuteWorkflowActionInput {
  action: string;
  entity: any;
  organization: string;
  user: any;
}

export async function executeWorkflowAction({
  action,
  entity,
  organization,
  user,
}: ExecuteWorkflowActionInput) {
  switch (action) {
    case "Create Audit Log":
      await handleAuditLog({
        entity,
        organization,
        user,
      });
      break;
    case "Create Task":
      await handleCreateTask({
        entity,
        organization,
        user,
      });
      break;

    case "Send Notification":
      console.log("Send Notification");
      break;

    case "Assign Owner":
      console.log("Assign Owner");
      break;

    case "Send Email":
      console.log("Send Email");
      break;

    default:
      console.log(`Unknown Workflow Action: ${action}`);
  }
}

/*
|--------------------------------------------------------------------------
| Audit Log
|--------------------------------------------------------------------------
*/

async function handleAuditLog({
  entity,
  organization,
  user,
}: {
  entity: any;
  organization: string;
  user: any;
}) {
  await createAuditLog({
    organization,
    user: user._id.toString(),

    action: "Workflow",

    module: "Workflow",

    entityId: entity._id.toString(),

    entityName:
      entity.name ??
      entity.title ??
      entity.firstName ??
      "Unknown",

    description: "Workflow executed successfully",

    ip: "",

    userAgent: "",
  });
}

/*
|--------------------------------------------------------------------------
| Create Task
|--------------------------------------------------------------------------
*/

async function handleCreateTask({
  entity,
  organization,
  user,
}: {
  entity: any;
  organization: string;
  user: any;
}) {
  await createTask(
    {
      title: `Follow up - ${
        entity.name ??
        entity.title ??
        entity.firstName ??
        "New Record"
      }`,

      description:
        "Task created automatically by Workflow Engine.",

      assignedTo: user._id,

      lead: entity._id,

      dueDate: new Date(
        Date.now() + 24 * 60 * 60 * 1000
      ),
    },

    organization,

    user._id.toString()
  );
}