import { api } from "@/services/api";

export const getActivities =
  async () => {

    const response =
      await api.get(
        "/activities"
      );

    return response.data.data;
};