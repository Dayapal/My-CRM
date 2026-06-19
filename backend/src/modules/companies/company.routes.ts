import { Router }
from "express";

import {
  createCompany,
  getCompanies,
  getCompany,
updateCompany,
deleteCompany,
getCompanyDetails
  
} from "./company.controller.js";

import {
  protect,
} from "../../middleware/auth.middleware.js";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  createCompanySchema,
  updateCompanySchema
} from "./company.validation.js";

const router =
  Router();

router.use(protect);

router.post(
  "/",
  validate(
    createCompanySchema
  ),
  createCompany
);

router.get(
  "/",
  getCompanies
);

router.get(
  "/:id",
  getCompany
);

router.patch(
  "/:id",
  validate(
    updateCompanySchema
  ),
  updateCompany
);

router.delete(
  "/:id",
  deleteCompany
);

router.get(
  "/:id/details",
  getCompanyDetails
);
export default router;