import { z } from "zod";

import {
  MEETING_STATUS,
  MEETING_TYPE,
} from "../../constants/index.js";

export const createMeetingSchema =
  z.object({

    title:
      z.string()
        .min(2)
        .max(100),

    description:
      z.string()
        .optional(),

    meetingType:
      z.enum([
        MEETING_TYPE.ONLINE,
        MEETING_TYPE.OFFLINE,
        MEETING_TYPE.PHONE,
      ]),

    startTime:
      z.coerce.date(),

    endTime:
      z.coerce.date(),

    location:
      z.string()
        .optional(),

    meetingLink:
      z.string()
        .url()
        .optional(),

    company:
      z.string()
        .optional(),

    contact:
      z.string()
        .optional(),

    deal:
      z.string()
        .optional(),

  });

export const updateMeetingSchema =
  createMeetingSchema.partial();

export const updateMeetingStatusSchema =
  z.object({

    status:
      z.enum([
        MEETING_STATUS.SCHEDULED,
        MEETING_STATUS.COMPLETED,
        MEETING_STATUS.CANCELLED,
        MEETING_STATUS.RESCHEDULED,
      ]),

  });

export const ACTIVITY_TYPES = {
  MEETING_CREATED: "MEETING_CREATED",
  MEETING_UPDATED: "MEETING_UPDATED",
  MEETING_COMPLETED: "MEETING_COMPLETED",
  MEETING_CANCELLED: "MEETING_CANCELLED",
} as const;

  