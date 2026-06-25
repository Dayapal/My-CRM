import { useQuery } from "@tanstack/react-query";

import {
  getDashboardReport,
} from "./reports.api";

export const useReports =
  () => {
    return useQuery({
      queryKey: [
        "reports",
      ],

      queryFn:
        getDashboardReport,
    });
  };