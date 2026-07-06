import { Router }
from "express";

import {createNote, getNotes,getNote,getEntityNotes,updateNote,deleteNote,}from "./note.controller.js";

import {
  protect,
}
from "../../middleware/auth.middleware.js";

import {validate,}from "../../middleware/validate.middleware.js";

import {createNoteSchema,updateNoteSchema,}from "./note.validation.js";

const router =
  Router();

router.use(protect);

/*
=========================================
Create Note
POST /notes
=========================================
*/

router.post(
  "/",
  validate(
    createNoteSchema
  ),
  createNote
);

/*
=========================================
Get All Notes
GET /notes
=========================================
*/

router.get(
  "/",
  getNotes
);

/*
=========================================
Get Notes By Entity
GET /notes/entity/Lead/:entityId
=========================================
*/

router.get(
  "/entity/:entityType/:entityId",
  getEntityNotes
)
/*
=========================================
Get Single Note
GET /notes/:id
=========================================
*/
router.get(
  "/:id",
  getNote
);

/*
=========================================
Update Note
PATCH /notes/:id
=========================================
*/

router.patch(
  "/:id",
  validate(
    updateNoteSchema
  ),
  updateNote
);

/*
=========================================
Delete Note
DELETE /notes/:id
=========================================
*/

router.delete(
  "/:id",
  deleteNote
);

export default router;