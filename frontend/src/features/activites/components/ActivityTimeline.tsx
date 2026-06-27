import ActivityCard
from "./ActivityCard";

export default function ActivityTimeline({

  activities,

}: any) {

  return (

    <div
      className="
        space-y-4
      "
    >

      {activities.map(

        (
          activity: any
        ) => (

          <ActivityCard

            key={
              activity._id
            }

            activity={
              activity
            }

          />

        )

      )}

    </div>

  );

}