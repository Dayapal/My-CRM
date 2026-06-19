import { Lead }
from "../leads/lead.model.js";

import { Deal }
from "../deals/deal.model.js";

import { Task }
from "../task/task.model.js";

import { Activity }
from "../activities/activity.model.js";

import {
  LEAD_STATUS,
  DEAL_STAGE,
  TASK_STATUS,
} from "../../constants/index.js";



export const getDashboardData =
  async (
    organizationId: string
  ) => {
    const [
      totalLeads,
      convertedLeads,

      deals,

      tasks,

      recentActivities,
    ] = await Promise.all([
      Lead.countDocuments({
        organization:
          organizationId,
      }),

      Lead.countDocuments({
        organization:
          organizationId,

        status:
          LEAD_STATUS.WON,
      }),

      Deal.find({
        organization:
          organizationId,
      }),

      Task.find({
        organization:
          organizationId,
      }),

      Activity.find({
        organization:
          organizationId,
      })
        .sort({
          createdAt: -1,
        })
        .limit(10)
        .populate(
          "user",
          "firstName lastName"
        ),
    ]);

    const pipelineValue =
      deals.reduce(
        (
          sum,
          deal
        ) =>
          sum +
          deal.value,
        0
      );

    const wonRevenue =
      deals
        .filter(
          deal =>
            deal.stage ===
            DEAL_STAGE.WON
        )
        .reduce(
          (
            sum,
            deal
          ) =>
            sum +
            deal.value,
          0
        );

    const completedTasks =
      tasks.filter(
        task =>
          task.status ===
          TASK_STATUS.COMPLETED
      ).length;

    return {
      leads: {
        total:
          totalLeads,

        converted:
          convertedLeads,
      },

      deals: {
        totalDeals:
          deals.length,

        pipelineValue,

        wonRevenue,
      },

      tasks: {
        totalTasks:
          tasks.length,

        completedTasks,
      },

      recentActivities,
    };
  };


  export const getDashboardOverview =
  async (
    organizationId: string
  ) => {
    const [
      leads,
      deals,
      tasks,
      recentActivities,
    ] = await Promise.all([
      Lead.find({
        organization:
          organizationId,
      }),

      Deal.find({
        organization:organizationId,
      })
        .populate(
          "company",
          "name"
        )
        .populate(
          "contact",
          "firstName lastName"
        )
        .populate(
            "owner",
            "firstName lastName"
        ),

      Task.find({
        organization:
          organizationId,
      }),

      Activity.find({
        organization:
          organizationId,
      })
        .sort({
          createdAt: -1,
        })
        .limit(10)
        .populate(
          "user",
          "firstName lastName"
        ),
    ]);

    const kanban = {
      lead: deals.filter(
        d =>
          d.stage ===
          DEAL_STAGE.LEAD
      ),

      qualified:
        deals.filter(
          d =>
            d.stage ===
            DEAL_STAGE.QUALIFIED
        ),

      proposal:
        deals.filter(
          d =>
            d.stage ===
            DEAL_STAGE.PROPOSAL
        ),

      negotiation:
        deals.filter(
          d =>
            d.stage ===
            DEAL_STAGE.NEGOTIATION
        ),

      won: deals.filter(
        d =>
          d.stage ===
          DEAL_STAGE.WON
      ),

      lost: deals.filter(
        d =>
          d.stage ===
          DEAL_STAGE.LOST
      ),
    };

    const completedTasks =
      tasks.filter(
        task =>
          task.status ===
          TASK_STATUS.COMPLETED
      ).length;

    const convertedLeads =
      leads.filter(
        lead =>
          lead.status ===
          LEAD_STATUS.WON
      ).length;

    const pipelineValue =
      deals.reduce(
        (
          sum,
          deal
        ) =>
          sum + deal.value,
        0
      );

    return {
      leads: {
        total:
          leads.length,

        converted:
          convertedLeads,

        conversionRate:
          leads.length === 0
            ? 0
            : Math.round(
                (
                  convertedLeads /
                  leads.length
                ) * 100
              ),
      },

      deals: {
        total:
          deals.length,

        pipelineValue,

        wonDeals:
          kanban.won.length,

        lostDeals:
          kanban.lost.length,
      },

      tasks: {
        total:
          tasks.length,

        completed:
          completedTasks,

        completionRate:
          tasks.length === 0
            ? 0
            : Math.round(
                (
                  completedTasks /
                  tasks.length
                ) * 100
              ),
      },

      recentActivities,

      kanban,
    };
  };