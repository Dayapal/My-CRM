export interface Deal {
  _id: string;

  title: string;

  value: number;

  stage: string;

  expectedCloseDate?: string;

  company?: {
    _id: string;
    name: string;
  };

  contact?: {
    _id: string;
    firstName: string;
    lastName: string;
  };

  owner?: {
    _id: string;
    firstName: string;
    lastName: string;
  };
}