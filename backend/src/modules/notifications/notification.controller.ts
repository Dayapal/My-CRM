import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as NotificationService
from "./notification.service.js";

export const getNotifications =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const data =
        await NotificationService.getNotifications(
          req.user.userId
        );

      res.json({
        success: true,
        data,
      });
    }
  );

export const markAsRead =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const notification =
        await NotificationService.markAsRead(
          req.params.id as string
        );

      res.json({
        success: true,
        data: notification,
      });
    }
  );