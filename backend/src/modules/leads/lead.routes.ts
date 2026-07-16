import { Router }from "express";

import {
  createLead,
  getLeads,
  getLead,
  updateLead,
  deleteLead,
  assignLead,
  convertLead,
  
}
from "./lead.controller.js";

import {
  protect
}
from "../../middleware/auth.middleware.js";

import {
  validate
}
from "../../middleware/validate.middleware.js";

import {
  createLeadSchema,
   updateLeadSchema,
}
from "./lead.validation.js";

import { checkPermission } from "../../middleware/permission.middleware.js";
// import { checkPermission } from "../../middleware/permission.middleware";
import { PERMISSIONS } from "../../constants/permissions.js";

const router =
  Router();

  router.use(protect);

router.post(
  "/",
  validate(
    createLeadSchema
  ),
  createLead
);

router.get(
  "/",
  getLeads
);

router.get(
  "/:id",
  getLead
);

router.patch(
  "/:id",
  validate(updateLeadSchema),
  updateLead
);

router.delete(
  "/:id",
  deleteLead
);

router.patch(
  "/:id/assign",
  assignLead
);
router.post(
  "/:id/convert",
  convertLead
);

router.post(
  "/",
  protect,
  checkPermission(PERMISSIONS.CREATE_LEAD),
  createLead
);

router.patch(
  "/:id",
  protect,
  checkPermission(PERMISSIONS.EDIT_LEAD),
  updateLead
);

router.delete(
  "/:id",
  protect,
  checkPermission(PERMISSIONS.DELETE_LEAD),
  deleteLead
);
export default router;