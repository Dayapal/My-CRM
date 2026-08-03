import { z } from "zod";

export const createWorkflowSchema =
  z.object({
    body: z.object({
      name: z
        .string()
        .min(3),
      trigger:
        z.string(),
      conditions:
        z.array(
          z.string()
        ),
      actions:
        z.array(
          z.string()
        ),
    }),
  });

export const updateWorkflowSchema =createWorkflowSchema.partial();