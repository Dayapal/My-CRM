export const MEETING_STATUS = {

SCHEDULED: "SCHEDULED",

COMPLETED: "COMPLETED",

CANCELLED: "CANCELLED",

RESCHEDULED: "RESCHEDULED",

} as const;

export type MeetingStatus =
(typeof MEETING_STATUS)[keyof typeof MEETING_STATUS];


export const MEETING_TYPE = {

ONLINE: "ONLINE",

OFFLINE: "OFFLINE",

PHONE: "PHONE",

} as const;

export type MeetingType =
(typeof MEETING_TYPE)[keyof typeof MEETING_TYPE];