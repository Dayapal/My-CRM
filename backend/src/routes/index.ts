import { Router } from "express";

import authRoutes from "../modules/auth/auth.routes.js";
import leadRoutes from "../modules/leads/lead.routes.js";
import activityRoutes from "../modules/activities/activity.routes.js";
import contactRoutes from "../modules/contacts/contact.routes.js";
import companyRoutes from "../modules/companies/company.routes.js";
import dealRoutes from "../modules/deals/deal.routes.js";
import taskRoutes from "../modules/task/task.routes.js";
import dashboardRoutes from "../modules/dashboard/dashboard.routes.js";



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

export default router;