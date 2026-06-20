import { api } from "@/api/axios";
import type {
  DashboardOverview,
} from "./dashboard.types.js";

export const getDashboardOverview =
  async (): Promise<DashboardOverview> => {
    const response =
      await api.get(
        "/dashboard/overview"
      );

    return response.data.data;
  };