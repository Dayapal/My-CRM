interface Props {
  report: any;
}

export default function ReportsCards({
  report,
}: Props) {
  const cards = [
    {
      title:
        "Total Leads",
      value:
        report.totalLeads,
    },

    {
      title:
        "Contacts",
      value:
        report.totalContacts,
    },

    {
      title:
        "Companies",
      value:
        report.totalCompanies,
    },

    {
      title:
        "Deals",
      value:
        report.totalDeals,
    },

    {
      title:
        "Tasks",
      value:
        report.totalTasks,
    },

    {
      title:
        "Completion %",
      value:
        `${report.completionRate}%`,
    },
  ];

  return (
    <div
      className="
        grid
        gap-4
        md:grid-cols-3
        xl:grid-cols-6
      "
    >
      {cards.map(
        (card) => (
          <div
            key={
              card.title
            }
            className="
              rounded-xl
              border
              bg-white
              p-5
              shadow-sm
            "
          >
            <p
              className="
                text-sm
                text-slate-500
              "
            >
              {card.title}
            </p>

            <h3
              className="
                mt-2
                text-2xl
                font-bold
              "
            >
              {card.value}
            </h3>
          </div>
        )
      )}
    </div>
  );
}