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



  

import {
getDashboardData,
}
from "./dashboard.api";

export const useDashbokard=
()=>{

return useQuery({

queryKey:[
"dashboard"
],

queryFn:
getDashboardData,

});
};


