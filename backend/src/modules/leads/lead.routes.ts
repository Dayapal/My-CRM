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
export default router;