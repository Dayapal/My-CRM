import { Router }
from "express";

import {
  protect,
} from "../../middleware/auth.middleware.js";

import {
  getDashboard,
  getDashboardOverview
} from "./dashboard.controller.js";

const router =
  Router();

router.use(protect);

router.get(
  "/",
  getDashboard
);
router.get(
  "/overview",
  getDashboardOverview
);

export default router;