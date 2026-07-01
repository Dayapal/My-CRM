import { useQuery } from "@tanstack/react-query";

import {
  getDashboardOverview,
} from "./dashboard.api";

export const useDashboard =
  () => {

    return useQuery({

      queryKey: [
        "dashboard-overview",
      ],

      queryFn:
        getDashboardOverview,

    });

  };