import { Note }
from "./note.model.js";

import {
  createActivity,
}
from "../activities/activity.service.js";

import {
  ACTIVITY_TYPES,
}
from "../../constants/index.js";

export const createNote =
  async (
    payload: any,
    organizationId: string,
    userId: string
  ) => {

    const note =
      await Note.create({

        ...payload,

        createdBy:
          userId,

        organization:
          organizationId,

      });

    await createActivity({

      organization:
        organizationId,

      user:
        userId,

      type:
        ACTIVITY_TYPES.NOTE_CREATED,

      entityType:
        "Note",

      entityId:
        note._id.toString(),

      description:
        `Note added to ${payload.entityType}`,

    });

    return Note.findById(
      note._id
    ).populate(
      "createdBy",
      "firstName lastName email"
    );

  };

export const getNotes =
  async (
    organizationId: string
  ) => {

    return Note.find({

      organization:
        organizationId,

    })

      .populate(
        "createdBy",
        "firstName lastName"
      )

      .sort({
        createdAt: -1,
      });

  };

export const getNoteById =
  async (
    noteId: string,
    organizationId: string
  ) => {

    return Note.findOne({

      _id: noteId,

      organization:
        organizationId,

    }).populate(
      "createdBy",
      "firstName lastName email"
    );

  };

export const getEntityNotes =
  async (
    entityType: string,
    entityId: string,
    organizationId: string
  ) => {

    return Note.find({

      entityType,

      entityId,

      organization:
        organizationId,

    })

      .populate(
        "createdBy",
        "firstName lastName"
      )

      .sort({
        createdAt: -1,
      });

  };

export const updateNote =
  async (
    noteId: string,
    organizationId: string,
    payload: any
  ) => {

    return Note.findOneAndUpdate(

      {

        _id: noteId,

        organization:
          organizationId,

      },

      payload,

      {

        new: true,

        runValidators: true,

      }

    ).populate(
      "createdBy",
      "firstName lastName email"
    );

  };

export const deleteNote =
  async (
    noteId: string,
    organizationId: string
  ) => {

    return Note.findOneAndDelete({

      _id: noteId,

      organization:
        organizationId,

    });

  };