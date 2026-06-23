export interface User {
  _id: string;

  firstName: string;
  lastName: string;

  email: string;

  role:
    | "OWNER"
    | "ADMIN"
    | "SALES"
    | "VIEWER";

  isActive: boolean;
}