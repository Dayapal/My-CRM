import { Router }
from "express";

import {
  protect,
}
from "../../middleware/auth.middleware.js";

import {
  getActivities,
}
from "./activity.controller.js";

const router =
  Router();

router.use(protect);

router.get(
  "/",
  getActivities
);

export default router;