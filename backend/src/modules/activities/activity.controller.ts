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


  

  export const getUserActivities =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const activities =
        await ActivityService.getUserActivities(
          req.user.organizationId,
          req.params.userId as string
        );

      res.json({
        success: true,
        data: activities,
      });

    }
  );

export const getEntityActivities =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const activities =
        await ActivityService.getEntityActivities(
          req.user.organizationId,
          req.params.entityId as string
        );

      res.json({
        success: true,
        data: activities,
      });

    }
  );