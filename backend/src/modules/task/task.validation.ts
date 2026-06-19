import { z } from "zod";

import {
  TASK_STATUS,
} from "../../constants/index.js";

export const createTaskSchema =
  z.object({
    title:
      z.string().min(2),

    description:
      z.string().optional(),

    priority:
      z.string().optional(),

    dueDate:
      z.string().optional(),

    lead:
      z.string().optional(),

    contact:
      z.string().optional(),

    deal:
      z.string().optional(),
  });

export const updateTaskSchema =
  createTaskSchema.partial();

  export const updateTaskStatusSchema =
  z.object({
    status: z.enum([
      TASK_STATUS.TODO,
      TASK_STATUS.IN_PROGRESS,
      TASK_STATUS.COMPLETED,
      TASK_STATUS.CANCELLED,
    ]),
  });