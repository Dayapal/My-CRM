import { Router }
from "express";

import {
  protect,
} from "../../middleware/auth.middleware.js";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  createDocumentSchema,
} from "./document.validation.js";

import {
  uploadDocument,
  getDocuments,
  getEntityDocuments,
  deleteDocument,
} from "./document.controller.js";

import upload
from "../../middleware/upload.middleware.js";

const router =
  Router();

router.use(protect);

/*
==================================
POST /documents
==================================
*/

router.post(
  "/",
  upload.single("file"),
  validate(
    createDocumentSchema
  ),
  uploadDocument
);

/*
==================================
GET /documents
==================================
*/

router.get(
  "/",
  getDocuments
);

/*
==================================
GET /documents/entity/Lead/:id
==================================
*/

router.get(
  "/entity/:entityType/:entityId",
  getEntityDocuments
);

/*
==================================
DELETE /documents/:id
==================================
*/

router.delete(
  "/:id",
  deleteDocument
);

export default router;