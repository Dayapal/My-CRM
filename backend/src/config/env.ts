import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 5000,

  mongoUri: process.env.MONGO_URI || "",

  accessSecret:
    process.env.JWT_ACCESS_SECRET || "",

  refreshSecret:
    process.env.JWT_REFRESH_SECRET || "",

  accessExpiry:
    process.env.ACCESS_TOKEN_EXPIRES || "15m",

  refreshExpiry:
    process.env.REFRESH_TOKEN_EXPIRES || "7d",
};