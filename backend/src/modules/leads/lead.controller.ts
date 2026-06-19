import { Request, Response } from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";
import { ApiError }
from "../../utils/ApiError.js"

import { convertLeadToContact } from "./lead-conversion.service.js";

import * as LeadService
from "./lead.service.js";

export const createLead =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const lead =
        await LeadService.createLead(
          req.body,
          req.user.organizationId,
          req.user.userId
        );

      res.status(201).json({
        success: true,
        message:
          "Lead created",
        data: lead,
      });
    }
  );

  export const getLeads =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const result =
        await LeadService.getLeads(
          req.user
            .organizationId,

          req.query
        );

      res.json({
        success: true,
        data: result,
      });
    }
  );

  export const getLead =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const lead =
        await LeadService.getLeadById(
          req.params.id as string,
          req.user
            .organizationId
        );

      res.json({
        success: true,
        data: lead,
      });
    }
  );

export const updateLead =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const lead =
        await LeadService.updateLead(
          req.params.id as string,
          req.user.organizationId,
          req.body,
          req.user.userId
        );

      if (!lead) {
        throw new ApiError(
          404,
          "Lead not found"
        );
      }

      res.json({
        success: true,
        message:
          "Lead updated",
        data: lead,
      });
    }
  );


  export const deleteLead =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      await LeadService.deleteLead(
        req.params.id as string,
        req.user
          .organizationId
      );

      res.json({
        success: true,
        message:
          "Lead deleted",
      });
    }
  );


  export const assignLead =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const lead =
        await LeadService.assignLead(
          req.params.id as string,
          req.user
            .organizationId,
          req.body.userId
        );

      res.json({
        success: true,
        message:
          "Lead assigned",
        data: lead,
      });
    }
  );

  export const convertLead =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const result =
        await convertLeadToContact(
          req.params.id as string,
          req.user.organizationId,
          req.user.userId
        );

      res.status(200).json({
        success: true,
        message:
          "Lead converted successfully",
        data: result,
      });
    }
  );