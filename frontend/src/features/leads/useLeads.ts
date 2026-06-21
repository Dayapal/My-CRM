import { useQuery }
from "@tanstack/react-query";

import { getLeads }
from "./leads.api";

export const useLeads =
  () => {
    return useQuery({
      queryKey: ["leads"],
      queryFn: getLeads,
    });
  };