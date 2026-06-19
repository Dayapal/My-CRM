import { Lead } from "./lead.model.js";
import {
  createActivity,
}
from "../activities/activity.service.js";
import {
  ACTIVITY_TYPES,
} from "../../constants/index.js";



export interface LeadQuery {
search?: string;
status?: string;
page?: string | number;
limit?: string | number;
}

export const createLead =
  async (
    payload: any,
    organizationId: string,
    userId: string
  ) => {
    const lead =
      await Lead.create({
        ...payload,
        organization:
          organizationId,
      });

    await createActivity({
      organization:
        organizationId,

      user: userId,

      type:
        ACTIVITY_TYPES.LEAD_CREATED,

      entityType: "Lead",

      entityId:
        lead._id.toString(),

      description:
        "Lead created",
    });

    return lead;
  };



export const getLeads = async (
organizationId: string,
query: LeadQuery
) => {
const {
search,
status,
page = 1,
limit = 10,
} = query;

const filter: any = {
organization: organizationId,
};

if (search) {
filter.$text = {
$search: search,
};
}

if (status) {
filter.status = status;
}

const pageNumber = Number(page);
const limitNumber = Number(limit);

const skip =
(pageNumber - 1) *
limitNumber;

const leads = await Lead.find(filter)
.populate(
"assignedTo",
"firstName lastName email"
)
.skip(skip)
.limit(limitNumber)
.sort({
createdAt: -1,
});

const total =
await Lead.countDocuments(
filter
);

return {
leads,
total,
page: pageNumber,
pages: Math.ceil(
total / limitNumber
),
};
};

export const getLeadById =
async (
leadId: string,
organizationId: string
) => {
return Lead.findOne({
_id: leadId,
organization: organizationId,
}).populate(
"assignedTo",
"firstName lastName email"
);
};

export const updateLead = async (
  leadId: string,
  organizationId: string,
  payload: Record<string, unknown>,
  userId: string
) => {
  const lead =
    await Lead.findOneAndUpdate(
      {
        _id: leadId,
        organization:
          organizationId,
      },
      payload,
      {
        new: true,
        runValidators: true,
      }
    );

  if (!lead) {
    return null;
  }

  await createActivity({
    organization:
      organizationId,

    user: userId,

    type:
      ACTIVITY_TYPES.LEAD_UPDATED,

    entityType: "Lead",

    entityId:
      lead._id.toString(),

    description:
      "Lead updated",
  });

  return lead;
};

export const deleteLead =
async (
leadId: string,
organizationId: string
) => {
return Lead.findOneAndDelete({
_id: leadId,
organization:
organizationId,
});
};

export const assignLead = async (
  leadId: string,
  organizationId: string,
  userId: string
) => {
  const lead =
    await Lead.findOneAndUpdate(
      {
        _id: leadId,
        organization:
          organizationId,
      },
      {
        assignedTo: userId,
      },
      {
        new: true,
        runValidators: true,
      }
    );

  if (!lead) {
    return null;
  }

  await createActivity({
    organization:
      organizationId,

    user: userId,

    type:
      ACTIVITY_TYPES.LEAD_ASSIGNED,

    entityType: "Lead",

    entityId:
      lead._id.toString(),

    description:
      "Lead assigned",
  });

  return lead;
};

export const convertLeadToContact =
  async (leadId: string) => {};