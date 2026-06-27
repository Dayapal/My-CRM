import {
  Clock,
} from "lucide-react";

export default function ActivityCard({
  activity,
}: any) {

  return (

    <div
      className="
        relative
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
      "
    >

      <div
        className="
          absolute
          left-0
          top-0
          h-full
          w-1
          rounded-l-xl
          bg-blue-600
        "
      />

      <div className="ml-2">

        <h3
          className="
            text-sm
            font-semibold
            text-slate-800
          "
        >
          {activity.description}
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-slate-500
          "
        >
          {activity.user?.firstName}{" "}
          {activity.user?.lastName}
        </p>

        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            text-xs
            text-slate-400
          "
        >
          <Clock
            size={14}
          />

          {new Date(
            activity.createdAt
          ).toLocaleString()}
        </div>

      </div>

    </div>

  );

}