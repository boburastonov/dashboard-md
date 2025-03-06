import React from "react";
import Layout from "antd/lib/layout";

import cx from "classnames";

import { IPropsSidebar } from "./Types";

import Menu from "@/components/Menu";

// import Logo from '@/assets/images/logo.png'

import "./Sidebar.scss";
import cls from "./Sidebar.module.scss";

const Sidebar: React.FC<IPropsSidebar> = ({
  collapsedWidth,
  collapsed,
  ...props
}) => (
  <Layout.Sider
    width={250}
    className={cx(cls.wrapper, { [cls.wrapperCollaped]: collapsed })}
    {...{ collapsedWidth, collapsed }}
    trigger={null}
    collapsible
  >
    {/* <div className={cls.wrapperLogo}>*/}
    {/*     <img src={Logo} alt='Logo'/>*/}
    {/*</div>*/}
    {/*  <div className="demo-logo" />*/}
    <Menu
      rootClassName={cls.menu}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      {...props}
    />
  </Layout.Sider>
);

export default Sidebar;
