import { Router }
from "express";

import {
  createDeal,
  getDeals,
  updateDealStage,
  getDeal,
  getDealMetrics,
  getKanbanDeals,
  updateDeal,
deleteDeal
} from "./deal.controller.js";

import {
  protect,
} from "../../middleware/auth.middleware.js";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  createDealSchema,
  updateDealStageSchema,
} from "./deal.validation.js";

const router =
  Router();

router.use(protect);

router.post(
  "/",
  validate(
    createDealSchema
  ),
  createDeal
);
router.get(
  "/kanban",
  getKanbanDeals
);
router.get(
    "/",
    getDeals
);

router.get(
  "/metrics",
  getDealMetrics
);

router.patch(
  "/:id/stage",
  validate(
    updateDealStageSchema
  ),
  updateDealStage
);
router.get(
  "/:id",
  getDeal
);

router.patch(
  "/:id",
  updateDeal
);

router.delete(
  "/:id",
  deleteDeal
);

export default router;