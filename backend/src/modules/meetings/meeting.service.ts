import { Meeting } from "./meeting.model.js";

import {
  createActivity,
} from "../activities/activity.service.js";

import {
  createNotification,
} from "../notifications/notification.service.js";

import {
  ACTIVITY_TYPES,
  MEETING_STATUS,
} from "../../constants/index.js";

export const createMeeting = async (
  payload: any,
  organizationId: string,
  userId: string
) => {

  if (
    new Date(payload.endTime) <=
    new Date(payload.startTime)
  ) {
    throw new Error(
      "End time must be after start time."
    );
  }

  const meeting =
    await Meeting.create({

      ...payload,

      owner:
        payload.owner || userId,

      organization:
        organizationId,

    });

  await createActivity({

    organization:
      organizationId,

    user: userId,

    type:
      ACTIVITY_TYPES.MEETING_CREATED,

    entityType:
      "Meeting",

    entityId:
      meeting._id.toString(),

    description:
      `Meeting "${meeting.title}" created`,

  });

  if (
    payload.owner &&
    payload.owner !== userId
  ) {

    await createNotification({

      title:
        "Meeting Assigned",

      message:
        `You have been assigned a meeting: ${meeting.title}`,

      user:
        payload.owner,

      organization:
        organizationId,

    });

  }

  return Meeting.findById(
    meeting._id
  )
    .populate(
      "company",
      "name"
    )
    .populate(
      "contact",
      "firstName lastName"
    )
    .populate(
      "deal",
      "title"
    )
    .populate(
      "owner",
      "firstName lastName email"
    );
};

export const getMeetings =
async (
organizationId: string
) => {

return Meeting.find({

organization:
organizationId,

})

.populate(
"company",
"name"
)

.populate(
"contact",
"firstName lastName"
)

.populate(
"deal",
"title"
)

.populate(
"owner",
"firstName lastName email"
)

.sort({
startTime: 1,
});

};

export const getMeetingById =
async (
meetingId: string,
organizationId: string
) => {

return Meeting.findOne({

_id:
meetingId,

organization:
organizationId,

})

.populate(
"company"
)

.populate(
"contact"
)

.populate(
"deal"
)

.populate(
"owner",
"firstName lastName email"
);

};

export const updateMeeting =
async (

meetingId: string,

organizationId: string,

payload: any,

userId: string

) => {

if (
payload.startTime &&
payload.endTime &&
new Date(
payload.endTime
) <=
new Date(
payload.startTime
)
) {

throw new Error(
"End time must be after start time."
);

}

const meeting =
await Meeting.findOneAndUpdate(

{

_id:
meetingId,

organization:
organizationId,

},

payload,

{

new: true,

runValidators: true,

}

)

.populate(
"company",
"name"
)

.populate(
"contact",
"firstName lastName"
)

.populate(
"deal",
"title"
)

.populate(
"owner",
"firstName lastName email"
);

if (!meeting) {

return null;

}

await createActivity({

organization:
organizationId,

user:
userId,

type:
ACTIVITY_TYPES.MEETING_UPDATED,

entityType:
"Meeting",

entityId:
meeting._id.toString(),

description:
`Meeting "${meeting.title}" updated`,

});

return meeting;

};

export const deleteMeeting =
async (

meetingId: string,

organizationId: string

) => {

return Meeting.findOneAndDelete({

_id:
meetingId,

organization:
organizationId,

});

};

export const updateMeetingStatus =
async (

meetingId: string,

organizationId: string,

userId: string,

status: string

) => {

const meeting =
await Meeting.findOneAndUpdate(

{

_id:
meetingId,

organization:
organizationId,

},

{

status,

},

{

new: true,

runValidators: true,

}

);

if (!meeting) {

return null;

}

await createActivity({

organization:
organizationId,

user:
userId,

type:

status ===
MEETING_STATUS.COMPLETED

? ACTIVITY_TYPES.MEETING_COMPLETED

: ACTIVITY_TYPES.MEETING_UPDATED,

entityType:
"Meeting",

entityId:
meeting._id.toString(),

description:
`Meeting moved to ${status}`,

});

return meeting;

};

export const getCalendarMeetings =
async (
organizationId: string
) => {

return Meeting.find({

organization:
organizationId,

})

.select(

"title startTime endTime status meetingType"

)

.sort({

startTime: 1,

});

};