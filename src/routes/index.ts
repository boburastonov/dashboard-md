import { lazy } from "react";

import { PERMISSIONS } from "@/helpers/enums";

export default [
  {
    path: "/",
    Page: lazy(() => import("@/pages/Dashboard")),
    permission: PERMISSIONS.VIEW_USERS,
  },
  // {
  //   path: '/banners',
  //   Page: lazy(() => import('@/pages/Banner/List')),
  //   permission: PERMISSIONS.VIEW_BANNERS,
  // },
  // {
  //   path: '/banners/create',
  //   Page: lazy(() => import('@/pages/Banner/Create')),
  //   permission: PERMISSIONS.CREATE_BANNER,
  // },
  // {
  //   path: '/banners/update/:id',
  //   Page: lazy(() => import('@/pages/Banner/Update')),
  //   permission: PERMISSIONS.UPDATE_BANNER,
  // },
  // {
  //   path: '/networks',
  //   Page: lazy(() => import('@/pages/Network/List')),
  //   permission: PERMISSIONS.VIEW_NETWORKS,
  // },
  // {
  //   path: '/networks/create',
  //   Page: lazy(() => import('@/pages/Network/Create')),
  //   permission: PERMISSIONS.CREATE_NETWORK,
  // },
  // {
  //   path: '/networks/update/:id',
  //   Page: lazy(() => import('@/pages/Network/Update')),
  //   permission: PERMISSIONS.UPDATE_NETWORK,
  // },
  // {
  //   path: '/about/managements',
  //   Page: lazy(() => import('@/pages/management/List')),
  //   permission: PERMISSIONS.VIEW_MANAGEMENTS,
  // },
  // {
  //   path: '/about/managements/create',
  //   Page: lazy(() => import('@/pages/management/Create')),
  //   permission: PERMISSIONS.CREATE_MANAGEMENT,
  // },
  // {
  //   path: '/about/managements/update/:id',
  //   Page: lazy(() => import('@/pages/management/Update')),
  //   permission: PERMISSIONS.UPDATE_MANAGEMENT,
  // },
  // {
  //   path: '/about/management-system',
  //   Page: lazy(() => import('@/pages/management-system/List')),
  //   permission: PERMISSIONS.VIEW_CENTRAL_APPARATUSES,
  // },
  // {
  //   path: '/about/management-system/create',
  //   Page: lazy(() => import('@/pages/management-system/Create')),
  //   permission: PERMISSIONS.CREATE_CENTRAL_APPARATUS,
  // },
  // {
  //   path: '/about/management-system/update/:id',
  //   Page: lazy(() => import('@/pages/management-system/Update')),
  //   permission: PERMISSIONS.UPDATE_CENTRAL_APPARATUS,
  // },
  // {
  //   path: '/about/districts',
  //   Page: lazy(() => import('@/pages/District/List')),
  //   permission: PERMISSIONS.VIEW_DISTRICTS,
  // },
  // {
  //   path: '/about/districts/create',
  //   Page: lazy(() => import('@/pages/District/Create')),
  //   permission: PERMISSIONS.CREATE_DISTRICT,
  // },
  // {
  //   path: '/about/districts/update/:id',
  //   Page: lazy(() => import('@/pages/District/Update')),
  //   permission: PERMISSIONS.UPDATE_DISTRICT,
  // },
  // {
  //   path: '/about/page-infos',
  //   Page: lazy(() => import('@/pages/Page-info')),
  //   permission: PERMISSIONS.VIEW_PAGE_INFOS,
  // },
  // {
  //   path: '/about/work-orders',
  //   Page: lazy(() => import('@/pages/Work-order')),
  //   permission: PERMISSIONS.VIEW_WORK_ORDERS,
  // },
  // {
  //   path: '/contacts',
  //   Page: lazy(() => import('@/pages/Contact')),
  //   permission: PERMISSIONS.CREATE_OR_UPDATE_CONTACT_US,
  // },
  // {
  //   path: '/open-data',
  //   Page: lazy(() => import('@/pages/Open-data/List')),
  //   permission: PERMISSIONS.VIEW_OPEN_DATAS,
  // },
  // {
  //   path: '/open-data/create',
  //   Page: lazy(() => import('@/pages/Open-data/Create')),
  //   permission: PERMISSIONS.CREATE_OPEN_DATA,
  // },
  // {
  //   path: '/open-data/update/:id',
  //   Page: lazy(() => import('@/pages/Open-data/Update')),
  //   permission: PERMISSIONS.UPDATE_OPEN_DATA,
  // },
  // {
  //   path: '/open-data/category',
  //   Page: lazy(() => import('@/pages/Open-data-category/List')),
  //   permission: PERMISSIONS.VIEW_OPEN_DATAS,
  // },
  // {
  //   path: '/open-data/category/create',
  //   Page: lazy(() => import('@/pages/Open-data-category/Create')),
  //   permission: PERMISSIONS.CREATE_OPEN_DATA,
  // },
  // {
  //   path: '/open-data/category/update/:id',
  //   Page: lazy(() => import('@/pages/Open-data-category/Update')),
  //   permission: PERMISSIONS.UPDATE_OPEN_DATA,
  // },
  // {
  //   path: '/blogs',
  //   Page: lazy(() => import('@/pages/Blog/List')),
  //   permission: PERMISSIONS.VIEW_BLOGS,
  // },
  // {
  //   path: '/blogs/create',
  //   Page: lazy(() => import('@/pages/Blog/Create')),
  //   permission: PERMISSIONS.CREATE_BLOG,
  // },
  // {
  //   path: '/blogs/update/:id',
  //   Page: lazy(() => import('@/pages/Blog/Update')),
  //   permission: PERMISSIONS.UPDATE_BLOG,
  // },
  // {
  //   path: '/roles',
  //   Page: lazy(() => import('@/pages/Role/List')),
  //   permission: PERMISSIONS.VIEW_ROLES,
  // },
  // {
  //   path: '/roles/create',
  //   Page: lazy(() => import('@/pages/Role/Create')),
  //   permission: PERMISSIONS.CREATE_ROLE,
  // },
  // {
  //   path: '/roles/update/:id',
  //   Page: lazy(() => import('@/pages/Role/Update')),
  //   permission: PERMISSIONS.UPDATE_ROLE,
  // },
  // {
  //   path: '/users',
  //   Page: lazy(() => import('@/pages/User/List')),
  //   permission: PERMISSIONS.VIEW_USERS,
  // },
  // {
  //   path: '/users/create',
  //   Page: lazy(() => import('@/pages/User/Create')),
  //   permission: PERMISSIONS.CREATE_USER,
  // },
  // {
  //   path: '/users/update/:id',
  //   Page: lazy(() => import('@/pages/User/Update')),
  //   permission: PERMISSIONS.UPDATE_USER,
  // },
  // {
  //   path: '/translations',
  //   Page: lazy(() => import('@/pages/Translation/List')),
  //   permission: PERMISSIONS.VIEW_USERS,
  // },
  // {
  //   path: '/translations/create',
  //   Page: lazy(() => import('@/pages/Translation/Create')),
  //   permission: PERMISSIONS.CREATE_USER,
  // },
  // {
  //   path: '/translations/update/:id',
  //   Page: lazy(() => import('@/pages/Translation/Update')),
  //   permission: PERMISSIONS.UPDATE_USER,
  // },
];
