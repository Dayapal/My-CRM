import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as NoteService
from "./note.service.js";

export const createNote =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const note =
        await NoteService.createNote(
          req.body,
          req.user.organizationId,
          req.user.userId
        );

      res.status(201).json({
        success: true,
        message:
          "Note created successfully",
        data: note,
      });

    }
  );

export const getNotes =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const notes =
        await NoteService.getNotes(
          req.user.organizationId
        );

      res.json({
        success: true,
        data: notes,
      });

    }
  );

export const getNote =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const note =
        await NoteService.getNoteById(
          req.params.id as string,
          req.user.organizationId
        );

      res.json({
        success: true,
        data: note,
      });

    }
  );

export const getEntityNotes =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const notes =
        await NoteService.getEntityNotes(
          req.params.entityType as string,
          req.params.entityId as string,
          req.user.organizationId as string
        );

      res.json({
        success: true,
        data: notes,
      });

    }
  );

export const updateNote =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const note =
        await NoteService.updateNote(
          req.params.id as string,
          req.user.organizationId,
          req.body
        );

      res.json({
        success: true,
        message:
          "Note updated successfully",
        data: note,
      });

    }
  );

export const deleteNote =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      await NoteService.deleteNote(
        req.params.id as string,
        req.user.organizationId
      );

      res.json({
        success: true,
        message:
          "Note deleted successfully",
      });

    }
  );