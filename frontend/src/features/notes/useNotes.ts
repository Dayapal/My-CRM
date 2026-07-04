import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getNotes,
  getNote,
  getEntityNotes,
  createNote,
  updateNote,
  deleteNote,
} from "./notes.api";

export const useNotes =
  () => {

    return useQuery({

      queryKey: [
        "notes",
      ],

      queryFn:
        getNotes,

    });

  };

export const useNote =
  (
    noteId: string
  ) => {

    return useQuery({

      queryKey: [
        "note",
        noteId,
      ],

      queryFn: () =>
        getNote(
          noteId
        ),

      enabled:
        !!noteId,

    });

  };

export const useEntityNotes =
  (
    entityType: string,
    entityId: string
  ) => {

    return useQuery({

      queryKey: [
        "entity-notes",
        entityType,
        entityId,
      ],

      queryFn: () =>
        getEntityNotes(
          entityType,
          entityId
        ),

      enabled:
        !!entityType &&
        !!entityId,

    });

  };

export const useCreateNote =
  () => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn:
        createNote,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: [
            "notes",
          ],
        });

        queryClient.invalidateQueries({
          queryKey: [
            "entity-notes",
          ],
        });

      },

    });

  };

export const useUpdateNote =
  () => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn: ({
        noteId,
        payload,
      }: {
        noteId: string;
        payload: any;
      }) =>
        updateNote(
          noteId,
          payload
        ),

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: [
            "notes",
          ],
        });

      },

    });

  };

export const useDeleteNote =
  () => {

    const queryClient =
      useQueryClient();

    return useMutation({

      mutationFn:
        deleteNote,

      onSuccess: () => {

        queryClient.invalidateQueries({
          queryKey: [
            "notes",
          ],
        });

        queryClient.invalidateQueries({
          queryKey: [
            "entity-notes",
          ],
        });

      },

    });

  };