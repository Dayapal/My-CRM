import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {

  getDocuments,

  getEntityDocuments,

  uploadDocument,

  deleteDocument,

} from "./documents.api";

export const useDocuments =
  () => {

    return useQuery({

      queryKey: [
        "documents",
      ],

      queryFn:
        getDocuments,

    });

  };

export const useEntityDocuments =
  (
    entityType: string,
    entityId: string
  ) => {

    return useQuery({

      queryKey: [

        "documents",

        entityType,

        entityId,

      ],

      queryFn: () =>
        getEntityDocuments(
          entityType,
          entityId
        ),

      enabled:
        !!entityType &&
        !!entityId,

    });

  };

export const useUploadDocument =
  () => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn:
        uploadDocument,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: [
            "documents",
          ],
        });

      },

    });

  };

export const useDeleteDocument =
  () => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn:
        deleteDocument,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: [
            "documents",
          ],
        });

      },

    });

  };