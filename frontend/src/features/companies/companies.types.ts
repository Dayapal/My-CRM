export interface Company {
  _id: string;

  name: string;

  website?: string;

  industry?: string;

  employeeCount?: number;

  annualRevenue?: number;

  phone?: string;

  address?: string;

  createdAt: string;
}

export interface CompaniesResponse {
  companies: Company[];
  total: number;
  page: number;
}