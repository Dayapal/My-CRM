import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  jobTitle?: string;
  company?: mongoose.Types.ObjectId;
  tags: string[];
  organization: mongoose.Types.ObjectId;
}

const contactSchema = new Schema<IContact>(
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
      lowercase: true,
      trim: true,
    },

    phone: String,

    jobTitle: String,

    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },

    tags: [
      {
        type: String,
      },
    ],

    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

contactSchema.index({
  organization: 1,
});

contactSchema.index({
  email: 1,
});

contactSchema.index({
  company: 1,
});

contactSchema.index({
  firstName: "text",
  lastName: "text",
  email: "text",
});

export const Contact =
  mongoose.model<IContact>(
    "Contact",
    contactSchema
  );