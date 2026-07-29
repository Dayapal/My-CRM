import { AuditLog } from "./audit.model.js";

interface CreateAuditLogInput {
  organization: string;
  user: string;
  action: string;
  module: string;
  entityId: string;
  entityName: string;
  description: string;
  ip?: string;
  userAgent?: string;
}

/*
|--------------------------------------------------------------------------
| Create Audit Log
|--------------------------------------------------------------------------
*/

export async function createAuditLog(
  data: CreateAuditLogInput
) {
  return AuditLog.create({
    organization: data.organization,

    user: data.user,

    action: data.action,

    module: data.module,

    entityId: data.entityId,

    entityName: data.entityName,

    description: data.description,

    ip: data.ip ?? "",

    userAgent: data.userAgent ?? "",
  });
}

/*
|--------------------------------------------------------------------------
| Get Audit Logs
|--------------------------------------------------------------------------
*/

export async function getAuditLogs(
  organization: string
) {
  return AuditLog.find({
    organization,
  })
    .populate(
      "user",
      "firstName lastName email"
    )
    .sort({
      createdAt: -1,
    });
}

/*
|--------------------------------------------------------------------------
| Get Audit Log By Id
|--------------------------------------------------------------------------
*/

export async function getAuditLogById(
  id: string,
  organization: string
) {
  return AuditLog.findOne({
    _id: id,
    organization,
  }).populate(
    "user",
    "firstName lastName email"
  );
}

/*
|--------------------------------------------------------------------------
| Delete Audit Log
|--------------------------------------------------------------------------
*/

export async function deleteAuditLog(
  id: string,
  organization: string
) {
  return AuditLog.findOneAndDelete({
    _id: id,
    organization,
  });
}