import { useQuery } from "@tanstack/react-query";

import {
  getTasks,
  getTaskMetrics,
} from "./tasks.api";

export const useTasks = () =>
  useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

export const useTaskMetrics =
  () =>
    useQuery({
      queryKey: [
        "task-metrics",
      ],
      queryFn:
        getTaskMetrics,
    });