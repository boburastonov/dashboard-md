import { PERMISSIONS } from "@/helpers/enums";

import { IMenu } from "@/components/Menu/Types";

const routes: IMenu[] = [
  {
    key: "/",
    icon: "Dashboard",
    title: "dashboard",
    permissions: PERMISSIONS.VIEW_USERS,
  },
  {
    key: "/networks",
    icon: "Dashboard",
    title: "network",
    permissions: PERMISSIONS.VIEW_NETWORKS,
  },
  {
    key: "/banners",
    icon: "Dashboard",
    title: "banners",
    permissions: PERMISSIONS.VIEW_BANNERS,
  },
  {
    key: "/open-data",
    icon: "Dashboard",
    title: "open-data",
    permissions: PERMISSIONS.VIEW_OPEN_DATAS,
    children: [
      {
        key: "/open-data/category",
        icon: "open-data-category",
        title: "open-data-category",
        permissions: PERMISSIONS.VIEW_OPEN_DATAS,
      },
      {
        key: "/open-data",
        icon: "open-data",
        title: "open-data",
        permissions: PERMISSIONS.VIEW_OPEN_DATAS,
      },
    ],
  },
  {
    key: "/about",
    icon: "Dashboard",
    title: "about-management",
    permissions: PERMISSIONS.VIEW_MANAGEMENT,
    children: [
      {
        key: "/about/management-system",
        icon: "management-system",
        title: "management-system",
        permissions: PERMISSIONS.VIEW_CENTRAL_APPARATUSES,
      },
      {
        key: "/about/managements",
        icon: "management",
        title: "management",
        permissions: PERMISSIONS.VIEW_MANAGEMENTS,
      },
      {
        key: "/about/districts",
        icon: "districts",
        title: "districts",
        permissions: PERMISSIONS.VIEW_DISTRICTS,
      },
      {
        key: "/about/work-orders",
        icon: "work-orders",
        title: "work-orders",
        permissions: PERMISSIONS.VIEW_WORK_ORDERS,
      },
      {
        key: "/about/page-infos",
        icon: "page-info",
        title: "page-info",
        permissions: PERMISSIONS.VIEW_PAGE_INFOS,
      },
    ],
  },
  {
    key: "/contacts",
    icon: "Dashboard",
    title: "contacts",
    permissions: PERMISSIONS.VIEW_CONTACT_USES,
  },
  {
    key: "/blogs",
    icon: "Dashboard",
    title: "blog",
    permissions: PERMISSIONS.VIEW_BLOGS,
  },
  {
    key: "/users",
    icon: "Dashboard",
    title: "users",
    permissions: PERMISSIONS.VIEW_USERS,
  },
  {
    key: "/roles",
    icon: "Dashboard",
    title: "roles",
    permissions: PERMISSIONS.VIEW_ROLES,
  },
  {
    key: "/translations",
    icon: "Dashboard",
    title: "translations",
    permissions: PERMISSIONS.VIEW_TRANSLATION,
  },
];

export default routes;
