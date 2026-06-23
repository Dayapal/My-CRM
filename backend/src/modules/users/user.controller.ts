import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as UserService
from "./user.service.js";

export const getUsers =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const users =
        await UserService.getUsers(
          req.user.organizationId
        );

      res.json({
        success: true,
        data: users,
      });
    }
  );

export const getUser =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const user =
        await UserService.getUserById(
          req.params.id as string,
          req.user.organizationId
        );

      res.json({
        success: true,
        data: user,
      });
    }
  );

export const createUser =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const user =
        await UserService.createUser(
          req.body,
          req.user.organizationId
        );

      res.status(201).json({
        success: true,
        data: user,
      });
    }
  );

export const updateUser =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const user =
        await UserService.updateUser(
          req.params.id as string,
          req.user.organizationId,
          req.body
        );

      res.json({
        success: true,
        data: user,
      });
    }
  );

export const deleteUser =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      await UserService.deleteUser(
        req.params.id as string,
        req.user.organizationId
      );

      res.json({
        success: true,
        message:
          "User deleted",
      });
    }
  );