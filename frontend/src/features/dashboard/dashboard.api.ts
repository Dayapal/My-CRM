import { api } from "@/services/api";

import type {
  DashboardOverview,
} from "./dashboard.types";

export const getDashboardOverview =
  async (): Promise<DashboardOverview> => {

    const response =
      await api.get(
        "/dashboard/overview"
        
      );

    return response.data.data;

  };  