import { api } from "@/services/api";
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







export const getDashboardData =
async ()=>{

const response=
await api.get(
"/reports/dashboard"
);

return response.data.data;

};