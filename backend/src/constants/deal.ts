export const DEAL_STAGE = {
  LEAD: "LEAD",
  QUALIFIED: "QUALIFIED",
  PROPOSAL: "PROPOSAL",
  NEGOTIATION: "NEGOTIATION",
  WON: "WON",
  LOST: "LOST",
} as const;

export type DealStage =
  (typeof DEAL_STAGE)[keyof typeof DEAL_STAGE];