import {
  Router,
} from "express";

import {

  protect,

} from "../../middleware/auth.middleware.js";

import {

  validate,

} from "../../middleware/validate.middleware.js";

import {

  createWorkflowSchema,

  updateWorkflowSchema,

} from "./workflow.validation.js";

import {

  createWorkflow,

  getWorkflows,

  getWorkflow,

  updateWorkflow,

  deleteWorkflow,

} from "./workflow.controller.js";

const router =
  Router();

router.use(
  protect
);

/*
=========================================
Create Workflow
=========================================
*/

router.post(

  "/",

  validate(
    createWorkflowSchema
  ),

  createWorkflow

);

/*
=========================================
Get All Workflows
=========================================
*/

router.get(

  "/",

  getWorkflows

);

/*
=========================================
Get Workflow By Id
=========================================
*/

router.get(

  "/:id",

  getWorkflow

);

/*
=========================================
Update Workflow
=========================================
*/

router.patch(

  "/:id",

  validate(
    updateWorkflowSchema
  ),

  updateWorkflow

);

/*
=========================================
Delete Workflow
=========================================
*/

router.delete(

  "/:id",

  deleteWorkflow

);

export default router;