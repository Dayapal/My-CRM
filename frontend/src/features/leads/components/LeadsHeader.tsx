import CreateLeadDialog from "./CreateLeadDialog";

interface Props {
  totalLeads: number;
  convertedLeads: number;
  qualifiedLeads: number;
  newLeads: number;
}

export default function LeadsHeader({
  totalLeads,
  convertedLeads,
  qualifiedLeads,
  newLeads,
}: Props) {
  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Leads
          </h1>

          <p className="text-slate-500">
            Manage and track all sales leads
          </p>
        </div>

        <CreateLeadDialog open={false} onClose={function (): void {
                  throw new Error("Function not implemented.");
              } } />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Leads"
          value={totalLeads}
        />

        <StatCard
          title="New Leads"
          value={newLeads}
        />

        <StatCard
          title="Qualified"
          value={qualifiedLeads}
        />

        <StatCard
          title="Converted"
          value={convertedLeads}
        />

      </div>

    </div>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div
      className="
      rounded-xl
      border
      bg-white
      p-5
      shadow-sm
    "
    >
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}