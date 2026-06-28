import { Router }
from "express";

import {
  createMeeting,
  getMeetings,
  getMeeting,
  updateMeeting,
  deleteMeeting,
  updateMeetingStatus,
  getCalendarMeetings,
} from "./meeting.controller.js";

import {
  protect,
} from "../../middleware/auth.middleware.js";

import {
  validate,
} from "../../middleware/validate.middleware.js";

import {
  createMeetingSchema,
  updateMeetingSchema,
  updateMeetingStatusSchema,
} from "./meeting.validation.js";

const router =
  Router();

router.use(protect);

/*
|--------------------------------------------------------------------------
| Create Meeting
|--------------------------------------------------------------------------
*/

router.post(
  "/",
  validate(
    createMeetingSchema
  ),
  createMeeting
);

/*
|--------------------------------------------------------------------------
| Calendar View
|--------------------------------------------------------------------------
*/

router.get(
  "/calendar",
  getCalendarMeetings
);

/*
|--------------------------------------------------------------------------
| Get All Meetings
|--------------------------------------------------------------------------
*/

router.get(
  "/",
  getMeetings
);

/*
|--------------------------------------------------------------------------
| Get Single Meeting
|--------------------------------------------------------------------------
*/

router.get(
  "/:id",
  getMeeting
);

/*
|--------------------------------------------------------------------------
| Update Meeting
|--------------------------------------------------------------------------
*/

router.patch(
  "/:id",
  validate(
    updateMeetingSchema
  ),
  updateMeeting
);

/*
|--------------------------------------------------------------------------
| Update Meeting Status
|--------------------------------------------------------------------------
*/

router.patch(
  "/:id/status",
  validate(
    updateMeetingStatusSchema
  ),
  updateMeetingStatus
);

/*
|--------------------------------------------------------------------------
| Delete Meeting
|--------------------------------------------------------------------------
*/

router.delete(
  "/:id",
  deleteMeeting
);

export default router;