import DashboardLayout
from "@/layouts/DashboardLayout";

import KpiCard
from "@/components/common/KpiCard";

import {
  useDashboard,
} from "@/features/dashboard/useDashboard";

export default function DashboardPage() {
  const {
    data,
    isLoading,
  } = useDashboard();

  if (isLoading) {
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <div
          className="
          grid
          gap-4
          md:grid-cols-2
          lg:grid-cols-3
        "
        >
          <KpiCard
            title="Total Leads"
            value={
              data?.leads.total || 0
            }
          />

          <KpiCard
            title="Converted Leads"
            value={
              data?.leads
                .converted || 0
            }
          />

          <KpiCard
            title="Total Deals"
            value={
              data?.deals.total || 0
            }
          />

          <KpiCard
            title="Pipeline Value"
            value={`₹${(
              data?.deals
                .pipelineValue || 0
            ).toLocaleString()}`}
          />

          <KpiCard
            title="Tasks"
            value={
              data?.tasks.total || 0
            }
          />

          <KpiCard
            title="Completion Rate"
            value={`${data?.tasks.completionRate || 0}%`}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}