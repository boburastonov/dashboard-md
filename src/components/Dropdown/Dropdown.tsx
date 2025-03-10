import React from "react";
import DropdownBase, { DropDownProps as IProps } from "antd/lib/dropdown";

import "./Dropdown.scss";

const Dropdown: React.FC<IProps> = ({ children, ...props }) => (
  <DropdownBase {...props} destroyPopupOnHide>
    <div>{children}</div>
  </DropdownBase>
);

export default Dropdown;
