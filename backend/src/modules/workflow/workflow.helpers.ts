import { Lead } from "../leads/lead.model.js";
import {  createNotification,} from "../notifications/notification.service.js";

export async function assignLeadOwner(
  leadId: string,
  ownerId: string
) {
  return Lead.findByIdAndUpdate(
    leadId,
    {
      assignedTo: ownerId,
    },
    {
      new: true,
    }
  );
}


async function handleAssignOwner({

    entity,

    user,

}: {

    entity: any;

    user: any;

}) {

    await assignLeadOwner(

        entity._id.toString(),

        user._id.toString()

    );

}

async function handleNotification({

    entity,

    organization,

    user,

}: {

    entity: any;

    organization: string;

    user: any;

}) {

    await createNotification({

        organization,

        user: user._id,

        title: "Workflow Executed",

        message: `Workflow executed for ${entity.name ?? entity.title}`,

    });

}