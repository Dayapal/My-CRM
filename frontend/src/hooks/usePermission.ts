import { useMemo } from "react";
import { useAuth } from "@/features/auth/useAuth";
import { ROLE_PERMISSIONS } from "@/constants/role-permissions";
import type { Permission } from "@/constants/permissions";

export function usePermission() {
  const { user } = useAuth();

  const permissions = useMemo(() => {
    if (!user) return [];

    return ROLE_PERMISSIONS[user.role as keyof typeof ROLE_PERMISSIONS] ?? [];
  }, [user]);

  const can = (permission: Permission) => {
    return permissions.includes(permission);
  };

  return {
    user,
    permissions,
    can,
  };
}