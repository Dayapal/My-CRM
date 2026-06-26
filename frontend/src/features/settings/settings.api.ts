import { api }
from "@/services/api";

export const getSettings =
async () => {

  const response =
    await api.get(
      "/settings"
    );

  return response.data.data;
};

export const updateProfile =
async (
  payload: any
) => {

  const response =
    await api.patch(
      "/settings/profile",
      payload
    );

  return response.data;
};

export const updateOrganization =
async (
  payload: any
) => {

  const response =
    await api.patch(
      "/settings/organization",
      payload
    );

  return response.data;
};