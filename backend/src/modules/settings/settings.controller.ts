import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as SettingsService
from "./settings.service.js";

export const getSettings =
asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {

    const data =
      await SettingsService.getSettings(
        req.user.userId,
        req.user.organizationId
      );

    res.json({
      success: true,
      data,
    });
  }
);

export const updateProfile =
asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {

    const user =
      await SettingsService.updateProfile(
        req.user.userId,
        req.body
      );

    res.json({
      success: true,
      data: user,
    });
  }
);

export const updateOrganization =
asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {

    const organization =
      await SettingsService.updateOrganization(
        req.user.organizationId,
        req.body
      );

    res.json({
      success: true,
      data: organization,
    });
  }
);