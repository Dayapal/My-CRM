import {
  Calendar,
  momentLocalizer,
} from "react-big-calendar";

import moment from "moment";

const localizer =
  momentLocalizer(moment);

interface Props {
  meetings: any[];
}

export default function CalendarView({
  meetings,
}: Props) {

  const events =
    meetings.map((meeting) => ({

      title:
        meeting.title,

      start:
        new Date(
          meeting.startTime
        ),

      end:
        new Date(
          meeting.endTime
        ),

      resource:
        meeting,

    }));

  return (

    <div
      className="
        rounded-xl
        bg-white
        p-5
        shadow
      "
    >

      <Calendar
        localizer={
          localizer
        }

        events={events}

        startAccessor="start"

        endAccessor="end"

        style={{
          height: 650,
        }}

        popup

        selectable

      />

    </div>

  );

}   