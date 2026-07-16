export interface DashboardOverview {

  leads: {

    total: number;

    converted: number;

    conversionRate: number;

  };

  deals: {
    total: number;
    pipelineValue: number;
    wonDeals: number;
    lostDeals: number;

  };

  tasks: {

    total: number;
    completed: number;
    completionRate: number;

  };

  recentActivities: any[];

  kanban: {

    lead: any[];

    qualified: any[];

    proposal: any[];

    negotiation: any[];

    won: any[];

    lost: any[];

  };

}