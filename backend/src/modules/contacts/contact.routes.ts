import { Router }
from "express";

import {
  createContact,
  getContacts,
   getContact,
  updateContact,
  deleteContact,
}
from "./contact.controller.js";

import {
  protect,
} from "../../middleware/auth.middleware.js";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  createContactSchema,
   updateContactSchema,
} from "./contact.validation.js";



const router =
  Router();

router.use(protect);

router.post(
  "/",
  validate(
    createContactSchema
  ),
  createContact
);

router.get(
  "/",
  getContacts
);
router.get(
  "/:id",
  getContact
);

router.patch(
  "/:id",
  validate(updateContactSchema),
  updateContact
);

router.delete(
  "/:id",
  deleteContact
);
export default router;