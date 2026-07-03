import { z } from "zod";

export const createNoteSchema =
  z.object({
    body: z.object({
      title: z
        .string()
        .min(2),

      content: z
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

export const updateNoteSchema =
  z.object({
    body: z.object({
      title:
        z.string().optional(),

      content:
        z.string().optional(),
    }),
  });