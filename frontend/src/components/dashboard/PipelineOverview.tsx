import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

export default function PipelineOverview({
  kanban,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Pipeline Overview
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">

        <div className="flex justify-between">
          <span>Lead</span>
          <span>{kanban.lead.length}</span>
        </div>

        <div className="flex justify-between">
          <span>Qualified</span>
          <span>{kanban.qualified.length}</span>
        </div>

        <div className="flex justify-between">
          <span>Proposal</span>
          <span>{kanban.proposal.length}</span>
        </div>

        <div className="flex justify-between">
          <span>Negotiation</span>
          <span>{kanban.negotiation.length}</span>
        </div>

        <div className="flex justify-between">
          <span>Won</span>
          <span>{kanban.won.length}</span>
        </div>

        <div className="flex justify-between">
          <span>Lost</span>
          <span>{kanban.lost.length}</span>
        </div>

      </CardContent>
    </Card>
  );
}