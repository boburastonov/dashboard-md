import React, { ReactNode } from "react";
import { Layout } from "antd";

const { Content } = Layout;

import cls from "./Content.module.scss";

interface IProps {
  children: ReactNode;
}

const Contentt: React.FC<IProps> = ({ children }) => (
  <Layout className={cls.wrapper}>
    <Content>{children}</Content>
  </Layout>
);

export default Contentt;
