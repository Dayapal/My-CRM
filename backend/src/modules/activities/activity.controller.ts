import { Request, Response }
from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as ActivityService
from "./activity.service.js";

export const getActivities =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const activities =
        await ActivityService.getRecentActivities(
          req.user
            .organizationId
        );

      res.json({
        success: true,
        data:
          activities,
      });
    }
  );


  