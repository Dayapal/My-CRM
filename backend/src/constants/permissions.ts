export const PERMISSIONS = {
  /* ==========================
      Leads
  ========================== */

  CREATE_LEAD: "CREATE_LEAD",
  VIEW_LEAD: "VIEW_LEAD",
  EDIT_LEAD: "EDIT_LEAD",
  DELETE_LEAD: "DELETE_LEAD",

  /* ==========================
      Contacts
  ========================== */

  CREATE_CONTACT: "CREATE_CONTACT",
  VIEW_CONTACT: "VIEW_CONTACT",
  EDIT_CONTACT: "EDIT_CONTACT",
  DELETE_CONTACT: "DELETE_CONTACT",

  /* ==========================
      Companies
  ========================== */

  CREATE_COMPANY: "CREATE_COMPANY",
  VIEW_COMPANY: "VIEW_COMPANY",
  EDIT_COMPANY: "EDIT_COMPANY",
  DELETE_COMPANY: "DELETE_COMPANY",

  /* ==========================
      Deals
  ========================== */

  CREATE_DEAL: "CREATE_DEAL",
  VIEW_DEAL: "VIEW_DEAL",
  EDIT_DEAL: "EDIT_DEAL",
  DELETE_DEAL: "DELETE_DEAL",

  /* ==========================
      Tasks
  ========================== */

  CREATE_TASK: "CREATE_TASK",
  VIEW_TASK: "VIEW_TASK",
  EDIT_TASK: "EDIT_TASK",
  DELETE_TASK: "DELETE_TASK",

  /* ==========================
      Meetings
  ========================== */

  CREATE_MEETING: "CREATE_MEETING",
  VIEW_MEETING: "VIEW_MEETING",
  EDIT_MEETING: "EDIT_MEETING",
  DELETE_MEETING: "DELETE_MEETING",

  /* ==========================
      Notes
  ========================== */

  CREATE_NOTE: "CREATE_NOTE",
  VIEW_NOTE: "VIEW_NOTE",
  EDIT_NOTE: "EDIT_NOTE",
  DELETE_NOTE: "DELETE_NOTE",

  /* ==========================
      Documents
  ========================== */

  UPLOAD_DOCUMENT: "UPLOAD_DOCUMENT",
  VIEW_DOCUMENT: "VIEW_DOCUMENT",
  DELETE_DOCUMENT: "DELETE_DOCUMENT",

  /* ==========================
      Reports
  ========================== */

  VIEW_REPORTS: "VIEW_REPORTS",
  EXPORT_REPORTS: "EXPORT_REPORTS",

  /* ==========================
      Activities
  ========================== */

  VIEW_ACTIVITIES: "VIEW_ACTIVITIES",

  /* ==========================
      Notifications
  ========================== */

  VIEW_NOTIFICATIONS: "VIEW_NOTIFICATIONS",

  /* ==========================
      Users
  ========================== */

  CREATE_USER: "CREATE_USER",
  VIEW_USER: "VIEW_USER",
  EDIT_USER: "EDIT_USER",
  DELETE_USER: "DELETE_USER",
  MANAGE_USERS: "MANAGE_USERS",

  /* ==========================
      Roles
  ========================== */

  CREATE_ROLE: "CREATE_ROLE",
  VIEW_ROLE: "VIEW_ROLE",
  EDIT_ROLE: "EDIT_ROLE",
  DELETE_ROLE: "DELETE_ROLE",

  /* ==========================
      Settings
  ========================== */

  VIEW_SETTINGS: "VIEW_SETTINGS",
  MANAGE_SETTINGS: "MANAGE_SETTINGS",
} as const;

export type Permission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS];