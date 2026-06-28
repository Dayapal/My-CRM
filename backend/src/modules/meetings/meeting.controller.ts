import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as MeetingService
from "./meeting.service.js";

import {
  ApiError,
} from "../../utils/ApiError.js";

export const createMeeting =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const meeting =
        await MeetingService.createMeeting(
          req.body,
          req.user.organizationId,
          req.user.userId
        );

      res.status(201).json({
        success: true,
        message:
          "Meeting created successfully",
        data: meeting,
      });

    }
  );

export const getMeetings =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const meetings =
        await MeetingService.getMeetings(
          req.user.organizationId
        );

      res.json({
        success: true,
        data: meetings,
      });

    }
  );

export const getMeeting =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const meeting =
        await MeetingService.getMeetingById(
          req.params.id as string,
          req.user.organizationId
        );

      if (!meeting) {

        throw new ApiError(
          404,
          "Meeting not found"
        );

      }

      res.json({
        success: true,
        data: meeting,
      });

    }
  );

export const updateMeeting =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const meeting =
        await MeetingService.updateMeeting(
          req.params.id as string,
          req.user.organizationId,
          req.body,
          req.user.userId
        );

      if (!meeting) {

        throw new ApiError(
          404,
          "Meeting not found"
        );

      }

      res.json({
        success: true,
        message:
          "Meeting updated successfully",
        data: meeting,
      });

    }
  );

export const deleteMeeting =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const meeting =
        await MeetingService.deleteMeeting(
          req.params.id as string,
          req.user.organizationId
        );

      if (!meeting) {

        throw new ApiError(
          404,
          "Meeting not found"
        );

      }

      res.json({
        success: true,
        message:
          "Meeting deleted successfully",
      });

    }
  );

export const updateMeetingStatus =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const meeting =
        await MeetingService.updateMeetingStatus(
          req.params.id as string,
          req.user.organizationId,
          req.user.userId,
          req.body.status
        );

      if (!meeting) {

        throw new ApiError(
          404,
          "Meeting not found"
        );

      }

      res.json({
        success: true,
        message:
          "Meeting status updated",
        data: meeting,
      });

    }
  );

export const getCalendarMeetings =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const meetings =
        await MeetingService.getCalendarMeetings(
          req.user.organizationId
        );

      res.json({
        success: true,
        data: meetings,
      });

    }
  );