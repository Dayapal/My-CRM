import { Router } from "express";

import {register,login,logout,refreshToken, me} from "./auth.controller.js";

import {protect} from "../../middleware/auth.middleware.js";

import {registerSchema,loginSchema,} from "./auth.validation.js";

import {validate,} from "../../middleware/validate.middleware.js";

const router =Router();
router.post("/register",register);
router.post("/login",login);
router.post("/logout",logout);
router.post(
  "/refresh-token",
  refreshToken
);

router.get(
  "/me",
  protect,
  me
);

router.post(
  "/register",
  validate(registerSchema),
  register
);

router.post(
  "/login",
  validate(loginSchema),
  login
);
export default router;