// src/constants/roles.ts

export const ROLES = {
  OWNER: "OWNER",
  ADMIN: "ADMIN",
  MANAGER: "MANAGER",
  MEMBER: "MEMBER",
} as const;

export type Role =
  (typeof ROLES)[keyof typeof ROLES];