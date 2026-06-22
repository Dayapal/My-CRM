import { api } from "@/services/api";

export const getDeals =
  async () => {
    const response =
      await api.get("/deals");

    return response.data.data;
  };

export const getKanbanDeals =
  async () => {
    const response =
      await api.get("/deals/kanban");

    return response.data.data;
  };

export const getDealMetrics =
  async () => {
    const response =
      await api.get("/deals/metrics");

    return response.data.data;
  };

export const createDeal =
  async (payload: any) => {
    const response =
      await api.post(
        "/deals",
        payload
      );

    return response.data;
  };

export const updateDeal =
  async (
    dealId: string,
    payload: any
  ) => {
    const response =
      await api.patch(
        `/deals/${dealId}`,
        payload
      );

    return response.data;
  };

export const updateDealStage =
  async (
    dealId: string,
    stage: string
  ) => {
    const response =
      await api.patch(
        `/deals/${dealId}/stage`,
        { stage }
      );

    return response.data;
  };

export const deleteDeal =
  async (
    dealId: string
  ) => {
    const response =
      await api.delete(
        `/deals/${dealId}`
      );

    return response.data;
  };