import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getWorkflows,
  getWorkflow,
  createWorkflow,
  updateWorkflow,
  deleteWorkflow,
} from "./workflow.api";

import type {
  Workflow,
} from "./workflow.types";

/*
=========================================
Get All Workflows
=========================================
*/

export function useWorkflows() {

  return useQuery({

    queryKey: [
      "workflows",
    ],

    queryFn:
      getWorkflows,

  });

}

/*
=========================================
Get Single Workflow
=========================================
*/

export function useWorkflow(
  id: string
) {

  return useQuery({

    queryKey: [
      "workflow",
      id,
    ],

    queryFn: () =>
      getWorkflow(id),

    enabled: !!id,

  });

}

/*
=========================================
Create Workflow
=========================================
*/

export function useCreateWorkflow() {

  const queryClient =
    useQueryClient();

  return useMutation({

    mutationFn:
      createWorkflow,

    onSuccess: () => {

      queryClient.invalidateQueries({

        queryKey: [
          "workflows",
        ],

      });

    },

  });

}

/*
=========================================
Update Workflow
=========================================
*/

export function useUpdateWorkflow() {

  const queryClient =
    useQueryClient();

  return useMutation({

    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: Partial<Workflow>;
    }) =>
      updateWorkflow(
        id,
        payload
      ),

    onSuccess: () => {

      queryClient.invalidateQueries({

        queryKey: [
          "workflows",
        ],

      });

    },

  });

}

/*
=========================================
Delete Workflow
=========================================
*/

export function useDeleteWorkflow() {

  const queryClient =
    useQueryClient();

  return useMutation({

    mutationFn:
      deleteWorkflow,

    onSuccess: () => {

      queryClient.invalidateQueries({

        queryKey: [
          "workflows",
        ],

      });

    },

  });

}