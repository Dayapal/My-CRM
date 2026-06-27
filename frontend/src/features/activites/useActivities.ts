import {
  useQuery,
} from "@tanstack/react-query";

import {
  getActivities,
} from "./activities.api";

export const useActivities =
  () => {

    return useQuery({

      queryKey: [
        "activities",
      ],

      queryFn:
        getActivities,

    });

};