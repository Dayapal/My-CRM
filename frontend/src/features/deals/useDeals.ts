import { useQuery } from "@tanstack/react-query";

import {
  getKanbanDeals,
  getDealMetrics,
} from "./deals.api";

export const useKanbanDeals =
  () =>
    useQuery({
      queryKey: ["deals"],
      queryFn:
        getKanbanDeals,
    });

export const useDealMetrics =
  () =>
    useQuery({
      queryKey: [
        "deal-metrics",
      ],
      queryFn:
        getDealMetrics,
    });