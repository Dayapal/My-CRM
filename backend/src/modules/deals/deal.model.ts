import mongoose, {
  Schema,
  Document,
} from "mongoose";

import {
  DEAL_STAGE,
  DealStage,
} from "../../constants/deal.js";

export interface IDeal
  extends Document {
  title: string;

  value: number;

  stage: DealStage;

  expectedCloseDate?: Date;

  company:
    mongoose.Types.ObjectId;

  contact?:
    mongoose.Types.ObjectId;

  owner:
    mongoose.Types.ObjectId;

  organization:
    mongoose.Types.ObjectId;
}


const dealSchema =
  new Schema<IDeal>(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      value: {
        type: Number,
        required: true,
      },

      stage: {
        type: String,
        enum:
          Object.values(
            DEAL_STAGE
          ),

        default:
          DEAL_STAGE.LEAD,
      },

      expectedCloseDate: {
        type: Date,
      },

      company: {
        type:
          Schema.Types.ObjectId,
        ref: "Company",
        required: true,
      },

      contact: {
        type:
          Schema.Types.ObjectId,
        ref: "Contact",
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

  dealSchema.index({
  organization: 1,
});

dealSchema.index({
  stage: 1,
});

dealSchema.index({
  company: 1,
});

dealSchema.index({
  owner: 1,
});

export const Deal =
  mongoose.model<IDeal>(
    "Deal",
    dealSchema
  );