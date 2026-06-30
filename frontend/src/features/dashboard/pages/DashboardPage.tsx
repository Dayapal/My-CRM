import DashboardLayout from "@/layouts/DashboardLayout";

import DashboardHeader from "../components/DashboardHeader";
import DashboardStats from "../components/DashboardStats";

import { useDashboard } from "../useDashboard";

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

      <div className="space-y-8">

        <DashboardHeader />

        {/* <DashboardStats
          overview={data?.overview}
        /> */}

        {/* Charts will come here */}

        {/* Recent Activities */}

        {/* Upcoming Meetings */}

      </div>

    </DashboardLayout>
  );
}