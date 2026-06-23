import { Notification }
from "./notification.model.js";

export const createNotification =
  async (
    payload: any
  ) => {
    return Notification.create(
      payload
    );
  };

export const getNotifications =
  async (
    userId: string
  ) => {
    return Notification.find({
      user: userId,
    }).sort({
      createdAt: -1,
    });
  };

export const markAsRead =
  async (
    notificationId: string
  ) => {
    return Notification.findByIdAndUpdate(
      notificationId,
      {
        isRead: true,
      },
      {
        new: true,
      }
    );
  };


//   export const createTask = async (
// await createNotification({
//   title: "New Task Assigned",

//   message:
//     `${task.title} assigned to you`,

//   user:
//     task.assignedTo,

//   organization:
//     organizationId,
// });

//   )