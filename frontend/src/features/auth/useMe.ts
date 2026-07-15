import { useQuery } from "@tanstack/react-query";
import { getMe } from "./auth.api";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,

    retry: false,

    staleTime: 1000 * 60 * 5,

    refetchOnWindowFocus: false,
  });
};