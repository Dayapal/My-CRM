import mongoose, {
  Schema,
  Document,
} from "mongoose";

import {
  ACTIVITY_TYPES,
} from "../../constants/activity-types.js";

import type {
  ActivityType,
} from "../../constants/activity-types.js";

export interface IActivity extends Document {
  organization: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;

  type: ActivityType;

  entityType: string;
  entityId: mongoose.Types.ObjectId;

  description: string;

  metadata?: Record<string, any>;
}

const activitySchema =
  new Schema<IActivity>(
    {
      organization: {
        type:
          Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
      },

      user: {
        type:
          Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      type: {
  type: String,
  required: true,
  enum: Object.values(
    ACTIVITY_TYPES
  ),
},

      entityType: {
        type: String,
        required: true,
      },

      entityId: {
        type:
          Schema.Types.ObjectId,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      metadata: {
        type: Schema.Types.Mixed,
      },
    },
    {
      timestamps: true,
    }
  );


  activitySchema.index({
  organization: 1,
});

activitySchema.index({
  createdAt: -1,
});

activitySchema.index({
  entityId: 1,
});

activitySchema.index({
  type: 1,
});

export const Activity =
  mongoose.model<IActivity>(
    "Activity",
    activitySchema
  );