import { useQuery }
from "@tanstack/react-query";

import {
  getCompanies,
} from "./companies.api";

export const useCompanies =
  () => {
    return useQuery({
      queryKey: ["companies"],
      queryFn:
        getCompanies,
    });
  };