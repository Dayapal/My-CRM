import { api } from "@/services/api";

import type {
  SearchResult,
} from "./search.types";

export const globalSearch =
  async (
    query: string
  ): Promise<SearchResult> => {

    if (!query.trim()) {
      return {
        leads: [],
        contacts: [],
        companies: [],
        deals: [],
        tasks: [],
        meetings: [],
        notes: [],
        documents: [],
      };
    }

    const response =
      await api.get(
        `/search?q=${encodeURIComponent(query)}`
      );

    return response.data.data;
};