import DashboardLayout from "@/layouts/DashboardLayout";

import WorkflowTable from "../components/WorkflowTable";
import CreateWorkflowDialog from "../components/CreateWorkflowDialog";

import {
  useWorkflows,
} from "../useWorkflow";

export default function WorkflowPage() {

  const {

    data,

    isLoading,

    isError,

  } = useWorkflows();

  if (isLoading) {

    return (

      <DashboardLayout>

        <div className="flex h-[60vh] items-center justify-center">

          Loading Workflows...

        </div>

      </DashboardLayout>

    );

  }

  if (isError) {

    return (

      <DashboardLayout>

        <div className="flex h-[60vh] items-center justify-center">

          Failed To Load Workflows

        </div>

      </DashboardLayout>

    );

  }

  return (

    <DashboardLayout>

      <div className="space-y-6">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold">

              Workflow Automation

            </h1>

            <p className="text-gray-500">

              Automate repetitive CRM tasks.

            </p>

          </div>

          <CreateWorkflowDialog />

        </div>

        {/* Table */}

        <WorkflowTable

          workflows={
            data?.data ?? []
          }

        />

      </div>

    </DashboardLayout>

  );

}