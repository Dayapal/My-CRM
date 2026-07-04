export interface Note {
  _id: string;

  title: string;

  content: string;

  entityType:
    | "Lead"
    | "Contact"
    | "Company"
    | "Deal"
    | "Task"
    | "Meeting";

  entityId: string;

  createdBy: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };

  organization: string;

  createdAt: string;

  updatedAt: string;
}

export interface CreateNotePayload {
  title: string;
  content: string;
  entityType:
    | "Lead"
    | "Contact"
    | "Company"
    | "Deal"
    | "Task"
    | "Meeting";

  entityId: string;
}

export interface UpdateNotePayload {
  title?: string;
  content?: string;
}