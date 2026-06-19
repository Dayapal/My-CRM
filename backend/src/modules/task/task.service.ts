import { Task } from "./task.model.js";
import {
  createActivity,
} from "../activities/activity.service.js";

import {
  ACTIVITY_TYPES,
   TASK_STATUS
} from "../../constants/index.js";



export const createTask = async (
  payload: any,
  organizationId: string,
  userId: string
) => {
  const task =
    await Task.create({
      ...payload,
      assignedTo:
        payload.assignedTo ||
        userId,
      organization:
        organizationId,
    });

  await createActivity({
    organization:
      organizationId,

    user: userId,

    type:
      ACTIVITY_TYPES.TASK_CREATED,

    entityType:
      "Task",

    entityId:
      task._id.toString(),

    description:
      `Task ${task.title} created`,
  });

  return Task.findById(
    task._id
  )
    .populate(
      "assignedTo",
      "firstName lastName email"
    )
    .populate(
      "lead",
      "firstName lastName"
    )
    .populate(
      "contact",
      "firstName lastName"
    )
    .populate(
      "deal",
      "title stage"
    );
};

export const getTasks =
  async (
    organizationId: string,
    query: any
  ) => {
    const {
      status,
      assignedTo,
    } = query;

    const filter: any = {
      organization:
        organizationId,
    };

    if (status) {
      filter.status =
        status;
    }

    if (assignedTo) {
      filter.assignedTo =
        assignedTo;
    }

    return Task.find(filter)
      .populate(
        "assignedTo",
        "firstName lastName"
      )
      .populate(
        "lead",
        "firstName lastName"
      )
      .populate(
        "contact",
        "firstName lastName"
      )
      .populate(
        "deal",
        "title stage"
      )
      .sort({
        createdAt: -1,
      });
  };


export const updateTaskStatus =
  async (
    taskId: string,
    organizationId: string,
    userId: string,
    status: string
  ) => {
    const task =
      await Task.findOneAndUpdate(
        {
          _id: taskId,
          organization:
            organizationId,
        },
        {
          status,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    if (!task) {
      return null;
    }

    const activityType =
      status ===
      TASK_STATUS.COMPLETED
        ? ACTIVITY_TYPES.TASK_COMPLETED
        : ACTIVITY_TYPES.TASK_UPDATED;

    const description =
      status ===
      TASK_STATUS.COMPLETED
        ? "Task completed"
        : `Task moved to ${status}`;

    await createActivity({
      organization:
        organizationId,

      user: userId,

      type: activityType,

      entityType: "Task",

      entityId:
        task._id.toString(),

      description,
    });

    return Task.findById(
      task._id
    )
      .populate(
        "assignedTo",
        "firstName lastName email"
      )
      .populate(
        "lead",
        "firstName lastName"
      )
      .populate(
        "contact",
        "firstName lastName"
      )
      .populate(
        "deal",
        "title stage"
      );
  };

  export const getTaskMetrics =
  async (
    organizationId: string
  ) => {
    const tasks =
      await Task.find({
        organization:
          organizationId,
      });

    const totalTasks =
      tasks.length;

    const completedTasks =
      tasks.filter(
        task =>
          task.status ===
          TASK_STATUS.COMPLETED
      ).length;

    const pendingTasks =
      tasks.filter(
        task =>
          task.status ===
          TASK_STATUS.TODO
      ).length;

    const inProgressTasks =
      tasks.filter(
        task =>
          task.status ===
          TASK_STATUS.IN_PROGRESS
      ).length;

    const overdueTasks =
      tasks.filter(task => {
        if (!task.dueDate)
          return false;

        return (
          task.dueDate <
            new Date() &&
          task.status !==
            TASK_STATUS.COMPLETED
        );
      }).length;

    const completionRate =
      totalTasks === 0
        ? 0
        : Math.round(
            (completedTasks /
              totalTasks) *
              100
          );

    return {
      totalTasks,
      completedTasks,
      pendingTasks,
      inProgressTasks,
      overdueTasks,
      completionRate,
    };
  };