import { Router }
from "express";

import {
  createTask,
  getTasks,
  updateTaskStatus,
  getTaskMetrics
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

export default router;