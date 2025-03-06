import React from "react";
import { MenuProps } from "antd/lib/menu";

import { PERMISSIONS } from "helpers/enums";

export interface IMenu {
  key: string;
  title: string;
  icon: string;
  permissions: PERMISSIONS;
  suffix?: React.ReactNode;
  children?: ISubMenu[];
}

export interface ISubMenu extends Omit<IMenu, "icon"> {
  icon?: string;
}

export interface IPropsMenu extends Omit<MenuProps, "items" | "className"> {
  items: Array<IMenu>;
}
