import { api } from "@/services/api";

export const getLeads =
  async () => {
    const response =
      await api.get("/leads");

    return response.data.data;
  };

export const convertLead =
  async (leadId: string) => {
    const response =
      await api.post(
        `/leads/${leadId}/convert`
      );

    return response.data;
  };

  export const createLead =
  async (payload: any) => {
    const response =
      await api.post(
        "/leads",
        payload
      );

    return response.data;
  };


  export const updateLead = async (
  leadId: string,
  payload: any
) => {
  const response = await api.put(
    `/leads/${leadId}`,
    payload
  );

  return response.data;
};

export const deleteLead = async (
  leadId: string
) => {
  const response = await api.delete(
    `/leads/${leadId}`
  );

  return response.data;
};


