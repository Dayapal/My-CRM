import { api } from "@/services/api";

import type {
  LoginPayload,
  RegisterPayload,
} from "./auth.types";

export const login = async (
  payload: LoginPayload
) => {
  const response = await api.post(
    "/auth/login",
    payload
  );

  return response.data;
};

export const register = async (
  payload: RegisterPayload
) => {
  const response = await api.post(
    "/auth/register",
    payload
  );

  return response.data;
};

export const getMe = async () => {
  const response =
    await api.get("/auth/me");

  return response.data;
};


