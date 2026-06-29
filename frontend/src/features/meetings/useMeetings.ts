import {
  useQuery,
} from "@tanstack/react-query";

import {
  getMeetings,
  getCalendarMeetings,
} from "./meetings.api";

export const useMeetings =
  () => {

    return useQuery({

      queryKey: [
        "meetings",
      ],

      queryFn:
        getMeetings,

    });

};

export const useCalendarMeetings =
  () => {

    return useQuery({

      queryKey: [
        "calendar-meetings",
      ],

      queryFn:
        getCalendarMeetings,

    });

};