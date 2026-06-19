import { z } from "zod";

export const createCompanySchema =
  z.object({
    name: z.string().min(2),

    website:
      z.string().optional(),

    industry:
      z.string().optional(),

    employeeCount:
      z.number().optional(),

    annualRevenue:
      z.number().optional(),

    phone:
      z.string().optional(),

    address:
      z.string().optional(),
  });

export const updateCompanySchema =
  createCompanySchema.partial();