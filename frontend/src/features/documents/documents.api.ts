import { api } from "@/services/api";

export const getDocuments =
  async () => {

    const response =
      await api.get(
        "/documents"
      );

    return response.data.data;

  };

export const getEntityDocuments =
  async (
    entityType: string,
    entityId: string
  ) => {

    const response =
      await api.get(
        `/documents/entity/${entityType}/${entityId}`
      );

    return response.data.data;

  };

export const uploadDocument =
  async (
    payload: any
  ) => {

    const formData =
      new FormData();

    formData.append(
      "title",
      payload.title
    );

    formData.append(
      "entityType",
      payload.entityType
    );

    formData.append(
      "entityId",
      payload.entityId
    );

    formData.append(
      "file",
      payload.file
    );

    const response =
      await api.post(
        "/documents",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;

  };

export const deleteDocument =
  async (
    id: string
  ) => {

    const response =
      await api.delete(
        `/documents/${id}`
      );

    return response.data;

  };