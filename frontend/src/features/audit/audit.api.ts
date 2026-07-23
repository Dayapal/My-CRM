import { api } from "@/services/api";

import type {
  AuditLog,
} from "./audit.types";

/*
=========================================
Get All Audit Logs
GET /audit
=========================================
*/

export const getAuditLogs =
  async () => {

    const response =
      await api.get<{
        success: boolean;
        data: AuditLog[];
      }>("/audit");

    return response.data;

  };

/*
=========================================
Get Single Audit Log
GET /audit/:id
=========================================
*/

export const getAuditLog =
  async (
    id: string
  ) => {

    const response =
      await api.get<{
        success: boolean;
        data: AuditLog;
      }>(
        `/audit/${id}`
      );

    return response.data;

  };


export const deleteAuditLog =
  async (
    id: string
  ) => {
    const response =
      await api.delete(
        `/audit/${id}`
      );
    return response.data;

  };