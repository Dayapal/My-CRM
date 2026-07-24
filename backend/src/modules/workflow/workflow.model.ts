import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface IWorkflow
  extends Document {

  organization:
    mongoose.Types.ObjectId;

  name: string;

  trigger: string;

  conditions: string[];

  actions: string[];

  isActive: boolean;

  createdBy:
    mongoose.Types.ObjectId;

}

const workflowSchema =
  new Schema<IWorkflow>(
    {

      organization: {
        type: Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
      },

      name: {
        type: String,
        required: true,
        trim: true,
      },

      trigger: {
        type: String,
        required: true,
      },

      conditions: [
        {
          type: String,
        },
      ],

      actions: [
        {
          type: String,
        },
      ],

      isActive: {
        type: Boolean,
        default: true,
      },

      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

    },
    {
      timestamps: true,
    }
  );

workflowSchema.index({
  organization: 1,
});

export const Workflow =
  mongoose.model<IWorkflow>(
    "Workflow",
    workflowSchema
  );