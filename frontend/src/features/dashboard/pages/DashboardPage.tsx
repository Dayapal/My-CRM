import DashboardLayout from "@/layouts/DashboardLayout";
import type { ComponentType } from "react";

import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";
import RecentActivities from "../components/RecentActivities";

import { useDashboard } from "../useDashboard";

export default function DashboardPage() {
  const {
    data,
    isLoading,
    isError,
  } = useDashboard();

  const TypedDashboardStats = DashboardStats as ComponentType<any>;

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center">
          Loading Dashboard...
        </div>
      </DashboardLayout>
    );
  }

  if (isError || !data) {
    return (
      <DashboardLayout>
        <div className="flex h-[60vh] items-center justify-center">
          Failed To Load Dashboard
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <DashboardHeader />

        <TypedDashboardStats
          leads={data.leads}
          deals={data.deals}
          tasks={data.tasks}
        />

        <RecentActivities
          activities={data.recentActivities}
        />

      </div>
    </DashboardLayout>
  );
}