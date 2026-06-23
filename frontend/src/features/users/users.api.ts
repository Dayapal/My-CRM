import { api } from "@/services/api";

export const getUsers =
  async () => {
    const response =
      await api.get("/users");

    return response.data.data;
  };

export const createUser =
  async (payload: any) => {
    const response =
      await api.post(
        "/users",
        payload
      );

    return response.data;
  };

export const updateUser =
  async (
    userId: string,
    payload: any
  ) => {
    const response =
      await api.patch(
        `/users/${userId}`,
        payload
      );

    return response.data;
  };

export const deleteUser =
  async (
    userId: string
  ) => {
    const response =
      await api.delete(
        `/users/${userId}`
      );

    return response.data;
  };