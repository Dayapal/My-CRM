import { Lead } from "../leads/lead.model.js";
import { Contact } from "../contacts/contact.model.js";
import { Company } from "../companies/company.model.js";
import { Deal } from "../deals/deal.model.js";
import { Task } from "../task/task.model.js";

import {
  DEAL_STAGE,
  TASK_STATUS,
} from "../../constants/index.js";

export const getDashboardReport =
  async (
    organizationId: string
  ) => {

    const [
      totalLeads,
      totalContacts,
      totalCompanies,
      totalDeals,
      totalTasks,
    ] = await Promise.all([
      Lead.countDocuments({
        organization:
          organizationId,
      }),

      Contact.countDocuments({
        organization:
          organizationId,
      }),

      Company.countDocuments({
        organization:
          organizationId,
      }),

      Deal.countDocuments({
        organization:
          organizationId,
      }),

      Task.countDocuments({
        organization:
          organizationId,
      }),
    ]);

    const deals =
      await Deal.find({
        organization:
          organizationId,
      });

    const tasks =
      await Task.find({
        organization:
          organizationId,
      });

    const pipelineValue =
      deals.reduce(
        (sum, deal) =>
          sum + deal.value,
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
          (sum, deal) =>
            sum + deal.value,
          0
        );

    const lostRevenue =
      deals
        .filter(
          deal =>
            deal.stage ===
            DEAL_STAGE.LOST
        )
        .reduce(
          (sum, deal) =>
            sum + deal.value,
          0
        );

    const completedTasks =
      tasks.filter(
        task =>
          task.status ===
          TASK_STATUS.COMPLETED
      ).length;

    const completionRate =
      totalTasks === 0
        ? 0
        : Math.round(
            (
              completedTasks /
              totalTasks
            ) * 100
          );

    return {
      totalLeads,
      totalContacts,
      totalCompanies,
      totalDeals,
      totalTasks,

      pipelineValue,
      wonRevenue,
      lostRevenue,

      completedTasks,
      completionRate,
    };
  };