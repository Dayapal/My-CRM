import { User }
from "../users/user.model.js";

import { Organization }
from "../organizations/organization.model.js";

export const getSettings =
async (
  userId: string,
  organizationId: string
) => {

  const user =
    await User.findById(
      userId
    );

  const organization =
    await Organization.findById(
      organizationId
    );

  return {
    user,
    organization,
  };
};

export const updateProfile =
async (
  userId: string,
  payload: any
) => {

  return User.findByIdAndUpdate(
    userId,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const updateOrganization =
async (
  organizationId: string,
  payload: any
) => {

  return Organization.findByIdAndUpdate(
    organizationId,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};