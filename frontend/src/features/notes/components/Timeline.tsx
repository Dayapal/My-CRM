import {
  Clock3,
  FileText,
  CheckCircle2,
  CalendarDays,
  BriefcaseBusiness,
  Building2,
  UserRound,
} from "lucide-react";

import {
  formatDistanceToNow,
} from "date-fns";

interface Props {
  activities: any[];
}

const getIcon = (
  type: string
) => {

  switch (type) {

    case "NOTE_CREATED":
      return (
        <FileText
          className="h-5 w-5 text-blue-600"
        />
      );

    case "TASK_CREATED":

    case "TASK_COMPLETED":
      return (
        <CheckCircle2
          className="h-5 w-5 text-green-600"
        />
      );

    case "MEETING_CREATED":
      return (
        <CalendarDays
          className="h-5 w-5 text-violet-600"
        />
      );

    case "DEAL_CREATED":
      return (
        <BriefcaseBusiness
          className="h-5 w-5 text-orange-600"
        />
      );

    case "COMPANY_CREATED":
      return (
        <Building2
          className="h-5 w-5 text-cyan-600"
        />
      );

    case "CONTACT_CREATED":
      return (
        <UserRound
          className="h-5 w-5 text-pink-600"
        />
      );

    default:
      return (
        <Clock3
          className="h-5 w-5 text-slate-500"
        />
      );

  }

};

export default function Timeline({
  activities,
}: Props) {

  if (
    !activities ||
    activities.length === 0
  ) {

    return (

      <div className="rounded-xl border bg-white p-8 text-center text-slate-500">

        No Activities Yet

      </div>

    );

  }

  return (

    <div className="rounded-xl border bg-white p-6">

      <h2 className="mb-8 text-xl font-semibold">

        Timeline

      </h2>

      <div className="relative">

        <div
          className="
            absolute
            left-5
            top-0
            h-full
            w-[2px]
            bg-slate-200
          "
        />

        <div className="space-y-8">

          {activities.map(
            (activity: any) => (
                              <div
                key={activity._id}
                className="relative flex gap-4"
              >

                {/* Timeline Dot */}

                <div
                  className="
                    z-10
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-white
                    shadow-sm
                  "
                >
                  {getIcon(
                    activity.type
                  )}
                </div>

                {/* Content */}

                <div
                  className="
                    flex-1
                    rounded-xl
                    border
                    bg-slate-50
                    p-4
                  "
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >

                    <div>

                      <h3 className="font-semibold">

                        {
                          activity.description
                        }

                      </h3>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-slate-500
                        "
                      >

                        {activity.user
                          ?.firstName}{" "}
                        {activity.user
                          ?.lastName}

                      </p>

                    </div>

                    <span
                      className="
                        whitespace-nowrap
                        text-xs
                        text-slate-500
                      "
                    >

                      {formatDistanceToNow(
                        new Date(
                          activity.createdAt
                        ),
                        {
                          addSuffix: true,
                        }
                      )}

                    </span>

                  </div>

                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-2
                    "
                  >

                    <span
                      className="
                        rounded-full
                        bg-blue-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-blue-700
                      "
                    >

                      {activity.type}

                    </span>

                    <span
                      className="
                        rounded-full
                        bg-slate-200
                        px-3
                        py-1
                        text-xs
                        font-medium
                      "
                    >

                      {
                        activity.entityType
                      }

                    </span>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </div>

  );

}