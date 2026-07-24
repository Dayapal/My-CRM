import {
  Request,
  Response,
} from "express";

import {
  asyncHandler,
} from "../../utils/asyncHandler.js";

import * as WorkflowService
from "./workflow.service.js";

/*
=========================================
Create Workflow
POST /workflow
=========================================
*/

export const createWorkflow =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const workflow =
        await WorkflowService.createWorkflow(

          req.body,

          req.user.organizationId,

          req.user.userId

        );

      res.status(201).json({

        success: true,

        message:
          "Workflow created successfully",

        data: workflow,

      });

    }
  );

/*
=========================================
Get All Workflows
GET /workflow
=========================================
*/

export const getWorkflows =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const workflows =
        await WorkflowService.getWorkflows(

          req.user.organizationId

        );

      res.json({

        success: true,

        data: workflows,

      });

    }
  );

/*
=========================================
Get Workflow By Id
GET /workflow/:id
=========================================
*/

export const getWorkflow =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const workflow =
        await WorkflowService.getWorkflowById(

          req.params.id as string,

          req.user.organizationId

        );

      res.json({

        success: true,

        data: workflow,

      });

    }
  );

/*
=========================================
Update Workflow
PATCH /workflow/:id
=========================================
*/

export const updateWorkflow =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const workflow =
        await WorkflowService.updateWorkflow(

          req.params.id as string,

          req.user.organizationId,

          req.body

        );

      res.json({

        success: true,

        message:
          "Workflow updated successfully",

        data: workflow,

      });

    }
  );

/*
=========================================
Delete Workflow
DELETE /workflow/:id
=========================================
*/

export const deleteWorkflow =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      await WorkflowService.deleteWorkflow(

        req.params.id as string,

        req.user.organizationId

      );

      res.json({

        success: true,

        message:
          "Workflow deleted successfully",

      });

    }
  );