import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as DealService
from "./deal.service.js";

export const createDeal =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const deal =
        await DealService.createDeal(
          req.body,
          req.user.organizationId,
          req.user.userId
        );

      res.status(201).json({
        success: true,
        message:
          "Deal created",
        data: deal,
      });
    }
  );

export const getDeals =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const deals =
        await DealService.getDeals(
          req.user.organizationId
        );

      res.json({
        success: true,
        data: deals,
      });
    }
  );

export const updateDealStage =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const deal =
        await DealService.updateDealStage(
          req.params.id as string,
          req.user.organizationId,
          req.user.userId,
          req.body.stage
        );

      res.json({
        success: true,
        message:
          "Deal stage updated",
        data: deal,
      });
    }
  );

  export const getDeal =
  asyncHandler(
    async (
      req:Request,
      res:Response
    ) => {
      const deal =
        await DealService.getDealById(
          req.params.id as string,
          req.user.organizationId
        );

      res.json({
        success: true,
        data: deal,
      });
    }
      );

      export const getDealMetrics =
  asyncHandler(
    async (
      req : Request,
      res:Response
    ) => {
      const metrics =
        await DealService.getDealMetrics(
          req.user.organizationId
        );

      res.json({
        success: true,
        data: metrics,
      });
    }
  );


  export const getKanbanDeals =
  asyncHandler(
    async (
      req: Request,
      res:Response
    ) => {
      const data =
        await DealService.getKanbanDeals(
          req.user.organizationId
        );

      res.json({
        success: true,
        data,
      });
    }
  );



  export const updateDeal =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const deal =
        await DealService.updateDeal(
          req.params.id as string,
          req.user.organizationId,
          req.body
        );

      res.json({
        success: true,
        message: "Deal updated",
        data: deal,
      });
    }
  );

export const deleteDeal =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      await DealService.deleteDeal(
        req.params.id as string,
        req.user.organizationId
      );

      res.json({
        success: true,
        message: "Deal deleted",
      });
    }
  );