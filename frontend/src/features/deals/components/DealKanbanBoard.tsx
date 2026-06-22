import DealColumn from "./DealColumn";

export default function DealKanbanBoard({
  data,
}: any) {
  return (
    <div className="  grid
  grid-cols-1
  gap-4
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4
  2xl:grid-cols-6">
      <DealColumn
        title="Lead"
        deals={data.lead}
      />

      <DealColumn
        title="Qualified"
        deals={
          data.qualified
        }
      />

      <DealColumn
        title="Proposal"
        deals={
          data.proposal
        }
      />

      <DealColumn
        title="Negotiation"
        deals={
          data.negotiation
        }
      />

      <DealColumn
        title="Won"
        deals={data.won}
      />

      <DealColumn
        title="Lost"
        deals={data.lost}
      />
    </div>
  );
}