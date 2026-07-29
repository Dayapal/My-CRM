import { createAuditLog } from "../audit/audit.service.js";

// Future imports
// import { createTask } from "../task/task.service";
// import { createNotification } from "../notification/notification.service";
// import { sendEmail } from "../../utils/email.service";

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
      console.log("Create Task");
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
      break;
  }
}

/*
|--------------------------------------------------------------------------
| Private Helper Functions
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
    user: user._id,

    action: "Workflow",

    module: "Workflow",

    entityId: entity._id,

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