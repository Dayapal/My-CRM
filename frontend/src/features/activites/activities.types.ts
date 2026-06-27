export interface Activity {
  _id: string;

  type: string;

  description: string;

  entityType: string;

  entityId: string;

  createdAt: string;

  user: {
    firstName: string;
    lastName: string;
  };
}