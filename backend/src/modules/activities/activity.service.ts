import { Activity }
from "./activity.model.js";

import type {ActivityType,} from "../../constants/activity-types.js";

interface CreateActivityInput {
  organization: string;
  user: string;
  type: ActivityType;
  entityType: string;
  entityId: string;
  description: string;
  metadata?: any;
}
export const createActivity =
  async (
    payload:
      CreateActivityInput
  ) => {
    return Activity.create(
      payload
    );
  };

  export const getRecentActivities =
  async (
    organizationId: string,
    limit = 20
  ) => {
    return Activity.find({
      organization:
        organizationId,
    })
      .populate(
        "user",
        "firstName lastName"
      )
      .sort({
        createdAt: -1,
      })
      .limit(limit);
  };


  export const getUserActivities =
  async (
    organizationId: string,
    userId: string
  ) => {

    return Activity.find({
      organization:
        organizationId,

      user: userId,
    })
      .populate(
        "user",
        "firstName lastName"
      )
      .sort({
        createdAt: -1,
      });
  };

export const getEntityActivities =
  async (
    organizationId: string,
    entityId: string
  ) => {

    return Activity.find({
      organization:
        organizationId,

      entityId,
    })
      .populate(
        "user",
        "firstName lastName"
      )
      .sort({
        createdAt: -1,
      });
  };