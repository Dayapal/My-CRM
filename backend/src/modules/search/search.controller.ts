import {
  Request,
  Response,
} from "express";

import { asyncHandler }
from "../../utils/asyncHandler.js";

import * as SearchService
from "./search.service.js";

export const globalSearch =
  asyncHandler(
    async (
      req: Request,
      res: Response
    ) => {

      const query =
        req.query.q as string;

      if (
        !query ||
        query.trim() === ""
      ) {

        return res.json({

          success: true,

          data: {

            leads: [],

            contacts: [],

            companies: [],

            deals: [],

            tasks: [],

            meetings: [],

            notes: [],

            documents: [],

          },

        });

      }

      const results =
        await SearchService.globalSearch(

          req.user
            .organizationId,

          query

        );

      res.json({

        success: true,

        data:
          results,

      });

    }
  );