import { Workflow } from "./workflow.model.js";
import { executeWorkflowAction } from "./workflow.actions.js";

export interface WorkflowEvent {

  trigger: string;

  organization: string;

  entity: any;

  user: any;

}

export async function runWorkflow(
  event: WorkflowEvent
) {

  // Find active workflows for this trigger
  const workflows = await Workflow.find({

    organization: event.organization,

    trigger: event.trigger,

    isActive: true,

  });

  // Execute every workflow
  for (const workflow of workflows) {

    for (const action of workflow.actions) {

      await executeWorkflowAction({

        action,

        entity: event.entity,

        organization: event.organization,

        user: event.user,

      });

    }

  }

}