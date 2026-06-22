import DashboardLayout from "@/layouts/DashboardLayout";

import {
    useKanbanDeals,
    useDealMetrics,
} from "../useDeals";

import DealKanbanBoard from "../components/DealKanbanBoard";
import DealMetricsCards from "../components/DealMetricsCards";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateDealDialog from "../components/CreateDealDialog";

export default function DealsPage() {
    const {
        data: kanban,
        isLoading,
    } = useKanbanDeals();
    const [open, setOpen] = useState(false);

    const {
        data: metrics,
    } = useDealMetrics();

    if (isLoading) {
        return (
            <DashboardLayout>
                Loading...
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="space-y-3">


                <div className="flex justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            Deals Pipeline
                        </h1>

                        <p className="text-slate-500">
                            Manage sales opportunities
                        </p>

                    </div>

                    <Button
                        className=" bg-blue-400 hover:bg-blue-900 text-white
    "
                        onClick={() =>
                            setOpen(true)
                        }
                    >
                        Create Deal
                    </Button>
                </div>

                <DealMetricsCards
                    metrics={metrics}
                />

                <DealKanbanBoard
                    data={kanban}
                />

                <CreateDealDialog
                    open={open}
                    onClose={() =>
                        setOpen(false)
                    }
                />
            </div>

        </DashboardLayout>
    );
}