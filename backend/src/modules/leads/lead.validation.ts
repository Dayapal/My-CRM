import { z } from "zod";

export const createLeadSchema =
  z.object({
    firstName: z
      .string()
      .min(2),

    lastName: z
      .string()
      .min(2),

    email: z
      .string()
      .email(),

    phone:
      z.string().optional(),

    company:
      z.string().optional(),

    status:
      z.string().optional(),

    source:
      z.string().optional(),
  });

  export const updateLeadSchema =
  createLeadSchema.partial();