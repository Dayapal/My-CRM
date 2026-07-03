import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface INote
  extends Document {
  title: string;

  content: string;

  entityType: string;

  entityId:
    mongoose.Types.ObjectId;

  createdBy:
    mongoose.Types.ObjectId;

  organization:
    mongoose.Types.ObjectId;
}

const noteSchema =
  new Schema<INote>(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      content: {
        type: String,
        required: true,
      },

      entityType: {
        type: String,
        required: true,
        enum: [
          "Lead",
          "Contact",
          "Company",
          "Deal",
          "Task",
          "Meeting",
        ],
      },

      entityId: {
        type:
          Schema.Types.ObjectId,
        required: true,
      },

      createdBy: {
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

noteSchema.index({
  organization: 1,
});

noteSchema.index({
  entityId: 1,
});

noteSchema.index({
  entityType: 1,
});

noteSchema.index({
  createdBy: 1,
});

export const Note =
  mongoose.model<INote>(
    "Note",
    noteSchema
  );