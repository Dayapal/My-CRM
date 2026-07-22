import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as AuditService
from "./audit.service.js";

/*
=========================================
Get All Audit Logs
GET /audit
=========================================
*/

export const getAuditLogs =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const logs =
        await AuditService.getAuditLogs(
          req.user.organizationId
        );

      res.json({
        success: true,
        data: logs,
      });

    }
  );

/*
=========================================
Get Single Audit Log
GET /audit/:id
=========================================
*/

export const getAuditLog =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const log =
        await AuditService.getAuditLogById(
          req.params.id as string,
          req.user.organizationId
        );

      res.json({
        success: true,
        data: log,
      });

    }
  );

/*
=========================================
Delete Audit Log
DELETE /audit/:id
=========================================
*/

export const deleteAuditLog =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      await AuditService.deleteAuditLog(
        req.params.id as string,
        req.user.organizationId
      );

      res.json({
        success: true,
        message:
          "Audit log deleted successfully",
      });

    }
  );