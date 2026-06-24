import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as ReportService
from "./report.service.js";

export const getDashboardReport =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const report =
        await ReportService.getDashboardReport(
          req.user.organizationId
        );

      res.json({
        success: true,
        data: report,
      });

    }
  );    