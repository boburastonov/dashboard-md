import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import * as Hooks from "@/modules/auth/hooks";

import { IPropsSidebar } from "@/components/Layout/Sidebar/Types";

import useRoute from "@/hooks/useRoute";
import useLocalStorage from "@/hooks/useLocalStorage";

import Icon from "@/components/Icon";
import Layout from "@/components/Layout";

import routes from "./routes";
import { ISubMenu } from "@/components/Menu/Types";
import { PERMISSIONS } from "@/helpers/enums";
import { JSX } from "react/jsx-runtime";

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = ({ children }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    profile: { permissions },
  } = Hooks.useAuth();

  const [openedRoute, route] = useRoute(routes, "/");
  const [collapsed, setCollapsed] = useLocalStorage("collapse-sidebar", false);
  const [openedKeys, setOpenedKeys] = useState<string[]>([
    (!collapsed && openedRoute) || "",
  ]);

  const filterRoutes = () => {
    const array: {
      label: string;
      icon: JSX.Element;
      key: string;
      title: string;
      permissions: PERMISSIONS;
      suffix?: React.ReactNode;
      children?: ISubMenu[] | undefined;
    }[] = [];
    routes.forEach((route) => {
      if (permissions.includes(route.permissions)) {
        array.push({
          ...route,
          label: t(route.title),
          icon: <Icon size={20} name={route.icon} />,
        });
      }
    });
    return array;
  };

  return (
    <Layout
      onToggle={() => setCollapsed((c) => !c)}
      sidebar={
        {
          activeKey: route,
          defaultSelectedKeys: [route],
          onOpenChange: (keys: React.SetStateAction<string[]>) =>
            setOpenedKeys(keys),
          openKeys: openedKeys,
          onSelect: ({ key }: any) => navigate(key),
          collapsed: collapsed,
          items: filterRoutes(),
          width: 256,
          collapsedWidth: 48,
        } as unknown as IPropsSidebar
      }
    >
      {children}
    </Layout>
  );
};

export default Main;
