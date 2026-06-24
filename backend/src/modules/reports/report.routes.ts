import { Router }
from "express";

import {
  getDashboardReport,
}
from "./report.controller.js";

import {
  protect,
}
from "../../middleware/auth.middleware.js";

const router =
  Router();

router.use(protect);

router.get(
  "/dashboard",
  getDashboardReport
);

export default router;