import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as CompanyService
from "./company.service.js";

export const createCompany =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const company =
        await CompanyService.createCompany(
          req.body,
          req.user
            .organizationId
        );

      res.status(201).json({
        success: true,
        message:
          "Company created",
        data: company,
      });
    }
  );

export const getCompanies =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const companies =
        await CompanyService.getCompanies(
          req.user
            .organizationId,
          req.query
        );

      res.json({
        success: true,
        data: companies,
      });
    }
  );

  export const getCompany =
  asyncHandler(
    async (
    req: Request,
      res: Response
    ) => {
      const company =
        await CompanyService.getCompanyById(
          req.params.id as string,
          req.user.organizationId
        );

      res.json({
        success: true,
        data: company,
      });
    }
  );

  export const updateCompany =
  asyncHandler(
    async (
     req: Request,
      res: Response
    ) => {
      const company =
        await CompanyService.updateCompany(
          req.params.id as string,
          req.user.organizationId,
          req.body
        );

      res.json({
        success: true,
        message:
          "Company updated",
        data: company,
      });
    }
  );

  export const deleteCompany =
  asyncHandler(
    async (
      req : Request,
      res: Response
    ) => {
      await CompanyService.deleteCompany(
        req.params.id as string,
        req.user.organizationId
      );

      res.json({
        success: true,
        message:
          "Company deleted",
      });
    }
  );

  export const getCompanyDetails =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {
      const result =
        await CompanyService.getCompanyDetails(
          req.params.id as string,
          req.user.organizationId
        );

      res.json({
        success: true,
        data: result,
      });
    }
  );