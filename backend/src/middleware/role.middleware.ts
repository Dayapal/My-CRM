import {
  Request,
  Response,
  NextFunction
} from "express";

import {
  ApiError
} from "../utils/ApiError.js";

export const authorize =
  (...roles: string[]) =>
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (
      !roles.includes(
        req.user.role
      )
    ) {
      return next(
        new ApiError(
          403,
          "Forbidden"
        )
      );
    }

    next();
  };