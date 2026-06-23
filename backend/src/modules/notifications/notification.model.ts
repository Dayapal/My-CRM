import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface INotification
  extends Document {
  title: string;

  message: string;

  isRead: boolean;

  user:
    mongoose.Types.ObjectId;

  organization:
    mongoose.Types.ObjectId;
}

const notificationSchema =
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },

      message: {
        type: String,
        required: true,
      },

      isRead: {
        type: Boolean,
        default: false,
      },

      user: {
        type:
          Schema.Types.ObjectId,
        ref: "User",
      },

      organization: {
        type:
          Schema.Types.ObjectId,
        ref: "Organization",
      },
    },
    {
      timestamps: true,
    }
  );

export const Notification =
  mongoose.model(
    "Notification",
    notificationSchema
  );