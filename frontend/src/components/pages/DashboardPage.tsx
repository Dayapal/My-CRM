import DashboardLayout from "@/layouts/DashboardLayout";
import KpiCard from "@/components/common/KpiCard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <KpiCard
            title="Total Leads"
            value={3}
          />

          <KpiCard
            title="Converted Leads"
            value={1}
          />

          <KpiCard
            title="Total Deals"
            value={4}
          />

          <KpiCard
            title="Pipeline Value"
            value="₹15,500,900"
          />

          <KpiCard
            title="Tasks"
            value={1}
          />

          <KpiCard
            title="Completion Rate"
            value="100%"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}