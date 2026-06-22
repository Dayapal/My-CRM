import {
  IndianRupee,
  Trophy,
  XCircle,
  Briefcase,
} from "lucide-react";

interface Props {
  metrics: any;
}

export default function DealMetricsCards({
  metrics,
}: Props) {
  const cards = [
    {
      title: "Deals",
      value:
        metrics.totalDeals,
      icon: Briefcase,
    },

    {
      title: "Pipeline",
      value: `₹${metrics.pipelineValue.toLocaleString()}`,
      icon: IndianRupee,
    },

    {
      title: "Won Revenue",
      value: `₹${metrics.wonRevenue.toLocaleString()}`,
      icon: Trophy,
    },

    {
      title: "Lost Revenue",
      value: `₹${metrics.lostRevenue.toLocaleString()}`,
      icon: XCircle,
    },
  ];

  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
      {cards.map(
        (
          card,
          index
        ) => (
          <div
            key={index}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {card.value}
                </h2>
              </div>

              <card.icon />
            </div>
          </div>
        )
      )}
    </div>
  );
}