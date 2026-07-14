import mongoose, {
  Schema,
  Document,
} from "mongoose";

import type {
  Permission,
} from "../../constants/permissions.js";

export interface IRole
  extends Document {

  name: string;

  description?: string;

  permissions: Permission[];

  organization: mongoose.Types.ObjectId;

  isSystem: boolean;

}

const roleSchema =
  new Schema<IRole>(
    {

      name: {
        type: String,
        required: true,
        trim: true,
      },

      description: {
        type: String,
      },

      permissions: [
        {
          type: String,
          required: true,
        },
      ],

      organization: {
        type: Schema.Types.ObjectId,
        ref: "Organization",
        required: true,
      },

      isSystem: {
        type: Boolean,
        default: false,
      },

    },
    {
      timestamps: true,
    }
  );

roleSchema.index({
  organization: 1,
});

roleSchema.index({
  name: 1,
});

export const Role =
  mongoose.model<IRole>(
    "Role",
    roleSchema
  );