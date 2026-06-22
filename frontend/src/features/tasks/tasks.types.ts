export interface Task {
  _id: string;

  title: string;

  description?: string;

  status:
    | "TODO"
    | "IN_PROGRESS"
    | "COMPLETED";

  priority:
    | "LOW"
    | "MEDIUM"
    | "HIGH";

  dueDate?: string;

  assignedTo?: {
    firstName: string;
    lastName: string;
  };
}