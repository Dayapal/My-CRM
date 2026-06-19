import { z } from "zod";

export const createContactSchema =
  z.object({
    firstName: z.string().min(2),

    lastName: z.string().min(2),

    email: z
      .string()
      .email()
      .optional(),

    phone: z
      .string()
      .optional(),

    jobTitle: z
      .string()
      .optional(),

    tags: z
      .array(z.string())
      .optional(),
      
      company: z.string().optional(),
  });

export const updateContactSchema =
  createContactSchema.partial();