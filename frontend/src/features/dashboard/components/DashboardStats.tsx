import {
  Users,
  Building2,
  BriefcaseBusiness,
  DollarSign,
  CheckSquare,
  UserRound,
} from "lucide-react";

import StatCard from "./StatCard";

interface Props {
  overview: {
    totalLeads: number;
    totalContacts: number;
    totalCompanies: number;
    totalDeals: number;
    pipelineValue: number;
    totalTasks: number;
  };
}

export default function DashboardStats({
  overview,
}: Props) {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        sm:grid-cols-2

        xl:grid-cols-3

        2xl:grid-cols-6
      "
    >
      <StatCard
        title="Total Leads"
        value={overview.totalLeads}
        icon={<Users size={28} />}
        color="bg-blue-600"
        change={18}
      />

      <StatCard
        title="Contacts"
        value={overview.totalContacts}
        icon={<UserRound size={28} />}
        color="bg-violet-600"
        change={8}
      />

      <StatCard
        title="Companies"
        value={overview.totalCompanies}
        icon={<Building2 size={28} />}
        color="bg-cyan-600"
        change={5}
      />

      <StatCard
        title="Deals"
        value={overview.totalDeals}
        icon={<BriefcaseBusiness size={28} />}
        color="bg-orange-500"
        change={11}
      />

      <StatCard
        title="Pipeline Value"
        value={`₹${overview.pipelineValue.toLocaleString()}`}
        icon={<DollarSign size={28} />}
        color="bg-green-600"
        change={22}
      />

      <StatCard
        title="Tasks"
        value={overview.totalTasks}
        icon={<CheckSquare size={28} />}
        color="bg-pink-600"
        change={4}
      />
    </div>
  );
}