import { api } from "@/services/api";

export const getTasks = async () => {
  const response = await api.get("/tasks");
  return response.data.data;
};

export const createTask = async (
  payload: any
) => {
  const response = await api.post(
    "/tasks",
    payload
  );

  return response.data;
};

export const updateTask = async (
  taskId: string,
  payload: any
) => {
  const response = await api.patch(
    `/tasks/${taskId}`,
    payload
  );

  return response.data;
};

export const deleteTask = async (
  taskId: string
) => {
  const response = await api.delete(
    `/tasks/${taskId}`
  );

  return response.data;
};

export const updateTaskStatus =
  async (
    taskId: string,
    status: string
  ) => {
    const response =
      await api.patch(
        `/tasks/${taskId}/status`,
        { status }
      );

    return response.data;
  };

export const getTaskMetrics =
  async () => {
    const response =
      await api.get(
        "/tasks/metrics"
      );

    return response.data.data;
  };