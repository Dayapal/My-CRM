import bcrypt from "bcryptjs";
// import { User } from "../auth/user.model.js";
import { User } from "../users/user.model.js";


export const getUsers = async (
  organizationId: string
) => {
  return User.find({
    organization: organizationId,
  }).select("-password");
};

export const getUserById = async (
  userId: string,
  organizationId: string
) => {
  return User.findOne({
    _id: userId,
    organization: organizationId,
  }).select("-password");
};

// export const createUser = async (
//   payload: any,
//   organizationId: string
// ) => {
//   return User.create({
//     ...payload,
//     organization: organizationId,
//   });
// };

export const updateUser = async (
  userId: string,
  organizationId: string,
  payload: any
) => {
  return User.findOneAndUpdate(
    {
      _id: userId,
      organization:
        organizationId,
    },
    payload,
    {
      new: true,
      runValidators: true,
    }
  ).select("-password");
};

export const deleteUser = async (
  userId: string,
  organizationId: string
) => {
  return User.findOneAndDelete({
    _id: userId,
    organization:
      organizationId,
  });
};

export const createUser = async (
  payload: any,
  organizationId: string
) => {
  const existingUser =
    await User.findOne({
      email: payload.email,
    });

  if (existingUser) {
    throw new Error(
      "User already exists"
    );
  }

  const hashedPassword =
    await bcrypt.hash(
      payload.password,
      12
    );

  const user =
    await User.create({
      ...payload,
      password:
        hashedPassword,
      organization:
        organizationId,
    });

  return user;
};