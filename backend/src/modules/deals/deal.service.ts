import { Deal }
from "./deal.model.js";

import {createActivity,} from "../activities/activity.service.js";

import {ACTIVITY_TYPES,} from "../activities/activity.types.js";
import {DEAL_STAGE,} from "../../constants/deal.js";

import { Activity }from "../activities/activity.model.js";

export const createDeal = async (
  payload: any,
  organizationId: string,
  userId: string
) => {
  const deal =
    await Deal.create({
      ...payload,
      owner: userId,
      organization:
        organizationId,
    });

  return Deal.findById(
    deal._id
  )
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
    );
};

export const getDeals =
  async (
    organizationId: string
  ) => {
    return Deal.find({
      organization:
        organizationId,
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
      )
      .sort({
        createdAt: -1,
      });
  };

export const updateDealStage =
  async (
    dealId: string,
    organizationId: string,
    userId: string,
    stage: string
  ) => {
    const deal =
      await Deal.findOneAndUpdate(
        {
          _id: dealId,
          organization:
            organizationId,
        },
        {
          stage,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!deal) {
      return null;
    }

    await createActivity({
      organization:
        organizationId,

      user: userId,

      type:
        ACTIVITY_TYPES.DEAL_UPDATED,

      entityType:
        "Deal",

      entityId:
        deal._id.toString(),

      description:
        `Deal moved to ${stage}`,
    });

    return deal;
  };


  export const getDealById =
  async (
    dealId: string,
    organizationId: string
  ) => {
    const deal =
      await Deal.findOne({
        _id: dealId,
        organization:
          organizationId,
      })
        .populate(
          "company"
        )
        .populate(
          "contact"
        )
        .populate(
          "owner",
          "firstName lastName email"
        );

    if (!deal) {
      return null;
    }

    const activities =
      await Activity.find({
        entityId: dealId,
      })
        .sort({
          createdAt: -1,
        });

    return {
      deal,
      activities,
    };
  };

  export const getDealMetrics =
  async (
    organizationId: string
  ) => {
    const deals =
      await Deal.find({
        organization:
          organizationId,
      });

    const totalDeals =
      deals.length;

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
          d =>
            d.stage ===
            DEAL_STAGE.WON
        )
        .reduce(
          (
            sum,
            d
          ) =>
            sum +
            d.value,
          0
        );

    const lostRevenue =
      deals
        .filter(
          d =>
            d.stage ===
            DEAL_STAGE.LOST
        )
        .reduce(
          (
            sum,
            d
          ) =>
            sum +
            d.value,
          0
        );

    return {
      totalDeals,
      pipelineValue,
      wonRevenue,
      lostRevenue,
    };
  };


  export const getKanbanDeals =
  async (
    organizationId: string
  ) => {
    const deals =
      await Deal.find({
        organization:
          organizationId,
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
        )
        .sort({
          createdAt: -1,
        });

    return {
      lead: deals.filter(
        d =>
          d.stage ===
          "LEAD"
      ),

      qualified:
        deals.filter(
          d =>
            d.stage ===
            "QUALIFIED"
        ),

      proposal:
        deals.filter(
          d =>
            d.stage ===
            "PROPOSAL"
        ),

      negotiation:
        deals.filter(
          d =>
            d.stage ===
            "NEGOTIATION"
        ),

      won: deals.filter(
        d =>
          d.stage ===
          "WON"
      ),

      lost: deals.filter(
        d =>
          d.stage ===
          "LOST"
      ),
    };
  };


  export const updateDeal = async (
  dealId: string,
  organizationId: string,
  payload: any
) => {
  return Deal.findOneAndUpdate(
    {
      _id: dealId,
      organization: organizationId,
    },
    payload,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const deleteDeal = async (
  dealId: string,
  organizationId: string
) => {
  return Deal.findOneAndDelete({
    _id: dealId,
    organization: organizationId,
  });
};