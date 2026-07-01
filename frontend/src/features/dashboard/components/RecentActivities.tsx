import {
  Clock3,
} from "lucide-react";

interface Props {
  activities: any[];
}

export default function RecentActivities({
  activities,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          Recent Activities
        </h2>

      </div>

      <div className="space-y-4">

        {activities.map(
          (activity) => (

            <div
              key={activity._id}
              className="flex gap-4"
            >

              <div className="mt-1">

                <Clock3
                  className="h-5 w-5 text-blue-600"
                />

              </div>

              <div>

                <p className="font-medium">

                  {activity.description}

                </p>

                <p className="text-sm text-slate-500">

                  {activity.user?.firstName}{" "}
                  {activity.user?.lastName}

                </p>

              </div>

            </div>

          )
        )}

      </div>

    </div>
  );
}