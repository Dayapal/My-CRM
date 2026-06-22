// src/constants/lead.ts

export const LEAD_STATUS = {
  NEW: "NEW",
  CONTACTED: "CONTACTED",
  QUALIFIED: "QUALIFIED",
  CONVERTED: "CONVERTED",
  LOST: "LOST",
} as const;

export type LeadStatus =
  (typeof LEAD_STATUS)[keyof typeof LEAD_STATUS];

export const LEAD_SOURCE = {
  WEBSITE: "WEBSITE",
  LINKEDIN: "LINKEDIN",
  FACEBOOK: "FACEBOOK",
  EMAIL: "EMAIL",
  REFERRAL: "REFERRAL",
  OTHER: "OTHER",
} as const;

export type LeadSource =
  (typeof LEAD_SOURCE)[keyof typeof LEAD_SOURCE];