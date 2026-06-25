import { Router }
from "express";

import {
  getSettings,
  updateProfile,
  updateOrganization,
}
from "./settings.controller.js";

import {
  protect,
} from "../../middleware/auth.middleware.js";

const router =
  Router();

router.use(protect);

router.get(
  "/",
  getSettings
);

router.patch(
  "/profile",
  updateProfile
);

router.patch(
  "/organization",
  updateOrganization
);

export default router;