import { Router } from "express";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./user.controller.js";

import {
  protect,
} from "../../middleware/auth.middleware.js";

const router = Router();

router.use(protect);

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;