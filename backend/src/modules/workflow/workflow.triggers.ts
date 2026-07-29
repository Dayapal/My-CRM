export const WORKFLOW_TRIGGERS = {

  LEAD_CREATED: "Lead Created",

  LEAD_UPDATED: "Lead Updated",

  LEAD_QUALIFIED: "Lead Qualified",

  LEAD_CONVERTED: "Lead Converted",

  DEAL_CREATED: "Deal Created",

  DEAL_UPDATED: "Deal Updated",

  DEAL_WON: "Deal Won",

  DEAL_LOST: "Deal Lost",

  CONTACT_CREATED: "Contact Created",

  COMPANY_CREATED: "Company Created",

  TASK_CREATED: "Task Created",

  TASK_COMPLETED: "Task Completed",

  MEETING_CREATED: "Meeting Scheduled",

  MEETING_COMPLETED: "Meeting Completed",

  NOTE_CREATED: "Note Created",

  DOCUMENT_UPLOADED: "Document Uploaded",

} as const;

export type WorkflowTrigger =
  typeof WORKFLOW_TRIGGERS[keyof typeof WORKFLOW_TRIGGERS];