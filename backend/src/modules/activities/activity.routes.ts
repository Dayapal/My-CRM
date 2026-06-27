import { Router }
from "express";

import {
  protect,
}
from "../../middleware/auth.middleware.js";

import {
  getActivities,

  getUserActivities,
  getEntityActivities,
}
from "./activity.controller.js";

const router =
  Router();

router.use(protect);

router.get(
  "/",
  getActivities
);

router.get(
  "/user/:userId",
  getUserActivities
);

router.get(
  "/entity/:entityId",
  getEntityActivities
);

export default router;