import { Card, CardContent } from "@/components/ui/card";

interface Props {
  activities: any[];
}

export default function RecentActivities({
  activities,
}: Props) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-4 text-xl font-semibold">
          Recent Activities
        </h2>

        <div className="space-y-4">
          {activities.length === 0 ? (
            <p>No activities found</p>
          ) : (
            activities.map((activity) => (
              <div
                key={activity._id}
                className="border-b pb-3"
              >
                <p className="font-medium">
                  {activity.description}
                </p>

                <p className="text-sm text-muted-foreground">
                  {activity.type}
                </p>

                <p className="text-xs text-muted-foreground">
                  {new Date(
                    activity.createdAt
                  ).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}