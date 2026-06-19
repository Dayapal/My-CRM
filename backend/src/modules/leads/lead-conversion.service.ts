import { Lead } from "./lead.model.js";
import { Contact } from "../contacts/contact.model.js";

import {
  LEAD_STATUS,
  ACTIVITY_TYPES,
} from "../../constants/index.js";

import { createActivity } from "../activities/activity.service.js";
import { ApiError } from "../../utils/ApiError.js";

export const convertLeadToContact = async (
  leadId: string,
  organizationId: string,
  userId: string
) => {
  // Find lead inside current organization
  const lead = await Lead.findOne({
    _id: leadId,
    organization: organizationId,
  });

  if (!lead) {
    throw new ApiError(
      404,
      "Lead not found"
    );
  }

  // Prevent duplicate conversion
  if (
    lead.status ===
    LEAD_STATUS.WON
  ) {
    throw new ApiError(
      400,
      "Lead already converted"
    );
  }

  // Check if contact already exists
  const existingContact =
    await Contact.findOne({
      email: lead.email,
      organization:
        organizationId,
    });

  if (existingContact) {
    throw new ApiError(
      400,
      "Contact already exists for this lead"
    );
  }

  // Create contact
  const contact =
    await Contact.create({
      firstName:
        lead.firstName,

      lastName:
        lead.lastName,

      email:
        lead.email,

      phone:
        lead.phone,

      organization:
        organizationId,

      tags: ["converted-lead"],
    });

  // Update lead
  lead.status = LEAD_STATUS.WON;

lead.convertedAt = new Date();

await lead.save();

  // Activity Log
  await createActivity({
    organization:
      organizationId,

    user: userId,

    type:ACTIVITY_TYPES.LEAD_CONVERTED,

    entityType:
      "Lead",

    entityId:
      lead._id.toString(),

    description: `Lead ${lead.firstName} ${lead.lastName} converted to contact`,
  });

  return {
    lead,
    contact,
  };
};