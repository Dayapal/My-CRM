import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as DashboardService
from "./dashboard.service.js";

export const getDashboard =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const data =
        await DashboardService.getDashboardData(
          req.user.organizationId
        );

      res.json({
        success: true,
        data,
      });
    }
  );

  export const getDashboardOverview =
  asyncHandler(
    async (
      req:Request,
      res:Response
    ) => {
      const data =
        await DashboardService.getDashboardOverview(
          req.user.organizationId
        );

      res.json({
        success: true,
        data,
      });
    }
  );