import { api } from "@/services/api";

import type {
  CreateNotePayload,
  UpdateNotePayload,
} from "./note.types";

export const getNotes =
  async () => {
    const response =
      await api.get("/notes");

    return response.data.data;
  };

export const getNote =
  async (
    noteId: string
  ) => {
    const response =
      await api.get(
        `/notes/${noteId}`
      );

    return response.data.data;
  };

export const getEntityNotes =
  async (
    entityType: string,
    entityId: string
  ) => {
    const response =
      await api.get(
        `/notes/entity/${entityType}/${entityId}`
      );

    return response.data.data;
  };

export const createNote =
  async (
    payload: CreateNotePayload
  ) => {
    const response =
      await api.post(
        "/notes",
        payload
      );

    return response.data;
  };

export const updateNote =
  async (
    noteId: string,
    payload: UpdateNotePayload
  ) => {
    const response =
      await api.patch(
        `/notes/${noteId}`,
        payload
      );

    return response.data;
  };

export const deleteNote =
  async (
    noteId: string
  ) => {
    const response =
      await api.delete(
        `/notes/${noteId}`
      );

    return response.data;
  };