import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface ICompany
  extends Document {
  name: string;

  website?: string;

  industry?: string;

  employeeCount?: number;

  annualRevenue?: number;

  phone?: string;

  address?: string;

  organization:
    mongoose.Types.ObjectId;
}

const companySchema =
  new Schema<ICompany>(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      website: {
        type: String,
      },

      industry: {
        type: String,
      },

      employeeCount: {
        type: Number,
      },

      annualRevenue: {
        type: Number,
      },

      phone: {
        type: String,
      },

      address: {
        type: String,
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

companySchema.index({
  organization: 1,
});

companySchema.index({
  name: "text",
  website: "text",
});

export const Company =
  mongoose.model<ICompany>(
    "Company",
    companySchema
  );