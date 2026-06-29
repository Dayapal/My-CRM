export interface Meeting {
  _id: string;

  title: string;

  description?: string;

  meetingType:
    | "ONLINE"
    | "OFFLINE"
    | "PHONE";

  status:
    | "SCHEDULED"
    | "COMPLETED"
    | "CANCELLED"
    | "RESCHEDULED";

  startTime: string;

  endTime: string;

  location?: string;

  meetingLink?: string;

  company?: {
    _id: string;
    name: string;
  };

  contact?: {
    _id: string;
    firstName: string;
    lastName: string;
  };

  deal?: {
    _id: string;
    title: string;
  };

  owner?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };

  createdAt: string;

  updatedAt: string;
}