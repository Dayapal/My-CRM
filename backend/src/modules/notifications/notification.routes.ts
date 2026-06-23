import { Router } from "express";

import {
  getNotifications,
  markAsRead,
} from "./notification.controller.js";

import {
  protect,
} from "../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);

router.get(
  "/",
  getNotifications
);

router.patch(
  "/:id/read",
  markAsRead
);

export default router;