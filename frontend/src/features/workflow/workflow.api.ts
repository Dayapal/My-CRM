import { api } from "@/services/api";

import type {
  Workflow,
} from "./workflow.types";

/*
=========================================
Get All Workflows
=========================================
*/

export const getWorkflows =
  async () => {

    const response =
      await api.get<{
        success: boolean;
        data: Workflow[];
      }>("/workflow");

    return response.data;

  };

/*
=========================================
Get Single Workflow
=========================================
*/

export const getWorkflow =
  async (
    id: string
  ) => {

    const response =
      await api.get<{
        success: boolean;
        data: Workflow;
      }>(
        `/workflow/${id}`
      );

    return response.data;

  };

/*
=========================================
Create Workflow
=========================================
*/

export const createWorkflow =
  async (
    payload: {
      name: string;
      trigger: string;
      conditions: string[];
      actions: string[];
    }
  ) => {

    const response =
      await api.post(
        "/workflow",
        payload
      );

    return response.data;

  };

/*
=========================================
Update Workflow
=========================================
*/

export const updateWorkflow =
  async (
    id: string,
    payload: Partial<Workflow>
  ) => {

    const response =
      await api.patch(
        `/workflow/${id}`,
        payload
      );

    return response.data;

  };

/*
=========================================
Delete Workflow
=========================================
*/

export const deleteWorkflow =
  async (
    id: string
  ) => {

    const response =
      await api.delete(
        `/workflow/${id}`
      );

    return response.data;

  };