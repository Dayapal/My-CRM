import MeetingActions
from "./MeetingActions";

import MeetingStatusBadge
from "./MeetingStatusBadge";

export default function MeetingsTable({
  meetings,
}: any) {

  return (

    <div
      className="
        overflow-hidden
        rounded-xl
        border
        bg-white
        shadow-sm
      "
    >

      <table className="w-full">

        <thead>

          <tr className="bg-slate-50">

            <th className="p-4 text-left">
              Title
            </th>

            <th className="p-4 text-left">
              Company
            </th>

            <th className="p-4 text-left">
              Contact
            </th>

            <th className="p-4 text-left">
              Date
            </th>

            <th className="p-4 text-left">
              Type
            </th>

            <th className="p-4 text-left">
              Status
            </th>

            <th className="p-4">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {meetings.map(
            (
              meeting: any
            ) => (

              <tr
                key={
                  meeting._id
                }
                className="
                  border-b
                  hover:bg-slate-50
                "
              >

                <td className="p-4 font-medium">
                  {meeting.title}
                </td>

                <td className="p-4">
                  {meeting.company?.name ??
                    "-"}
                </td>

                <td className="p-4">
                  {meeting.contact
                    ? `${meeting.contact.firstName} ${meeting.contact.lastName}`
                    : "-"}
                </td>

                <td className="p-4">
                  {new Date(
                    meeting.startTime
                  ).toLocaleDateString()}
                </td>

                <td className="p-4">
                  {meeting.meetingType}
                </td>

                <td className="p-4">
                  <MeetingStatusBadge
                    status={
                      meeting.status
                    }
                  />
                </td>

                <td className="p-4">
                  <MeetingActions
                    meeting={
                      meeting
                    }
                  />
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

      {meetings.length === 0 && (

        <div className="p-10 text-center text-slate-500">

          No Meetings Found

        </div>

      )}

    </div>

  );

}