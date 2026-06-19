// src/modules/auth/auth.types.ts

export interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  organizationName: string;
}

export interface LoginInput {
  email: string;
  password: string;
}