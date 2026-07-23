import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getAuditLogs,
  getAuditLog,
  deleteAuditLog,
} from "./audit.api";

/*
=========================================
Get All Audit Logs
=========================================
*/

export function useAuditLogs() {

  return useQuery({

    queryKey: ["audit-logs"],

    queryFn: getAuditLogs,

  });

}

/*
=========================================
Get Single Audit Log
=========================================
*/

export function useAuditLog(
  id: string
) {

  return useQuery({

    queryKey: [
      "audit-log",
      id,
    ],

    queryFn: () =>
      getAuditLog(id),

    enabled: !!id,

  });

}

/*
=========================================
Delete Audit Log
=========================================
*/

export function useDeleteAuditLog() {

  const queryClient =
    useQueryClient();

  return useMutation({

    mutationFn:
      deleteAuditLog,

    onSuccess: () => {

      queryClient.invalidateQueries({

        queryKey: [
          "audit-logs",
        ],

      });

    },

  });

}