import {
  Calendar,
  Clock,
  MapPin,
  Video,
  Phone,
} from "lucide-react";

import MeetingStatusBadge from "./MeetingStatusBadge";

interface Props {
  meeting: any;
}

export default function MeetingCard({
  meeting,
}: Props) {
  return (
    <div
      className="
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
        hover:shadow-md
        transition
      "
    >
      <div className="flex items-start justify-between">

        <h3 className="font-semibold text-lg">
          {meeting.title}
        </h3>

        <MeetingStatusBadge
          status={meeting.status}
        />

      </div>

      {meeting.description && (
        <p className="mt-3 text-sm text-slate-500">
          {meeting.description}
        </p>
      )}

      <div className="mt-4 space-y-2">

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Calendar className="h-4 w-4" />
          {new Date(
            meeting.startTime
          ).toLocaleDateString()}
        </div>

        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Clock className="h-4 w-4" />

          {new Date(
            meeting.startTime
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}

          -

          {new Date(
            meeting.endTime
          ).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>

        {meeting.location && (
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            {meeting.location}
          </div>
        )}

        {meeting.meetingType ===
          "ONLINE" && (
          <div className="flex items-center gap-2 text-sm text-blue-600">
            <Video className="h-4 w-4" />
            Online Meeting
          </div>
        )}

        {meeting.meetingType ===
          "PHONE" && (
          <div className="flex items-center gap-2 text-sm text-emerald-600">
            <Phone className="h-4 w-4" />
            Phone Call
          </div>
        )}

      </div>

      <div className="mt-4 border-t pt-4">

        <p className="text-sm font-medium">
          Company
        </p>

        <p className="text-slate-500">
          {meeting.company?.name || "-"}
        </p>

      </div>
    </div>
  );
}