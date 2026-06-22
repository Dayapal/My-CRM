import { api } from "@/services/api";

export const getContacts =
  async () => {
    const response =
      await api.get("/contacts");

    return response.data.data;
  };

export const createContact =
  async (payload: any) => {
    const response =
      await api.post(
        "/contacts",
        payload
      );

    return response.data;
  };

export const updateContact =
  async (
    contactId: string,
    payload: any
  ) => {
    const response =
      await api.patch(
        `/contacts/${contactId}`,
        payload
      );

    return response.data;
  };

export const deleteContact =
  async (
    contactId: string
  ) => {
    const response =
      await api.delete(
        `/contacts/${contactId}`
      );

    return response.data;
  };