import type { ReactNode } from "react";
import { usePermission } from "@/hooks/usePermission";
import type { Permission } from "@/constants/permissions";

interface Props {
  permission: Permission;
  children: ReactNode;
  fallback?: ReactNode;
}

export default function PermissionGuard({
  permission,
  children,
  fallback = null,
}: Props) {
  const { can } = usePermission();

  if (!can(permission)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}