import { Router }
from "express";

import {
  protect,
} from "../../middleware/auth.middleware.js";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  searchSchema,
} from "./search.validation.js";

import {
  globalSearch,
} from "./search.controller.js";

const router =
  Router();

router.use(protect);

/*
=========================================
GET /search?q=john
=========================================
*/

router.get(
  "/",
  validate(searchSchema),
  globalSearch
);

export default router;