import DashboardLayout from "@/layouts/DashboardLayout";


import {useDashboard,} from "@/features/dashboard/useDashboard";

import {
  Users,
  UserCheck,
  Briefcase,
  IndianRupee,
  CheckSquare,
  Target,} from "lucide-react";

import KpiCard from "@/components/dashboard/KpiCard";
import RecentActivities from "@/components/dashboard/RecentActivities";
import PipelineOverview from "@/components/dashboard/PipelineOverview";

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
  const kanban = data?.kanban ?? {
    lead: [],
    qualified: [],
    proposal: [],
    negotiation: [],
    won: [],
    lost: [],
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <div className="
  grid
  gap-4
  md:grid-cols-2
  xl:grid-cols-3
"
        >
          <KpiCard
            title="Total Leads"
            value={data?.leads.total || 0}
            icon={<Users size={24} />}
          />

          <KpiCard
            title="Converted Leads"
            value={data?.leads.converted || 0}
            icon={<UserCheck size={24} />}
          />

          <KpiCard
            title="Total Deals"
            value={data?.deals.total || 0}
            icon={<Briefcase size={24} />}
          />

          <KpiCard
            title="Pipeline Value"
            value={`₹${(
              data?.deals.pipelineValue || 0
            ).toLocaleString()}`}
            icon={<IndianRupee size={24} />}
          />

          <KpiCard
            title="Tasks"
            value={data?.tasks.total || 0}
            icon={<CheckSquare size={24} />}
          />

          <KpiCard
            title="Completion Rate"
            value={`${data?.tasks.completionRate || 0}%`}
            icon={<Target size={24} />}
          />
        </div>


        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentActivities
              activities={
                data?.recentActivities || []
              }
            />
          </div>
          <PipelineOverview kanban={kanban}/>

        </div>
      </div>
    </DashboardLayout>
  );
}