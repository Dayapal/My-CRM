import {
  Workflow,
} from "./workflow.model.js";

import {
  ApiError,
} from "../../utils/ApiError.js";

/*
=========================================
Create Workflow
=========================================
*/

export async function createWorkflow(
  payload: {
    name: string;
    trigger: string;
    conditions: string[];
    actions: string[];
  },
  organization: string,
  createdBy: string
) {
  return await Workflow.create({
    ...payload,
    organization,
    createdBy,
  });

}

/*
=========================================
Get All Workflows
=========================================
*/

export async function getWorkflows(
  organization: string
) {

  return Workflow
    .find({
      organization,
    })
    .populate(
      "createdBy",
      "firstName lastName email"
    )
    .sort({
      createdAt: -1,});

}

/*
=========================================
Get Single Workflow
=========================================
*/
export async function getWorkflowById(
  id: string,
  organization: string
) {
  const workflow =
    await Workflow
      .findOne({
        _id: id,
        organization,
      })
      .populate(
        "createdBy",
        "firstName lastName email"
      );

  if (!workflow) {
    throw new ApiError(
      404,
      "Workflow not found"
    );

  }

  return workflow;

}

/*
=========================================
Update Workflow
=========================================
*/

export async function updateWorkflow(
  id: string,
  organization: string,
  payload: Partial<{
    name: string;
    trigger: string;
    conditions: string[];
    actions: string[];
    isActive: boolean;
  }>
) {

  const workflow =
    await Workflow.findOneAndUpdate(

      {
        _id: id,
        organization,
      },

      payload,

      {
        new: true,
      }

    );

  if (!workflow) {

    throw new ApiError(
      404,
      "Workflow not found"
    );

  }

  return workflow;

}

/*
=========================================
Delete Workflow
=========================================
*/

export async function deleteWorkflow(
  id: string,
  organization: string
) {

  const workflow =
    await Workflow.findOneAndDelete({

      _id: id,

      organization,

    });

  if (!workflow) {

    throw new ApiError(
      404,
      "Workflow not found"
    );

  }

  return workflow;

}