import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface IDocument
  extends Document {
  title: string;

  originalName: string;

  fileUrl: string;

  publicId: string;

  mimeType: string;

  size: number;

  entityType:
    | "Lead"
    | "Contact"
    | "Company"
    | "Deal"
    | "Task"
    | "Meeting";

  entityId:
    mongoose.Types.ObjectId;

  uploadedBy:
    mongoose.Types.ObjectId;

  organization:
    mongoose.Types.ObjectId;
}

const documentSchema =
  new Schema<IDocument>(
    {
      title: {
        type: String,
        required: true,
        trim: true,
      },

      originalName: {
        type: String,
        required: true,
      },

      fileUrl: {
        type: String,
        required: true,
      },

      publicId: {
        type: String,
        required: true,
      },

      mimeType: {
        type: String,
        required: true,
      },

      size: {
        type: Number,
        required: true,
      },

      entityType: {
        type: String,
        enum: [
          "Lead",
          "Contact",
          "Company",
          "Deal",
          "Task",
          "Meeting",
        ],
        required: true,
      },

      entityId: {
        type:
          Schema.Types.ObjectId,
        required: true,
      },

      uploadedBy: {
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

documentSchema.index({
  organization: 1,
});

documentSchema.index({
  entityType: 1,
});

documentSchema.index({
  entityId: 1,
});

export const CRMDocument =
  mongoose.model<IDocument>(
    "Document",
    documentSchema
  );