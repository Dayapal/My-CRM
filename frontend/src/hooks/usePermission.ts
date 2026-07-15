import { useMemo } from "react";

import {
  useMe,
} from "@/features/auth/useMe";

import {
  ROLE_PERMISSIONS,
} from "@/constants/role-permissions";

import type {
  Permission,
} from "@/constants/permissions";

export function usePermission() {

  const {
    data,
  } = useMe();

  const user =
    data?.data?.user;

  const permissions =
    useMemo(() => {

      if (!user) {

        return [];

      }

      const role = user.role as keyof typeof ROLE_PERMISSIONS | undefined;

      if (!role) {
        return [];
      }

      return ROLE_PERMISSIONS[role] ?? [];

    }, [user]);

  const can = (
    permission: Permission
  ) =>

    permissions.includes(
      permission
    );

  return {

    user,

    role:
      user?.role,

    permissions,

    can,

  };

}