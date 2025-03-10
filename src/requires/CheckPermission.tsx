import React from "react";

import { PERMISSIONS } from "@/helpers/enums";

import * as Hooks from "@/modules/auth/hooks";

import RoleDenied from "@/pages/RoleDenied";

interface IProps {
  page: React.ReactNode;
  permission: PERMISSIONS;
}

const CheckPermission: React.FC<IProps> = ({ page, permission }) => {
  const { profile } = Hooks.useAuth();

  if (!profile.permissions.length) return null;

  if (profile.permissions.includes(permission)) return <>{page}</>;

  return <RoleDenied />;
};

export default CheckPermission;
