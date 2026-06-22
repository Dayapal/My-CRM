import DashboardLayout from "@/layouts/DashboardLayout";

import {
  useTasks,
  useTaskMetrics,
} from "../useTasks";

import TasksTable from "../components/TasksTable";

import TaskMetricsCards from "../components/TaskMetricsCards";

import CreateTaskDialog from "../components/CreateTaskDialog";

import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function TasksPage() {
  const [open, setOpen] =
    useState(false);

  const {
    data,
    isLoading,
  } = useTasks();

  const {
    data: metrics,
  } = useTaskMetrics();

  if (isLoading) {
    return (
      <DashboardLayout>
        Loading...
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Tasks
            </h1>

            <p className="text-slate-500">
              Manage and track all tasks
            </p>
          </div>

          <Button
            onClick={() =>
              setOpen(true)
            }
          >
            Create Task
          </Button>

        </div>

        <TaskMetricsCards
          metrics={metrics}
        />

        <TasksTable
          tasks={data || []}
        />

      </div>

      <CreateTaskDialog
        open={open}
        onClose={() =>
          setOpen(false)
        }
      />

    </DashboardLayout>
  );
}