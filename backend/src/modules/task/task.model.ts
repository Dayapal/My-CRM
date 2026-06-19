import mongoose, {
  Schema,
  Document,
} from "mongoose";

import {
  TASK_STATUS,
  TASK_PRIORITY,
  TaskStatus,
  TaskPriority,
} from "../../constants/index.js";

export interface ITask
  extends Document {
  title: string;

  description?: string;

  status: TaskStatus;

  priority: TaskPriority;

  dueDate?: Date;

  assignedTo:
    mongoose.Types.ObjectId;

  lead?:
    mongoose.Types.ObjectId;

  contact?:
    mongoose.Types.ObjectId;

  deal?:
    mongoose.Types.ObjectId;

  organization:
    mongoose.Types.ObjectId;
}

const taskSchema =
  new Schema<ITask>(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
        type: String,
      },

      status: {
        type: String,
        enum: Object.values(
          TASK_STATUS
        ),
        default:
          TASK_STATUS.TODO,
      },

      priority: {
        type: String,
        enum: Object.values(
          TASK_PRIORITY
        ),
        default:
          TASK_PRIORITY.MEDIUM,
      },

      dueDate: {
        type: Date,
      },

      assignedTo: {
        type:
          Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      lead: {
        type:
          Schema.Types.ObjectId,
        ref: "Lead",
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

taskSchema.index({
  organization: 1,
});

taskSchema.index({
  assignedTo: 1,
});

taskSchema.index({
  status: 1,
});

taskSchema.index({
  dueDate: 1,
});

export const Task =
  mongoose.model<ITask>(
    "Task",
    taskSchema
  );