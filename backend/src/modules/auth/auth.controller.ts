import { Request, Response } from "express";

import {
  registerUser,
  loginUser
} from "./auth.service.js";

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken
} from "../../utils/jwt.js";

import { asyncHandler } from "../../utils/asyncHandler.js";

import { User } from "../users/user.model.js";
import { ApiError } from "../../utils/ApiError.js";
export const register = asyncHandler(
    
  async (
    req: Request,
    res: Response
  ) => {
    const result =
      await registerUser(req.body);
    res.status(201).json({
      success: true,
      message:
        "Account created successfully",
      data: result
    });
  }
);
export const login = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const { email, password } =
      req.body;

    const user =
      await loginUser(
        email,password
      );

    if (!user.organization) {
      throw new ApiError(
        500,
        "User organization missing"
      );
    }

    const accessToken =
      generateAccessToken({
        userId:
          user._id.toString(),
        organizationId:
          user.organization.toString(),
        role: user.role
      });

    const refreshToken =
      generateRefreshToken({
        userId:
          user._id.toString(),
        organizationId:
          user.organization.toString(),
        role: user.role
      });

    user.refreshToken =
      refreshToken;

    await user.save();

    res.cookie(
      "refreshToken",
      refreshToken,
      {
        httpOnly: true,
        secure: false, // change to process.env.NODE_ENV === "production"
        sameSite: "lax"
      }
    );

    const safeUser =
  await User.findById(
    user._id
  ).select("-password -refreshToken");

    res.json({
      success: true,
      accessToken,
      user: safeUser
    });
  }
);



export const logout = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const token =
      req.cookies.refreshToken;

    if (token) {
      const user =
        await User.findOne({
          refreshToken: token
        });

      if (user) {
        user.refreshToken =
          undefined;

        await user.save();
      }
    }

    res.clearCookie(
      "refreshToken"
    );

    res.json({
      success: true,
      message:
        "Logged out successfully"
    });
  }
);

export const me = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const user =
      await User.findById(
        req.user.userId
      )
        .select("-password")
        .populate(
          "organization"
        );

    res.json({
      success: true,
      data: user
    });
  }
);

export const refreshToken = asyncHandler(
  async (
    req: Request,
    res: Response
  ) => {
    const token =
      req.cookies.refreshToken;

    if (!token) {
      throw new ApiError(
        401,
        "Refresh token missing"
      );
    }

    const payload =
      verifyRefreshToken(token);

    const user =
      await User.findById(
        payload.userId
      );

    if (!user) {
      throw new ApiError(
        401,
        "User not found"
      );
    }

    if (
      user.refreshToken !== token
    ) {
      throw new ApiError(
        401,
        "Invalid refresh token"
      );
    }

    if (!user.organization) {
      throw new ApiError(
        500,
        "User organization missing"
      );
    }

    const accessToken =
      generateAccessToken({
        userId:
          user._id.toString(),
        organizationId:
          user.organization.toString(),
        role: user.role
      });

    res.json({
      success: true,
      accessToken
    });
  }
);