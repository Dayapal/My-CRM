export interface Lead {
  _id: string;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;

  company: string;

  status: string;
  source: string;

  convertedAt?: string;
}

export interface LeadsResponse {
  leads: Lead[];
  total: number;
  page: number;
}