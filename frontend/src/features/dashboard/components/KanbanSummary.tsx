import { Card } from "@/components/ui/card";

interface Props {
  kanban: {
    lead: any[];
    qualified: any[];
    proposal: any[];
    negotiation: any[];
    won: any[];
    lost: any[];
  };
}

export default function KanbanSummary({
  kanban,
}: Props) {
  const items = [
    {
      title: "Lead",
      value: kanban.lead.length,
    },
    {
      title: "Qualified",
      value: kanban.qualified.length,
    },
    {
      title: "Proposal",
      value: kanban.proposal.length,
    },
    {
      title: "Negotiation",
      value: kanban.negotiation.length,
    },
    {
      title: "Won",
      value: kanban.won.length,
    },
    {
      title: "Lost",
      value: kanban.lost.length,
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Deal Pipeline
      </h2>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-lg bg-slate-100 p-4 text-center"
          >
            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}