export interface Contact {
  _id: string;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;

  organization: string;

  createdAt: string;
  updatedAt: string;
}

export interface ContactsResponse {
  contacts: Contact[];
  total: number;
  page: number;
}