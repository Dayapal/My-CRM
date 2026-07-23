export interface AuditUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuditLog {
  _id: string;

  organization: string;

  user: AuditUser;

  action: string;

  module: string;

  entityId: string;

  entityName: string;

  description: string;

  ip?: string;

  userAgent?: string;

  createdAt: string;

  updatedAt: string;
}