import mongoose, {
  Schema,
  Document,
  Model,
} from "mongoose";

export interface IWorkflow extends Document {
  organization: mongoose.Types.ObjectId;

  name: string;

  trigger: string;

  conditions: string[];

  actions: string[];

  isActive: boolean;

  createdBy: mongoose.Types.ObjectId;

  createdAt: Date;

  updatedAt: Date;
}

const workflowSchema = new Schema<IWorkflow>(
  {
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    trigger: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },

    conditions: {
      type: [String],
      default: [],
    },

    actions: {
      type: [String],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/*
|--------------------------------------------------------------------------
| Indexes
|--------------------------------------------------------------------------
*/

workflowSchema.index({
  organization: 1,
  trigger: 1,
  isActive: 1,
});

const Workflow: Model<IWorkflow> =
  mongoose.model<IWorkflow>(
    "Workflow",
    workflowSchema
  );

export { Workflow };