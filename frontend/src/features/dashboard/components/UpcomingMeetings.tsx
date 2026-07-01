import {
  Calendar,
  Clock,
} from "lucide-react";

interface Props {
  meetings: any[];
}

export default function UpcomingMeetings({
  meetings,
}: Props) {

  return (

    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-xl font-semibold">

        Upcoming Meetings

      </h2>

      <div className="space-y-5">

        {meetings.map(
          (meeting) => (

            <div
              key={meeting._id}
              className="rounded-lg border p-4"
            >

              <h3 className="font-semibold">

                {meeting.title}

              </h3>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">

                <Calendar
                  className="h-4 w-4"
                />

                {new Date(
                  meeting.startTime
                ).toLocaleDateString()}

              </div>

              <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">

                <Clock
                  className="h-4 w-4"
                />

                {new Date(
                  meeting.startTime
                ).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );

}