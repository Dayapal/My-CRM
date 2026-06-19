import { Contact } from "./contact.model.js";
import { createActivity } from "../activities/activity.service.js";
import { ACTIVITY_TYPES  } from "../../constants/index.js";
// import { ActivityType }
// from "../activities/activity.types.js";

export const createContact = async (
  payload: any,
  organizationId: string,
  userId: string
) => {
  const contact = await Contact.create({
    ...payload,
    organization: organizationId,
  });

  console.log("Contact Created:", contact._id);

  const activity = await createActivity({
    organization: organizationId,
    user: userId,
    type: ACTIVITY_TYPES.CONTACT_CREATED,
    entityType: "Contact",
    entityId: contact._id.toString(),
    description: `Contact ${contact.firstName} ${contact.lastName} created`,
  });

  // console.log("Activity Created:", activity._id);

  return contact;
};
  export const getContacts =
  async (
    organizationId: string,
    query: any
  ) => {
    const {
      search,
      page = 1,
      limit = 10,
    } = query;

    const filter: any = {
      organization:
        organizationId,
    };

    if (search) {
      filter.$text = {
        $search: search,
      };
    }

    const skip =
      (Number(page) - 1) *
      Number(limit);

   const contacts =
  await Contact.find(filter)
    .populate(
      "company",
      "name industry"
    )
    .skip(skip)
    .limit(Number(limit))
    .sort({
      createdAt: -1,
    });

    const total =
      await Contact.countDocuments(
        filter
      );

    return {
      contacts,
      total,
      page: Number(page),
    };
  };

  export const getContactById = async (
  contactId: string,
  organizationId: string
) => {
  return Contact.findOne({
    _id: contactId,
    organization: organizationId,
  });
};

export const updateContact = async (
  contactId: string,
  organizationId: string,
  payload: any,
  userId: string
) => {
  const contact =
    await Contact.findOneAndUpdate(
      {
        _id: contactId,
        organization:
          organizationId,
      },
      payload,
      {
        new: true,
        runValidators: true,
      }
    );

  if (!contact) {
    return null;
  }

  await createActivity({
    organization:organizationId,

    user: userId,

    type:ACTIVITY_TYPES.CONTACT_UPDATED,

    entityType: "Contact",

    entityId:
      contact._id.toString(),

    description:
      `Contact ${contact.firstName} updated`,
  });

  return contact;
};



export const deleteContact = async (
  contactId: string,
  organizationId: string
) => {
  return Contact.findOneAndDelete({
    _id: contactId,
    organization: organizationId,
  });
};