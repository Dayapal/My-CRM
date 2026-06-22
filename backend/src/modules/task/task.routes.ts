import { Router }
from "express";

import {
  createTask,
  getTasks,
  updateTaskStatus,
  getTaskMetrics,
  getTask,
  updateTask,
  deleteTask,
} from "./task.controller.js";

import {
  protect,
} from "../../middleware/auth.middleware.js";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  createTaskSchema,
  updateTaskStatusSchema
} from "./task.validation.js";

const router =
  Router();

router.use(protect);

router.post(
  "/",
  validate(
    createTaskSchema
  ),
  createTask
);

router.get(
  "/",
  getTasks
);


router.get(
  "/metrics",
  getTaskMetrics
);

router.patch(
  "/:id/status",
  validate(
    updateTaskStatusSchema
  ),
  updateTaskStatus
);

router.get(
  "/:id",
  getTask
);

router.patch(
  "/:id",
  updateTask
);

router.delete(
  "/:id",
  deleteTask
);

export default router;