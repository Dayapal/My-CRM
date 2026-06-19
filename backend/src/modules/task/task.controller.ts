import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as TaskService
from "./task.service.js";

export const createTask =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const task =
        await TaskService.createTask(
          req.body,
          req.user.organizationId,
          req.user.userId
        );

      res.status(201).json({
        success: true,
        message:
          "Task created",
        data: task,
      });
    }
  );

export const getTasks =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const tasks =
        await TaskService.getTasks(
          req.user.organizationId,
          req.query
          
        );

      res.json({
        success: true,
        data: tasks,
      });
    }
  );


  export const updateTaskStatus =
  asyncHandler(
    async (
      req: Request,
      res:Response
    ) => {
      const task =
        await TaskService.updateTaskStatus(
          req.params.id as string,
          req.user.organizationId,
          req.user.userId,
          req.body.status
        );

      res.json({
        success: true,
        message:
          "Task status updated",
        data: task,
      });
    }
  );

export const getTaskMetrics =
  asyncHandler(
    async (
      req:Request,
      res:Response
    ) => {
      const metrics =
        await TaskService.getTaskMetrics(
          req.user.organizationId
        );

      res.json({
        success: true,
        data: metrics,
      });
    }
  );