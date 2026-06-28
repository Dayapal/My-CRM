import mongoose, {
  Schema,
  Document,
} from "mongoose";

import {
  MEETING_STATUS,
  MEETING_TYPE,
  MeetingStatus,
  MeetingType,
} from "../../constants/meeting.js";

export interface IMeeting
  extends Document {

  title: string;

  description?: string;

  meetingType: MeetingType;

  status: MeetingStatus;

  startTime: Date;

  endTime: Date;

  location?: string;

  meetingLink?: string;

  company?:
    mongoose.Types.ObjectId;

  contact?:
    mongoose.Types.ObjectId;

  deal?:
    mongoose.Types.ObjectId;

  owner:
    mongoose.Types.ObjectId;

  organization:
    mongoose.Types.ObjectId;
}

const meetingSchema =
  new Schema<IMeeting>(
    {

      title: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
        type: String,
      },

      meetingType: {
        type: String,
        enum: Object.values(
          MEETING_TYPE
        ),
        default:
          MEETING_TYPE.ONLINE,
      },

      status: {
        type: String,
        enum: Object.values(
          MEETING_STATUS
        ),
        default:
          MEETING_STATUS.SCHEDULED,
      },

      startTime: {
        type: Date,
        required: true,
      },

      endTime: {
        type: Date,
        required: true,
      },

      location: {
        type: String,
      },

      meetingLink: {
        type: String,
      },

      company: {
        type:
          Schema.Types.ObjectId,
        ref: "Company",
      },

      contact: {
        type:
          Schema.Types.ObjectId,
        ref: "Contact",
      },

      deal: {
        type:
          Schema.Types.ObjectId,
        ref: "Deal",
      },

      owner: {
        type:
          Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      organization: {
        type:
          Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
      },

    },
    {
      timestamps: true,
    }
  );

meetingSchema.index({
  organization: 1,
});

meetingSchema.index({
  owner: 1,
});

meetingSchema.index({
  startTime: 1,
});

meetingSchema.index({
  status: 1,
});

meetingSchema.index({
  company: 1,
});

meetingSchema.index({
  contact: 1,
});

meetingSchema.index({
  deal: 1,
});

export const Meeting =
  mongoose.model<IMeeting>(
    "Meeting",
    meetingSchema
  );