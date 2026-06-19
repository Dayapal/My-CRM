import mongoose, { Schema, Document } from "mongoose";

export interface IOrganization extends Document {
  name: string;
  slug: string;
  owner: mongoose.Types.ObjectId;
  logo?: string;
  isActive: boolean;
}

const organizationSchema = new Schema<IOrganization>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    //   required: true
    },

    logo: {
      type: String
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export const Organization = mongoose.model<IOrganization>(
  "Organization",
  organizationSchema
);