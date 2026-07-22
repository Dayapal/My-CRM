import mongoose, { Schema, Document } from "mongoose";

export interface IAuditLog extends Document {
  organization: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;
  action: string;
  module: string;
  entityId: mongoose.Types.ObjectId;
  entityName: string;
  description: string;
  ip?: string;
  userAgent?: string;
}

const auditSchema = new Schema<IAuditLog>(
  {
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    module: {
      type: String,
      required: true,
    },
    entityId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    entityName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ip: String,
    userAgent: String,
  },
  {
    timestamps: true,
  }
);

export const AuditLog = mongoose.model<IAuditLog>(
  "AuditLog",
  auditSchema
);