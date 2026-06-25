import { api } from "@/services/api";

export const getDashboardReport =
  async () => {
    const response =
      await api.get(
        "/reports/dashboard"
      );

    return response.data.data;
  };