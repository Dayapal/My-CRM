import { z } from "zod";

export const createDocumentSchema =
  z.object({
    body: z.object({
      title: z
        .string()
        .min(2),

      entityType:
        z.enum([
          "Lead",
          "Contact",
          "Company",
          "Deal",
          "Task",
          "Meeting",
        ]),

      entityId:
        z.string(),
    }),
  });