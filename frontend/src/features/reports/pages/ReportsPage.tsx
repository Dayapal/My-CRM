import DashboardLayout
from "@/layouts/DashboardLayout";

import {
  useReports,
} from "../useReports";

import ReportsCards
from "../components/ReportsCards";

import RevenueChart
from "../components/RevenueChart";

import TaskChart
from "../components/TaskChart";

export default function ReportsPage() {

  const {
    data,
    isLoading,
  } = useReports();

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

        <div>
          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Reports & Analytics
          </h1>

          <p
            className="
              text-slate-500
            "
          >
            Business insights
          </p>
        </div>

        <ReportsCards
          report={data}
        />

        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
          "
        >
          <RevenueChart
            report={data}
          />

          <TaskChart
            report={data}
          />
        </div>

      </div>
    </DashboardLayout>
  );
}