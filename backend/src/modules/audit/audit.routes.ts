import {
  Router,
} from "express";

import {
  protect,
} from "../../middleware/auth.middleware.js";

import {
  getAuditLogs,
  getAuditLog,
  deleteAuditLog,
} from "./audit.controller.js";

const router =
  Router();

/*
=========================================
Protected Routes
=========================================
*/

router.use(
  protect
);

/*
=========================================
Get All Audit Logs
GET /audit
=========================================
*/

router.get(
  "/",
  getAuditLogs
);

/*
=========================================
Get Single Audit Log
GET /audit/:id
=========================================
*/

router.get(
  "/:id",
  getAuditLog
);

/*
=========================================
Delete Audit Log
DELETE /audit/:id
=========================================
*/

router.delete(
  "/:id",
  deleteAuditLog
);

export default router;