export interface CRMDocument {
  _id: string;

  title: string;

  originalName: string;

  fileUrl: string;

  publicId: string;

  mimeType: string;

  size: number;

  entityType:
    | "Lead"
    | "Contact"
    | "Company"
    | "Deal"
    | "Task"
    | "Meeting";

  entityId: string;

  uploadedBy: {
    _id: string;
    firstName: string;
    lastName: string;
  };

  organization: string;

  createdAt: string;

  updatedAt: string;
}

export interface CreateDocumentPayload {
  title: string;

  entityType:
    | "Lead"
    | "Contact"
    | "Company"
    | "Deal"
    | "Task"
    | "Meeting";

  entityId: string;

  file: File;
}