import { z } from "zod";
import {
  DEAL_STAGE,
} from "../../constants/deal.js";

export const createDealSchema =
  z.object({
    title:
      z.string().min(2),

    value:
      z.number().positive(),

    company:
      z.string(),

    contact:
      z.string().optional(),

    expectedCloseDate:
      z.string().optional(),
  });

export const updateDealSchema =
  createDealSchema.partial();


  export const updateDealStageSchema =
  z.object({
    stage: z.enum([
      DEAL_STAGE.LEAD,
      DEAL_STAGE.QUALIFIED,
      DEAL_STAGE.PROPOSAL,
      DEAL_STAGE.NEGOTIATION,
      DEAL_STAGE.WON,
      DEAL_STAGE.LOST,
    ]),
  });