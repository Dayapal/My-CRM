import {
  useEffect,
  useState,
} from "react";

import {
  useQuery,
} from "@tanstack/react-query";

import {
  globalSearch,
} from "./search.api";

export function useDebounce<T>(
  value: T,
  delay = 300
) {

  const [
    debouncedValue,
    setDebouncedValue,
  ] = useState(value);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setDebouncedValue(value);

      }, delay);

    return () =>
      clearTimeout(timer);

  }, [
    value,
    delay,
  ]);

  return debouncedValue;

}

export function useSearch(
  search: string
) {

  const debouncedSearch =
    useDebounce(
      search,
      300
    );

  return useQuery({

    queryKey: [
      "global-search",
      debouncedSearch,
    ],

    queryFn: () =>
      globalSearch(
        debouncedSearch
      ),

    enabled:
      debouncedSearch.length > 0,

    staleTime:
      1000 * 60,

  });

}