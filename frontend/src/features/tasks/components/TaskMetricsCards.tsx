import {
  CheckSquare,
  Clock,
  Loader2,
  CheckCircle2,
} from "lucide-react";

import KpiCard from "@/components/dashboard/KpiCard";

export default function TaskMetricsCards({
  metrics,
}: any) {
  if (!metrics) return null;

  return (
    <div
      className="
        grid
        gap-4
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      <KpiCard
        title="Total Tasks"
        value={
          metrics.totalTasks
        }
        icon={<CheckSquare />}
      />

      <KpiCard
        title="Pending"
        value={
          metrics.pendingTasks
        }
        icon={<Clock />}
      />

      <KpiCard
        title="In Progress"
        value={
          metrics.inProgressTasks
        }
        icon={<Loader2 />}
      />

      <KpiCard
        title="Completed"
        value={
          metrics.completedTasks
        }
        icon={
          <CheckCircle2 />
        }
      />
    </div>
  );
}