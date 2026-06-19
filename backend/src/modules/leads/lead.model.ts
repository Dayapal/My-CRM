import mongoose, {
  Schema,
  Document,
} from "mongoose";

import {
  LEAD_STATUS,
  LEAD_SOURCE,
  LeadStatus,
  LeadSource,
} from "../../constants/index.js";

export interface ILead extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;

  status: LeadStatus;
  source: LeadSource;
  convertedAt: Date;

  assignedTo?: mongoose.Types.ObjectId;

  organization: mongoose.Types.ObjectId;
}

const leadSchema = new Schema<ILead>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
    },

    company: {
      type: String,
    },

    status: {
      type: String,
      enum: Object.values(
        LEAD_STATUS
      ),
      default:
        LEAD_STATUS.NEW,
    },

    source: {
      type: String,
      enum: Object.values(
        LEAD_SOURCE
      ),
      default:
        LEAD_SOURCE.OTHER,
    },

    assignedTo: {
      type:
        Schema.Types.ObjectId,
      ref: "User",
    },
    convertedAt: {
  type: Date,
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

leadSchema.index({
  organization: 1,
});

leadSchema.index({
  email: 1,
});

leadSchema.index({
  status: 1,
});

leadSchema.index({
  assignedTo: 1,
});

leadSchema.index({
  firstName: "text",
  lastName: "text",
  email: "text",
  company: "text",
});

export const Lead =
  mongoose.model<ILead>(
    "Lead",
    leadSchema
  );