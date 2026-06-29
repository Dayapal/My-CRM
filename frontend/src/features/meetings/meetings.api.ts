import { api } from "@/services/api";

export const getMeetings =
  async () => {

    const response =
      await api.get(
        "/meetings"
      );

    return response.data.data;
};

export const getMeeting =
  async (
    meetingId: string
  ) => {

    const response =
      await api.get(
        `/meetings/${meetingId}`
      );

    return response.data.data;
};

export const createMeeting =
  async (
    payload: any
  ) => {

    const response =
      await api.post(
        "/meetings",
        payload
      );

    return response.data;
};

export const updateMeeting =
  async (
    meetingId: string,
    payload: any
  ) => {

    const response =
      await api.patch(
        `/meetings/${meetingId}`,
        payload
      );

    return response.data;
};

export const deleteMeeting =
  async (
    meetingId: string
  ) => {

    const response =
      await api.delete(
        `/meetings/${meetingId}`
      );

    return response.data;
};

export const updateMeetingStatus =
  async (
    meetingId: string,
    status: string
  ) => {

    const response =
      await api.patch(
        `/meetings/${meetingId}/status`,
        {
          status,
        }
      );

    return response.data;
};

export const getCalendarMeetings =
  async () => {

    const response =
      await api.get(
        "/meetings/calendar"
      );

    return response.data.data;
};