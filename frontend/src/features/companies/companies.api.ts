import { api } from "@/services/api";

export const getCompanies =
  async () => {
    const response =
      await api.get("/companies");

    return response.data.data;
  };

export const createCompany =
  async (payload: any) => {
    const response =
      await api.post(
        "/companies",
        payload
      );

    return response.data;
  };

export const updateCompany =
  async (
    companyId: string,
    payload: any
  ) => {
    const response =
      await api.patch(
        `/companies/${companyId}`,
        payload
      );

    return response.data;
  };

export const deleteCompany =
  async (
    companyId: string
  ) => {
    const response =
      await api.delete(
        `/companies/${companyId}`
      );

    return response.data;
  };