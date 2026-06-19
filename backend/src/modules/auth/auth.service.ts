import { User } from "../users/user.model.js";
import { ROLES } from "../../constants/index.js";
import { Organization } from "../organizations/organization.model.js";
import type {
  RegisterInput,
  LoginInput,
} from "./auth.types.js";

import { hashPassword } from "../../utils/hash.js";
import { ApiError } from "../../utils/ApiError.js";

export const registerUser = async (
  payload: RegisterInput
) => {
  const existingUser =
    await User.findOne({
      email: payload.email,
    });

  if (existingUser) {
    throw new ApiError(
      409,
      "Email already exists"
    );
  }

  const hashedPassword =
    await hashPassword(
      payload.password
    );

  const user =
    await User.create({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: hashedPassword,
      role: ROLES.OWNER,
    });

  const organization =
    await Organization.create({
      name: payload.organizationName,
      slug: payload.organizationName
        .toLowerCase()
        .replace(/\s+/g, "-"),

      owner: user._id,
    });

  user.organization =
    organization._id;

  await user.save();

  return {
    user,
    organization,
  };
};

import { comparePassword } from "../../utils/hash.js";

export const loginUser = async (
  email: string,
  password: string
) => {
  const user =
    await User.findOne({
      email
    });

    console.log("User:", user);
  if (!user) {
    throw new ApiError(
      401,
      "Invalid credentials"
    );
  }

  const isMatch =
    await comparePassword(
      password,
      user.password
    );
console.log("Password Match:", isMatch);
  if (!isMatch) {
    throw new ApiError(
      401,
      "Invalid credentials"
    );
  }

  return user;
};