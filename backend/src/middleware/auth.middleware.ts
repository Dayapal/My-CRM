import {
  Request,
  Response,
  NextFunction
} from "express";

import {
  verifyAccessToken
} from "../utils/jwt.js";

import {
  ApiError
} from "../utils/ApiError.js";

export const protect =
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    console.log(
      "AUTH HEADER:",
      req.headers.authorization
    );

    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith(
        "Bearer "
      )
    ) {
      return next(
        new ApiError(
          401,
          "Unauthorized"
        )
      );
    }

    const token =
      authHeader.split(" ")[1];

    console.log(
      "TOKEN:",
      token
    );

    const payload =
      verifyAccessToken(token);

    console.log(
      "PAYLOAD:",
      payload
    );

    req.user = payload;

    next();
  };