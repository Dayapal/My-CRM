import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

interface TokenPayload {
  userId: string;
  organizationId: string;
  role: string;
}

export const generateAccessToken = (
  payload: TokenPayload
) => {
  return jwt.sign(
    payload,
    env.accessSecret,
    {
      expiresIn: env.accessExpiry as jwt.SignOptions["expiresIn"]
    }
  );
};

export const generateRefreshToken = (
  payload: TokenPayload
) => {
  return jwt.sign(
    payload,
    env.refreshSecret,
    {
      expiresIn: env.refreshExpiry as jwt.SignOptions["expiresIn"]
    }
  );
};

export const verifyAccessToken = (
  token: string
) => {
  return jwt.verify(
    token,
    env.accessSecret
  ) as TokenPayload;
};

export const verifyRefreshToken = (
  token: string
) => {
  return jwt.verify(
    token,
    env.refreshSecret
  ) as TokenPayload;
};