declare namespace Express {
  interface Request {
    user: {
      userId: string;
      organizationId: string;
      role: string;
    };
  }
}