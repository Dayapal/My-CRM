import { AuditLog }
from "./audit.model.js";

export async function getAuditLogs(
  organization: string
) {

  return AuditLog
    .find({
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

export async function getAuditLogById(
  id: string,
  organization: string
) {

  return AuditLog
    .findOne({
      _id: id,
      organization,
    })
    .populate(
      "user",
      "firstName lastName email"
    );

}

export async function deleteAuditLog(
  id: string,
  organization: string
) {

  return AuditLog.findOneAndDelete({
    _id: id,
    organization,
  });

}