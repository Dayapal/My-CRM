export interface Workflow {
  _id: string;

  organization: string;

  name: string;

  trigger: string;

  conditions: string[];

  actions: string[];

  isActive: boolean;

  createdBy: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };

  createdAt: string;

  updatedAt: string;
}