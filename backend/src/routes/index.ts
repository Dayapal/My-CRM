import { Router } from "express";

import authRoutes from "../modules/auth/auth.routes.js";
import leadRoutes from "../modules/leads/lead.routes.js";
import activityRoutes from "../modules/activities/activity.routes.js";
import contactRoutes from "../modules/contacts/contact.routes.js";
import companyRoutes from "../modules/companies/company.routes.js";
import dealRoutes from "../modules/deals/deal.routes.js";
import taskRoutes from "../modules/task/task.routes.js";
import dashboardRoutes from "../modules/dashboard/dashboard.routes.js";
import userRoutes from "../modules/users/user.routes.js";
import notificationRoutes from "../modules/notifications/notification.routes.js";
import reportRoutes from "../modules/reports/report.routes.js";
import settingsRoutes from "../modules/settings/settings.routes.js";
import meetingRoutes from "../modules/meetings/meeting.routes.js";
import noteRoutes from "../modules/notes/note.routes.js";
import searchRoutes from "../modules/search/search.routes.js";



const router =
  Router();

router.use(
  "/auth",
  authRoutes
);

router.use(
  "/leads",
  leadRoutes
);

router.use(
  "/activities",
  activityRoutes
);
router.use(
  "/contacts",
  contactRoutes
);
router.use(
  "/companies",
  companyRoutes
);

router.use(
  "/deals",
  dealRoutes
);
router.use(
  "/tasks",
  taskRoutes
);

router.use(
  "/dashboard",
  dashboardRoutes
);
router.use(
  "/users",
  userRoutes
);
router.use(
  "/notifications",
  notificationRoutes
);

router.use(
  "/reports",
  reportRoutes
);
router.use(
  "/settings",
  settingsRoutes
);

router.use(
  "/meetings",
  meetingRoutes
);
router.use(
  "/notes",
  noteRoutes
  
);
router.use(
  "/search",
  searchRoutes
);
export default router;