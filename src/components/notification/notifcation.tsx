import notificationBase, { ArgsProps } from "antd/lib/notification";

import Icon from "@/components/Icon";

import "./notification.scss";

export interface IArgs {
  key?: string;
  message: string;
  description?: string;
  duration?: number | null;
  placement?: ArgsProps["placement"];
}

interface IReturn {
  success(args: IArgs): void;
  error(args: IArgs): void;
  warning(args: IArgs): void;
  info(args: IArgs): void;
  destroy(): void;
}

const notification = (): IReturn => {
  const props = {
    closeIcon: <Icon name="Close" />,
    placement: "bottomRight" as ArgsProps["placement"],
  };

  return {
    success: (args: IArgs) =>
      notificationBase.success({
        icon: <Icon name="TickCircle" type="sox" variant="bold" />,
        ...props,
        ...args,
      }),
    error: (args: IArgs) =>
      notificationBase.error({
        icon: <Icon name="CloseCircle" type="sox" variant="bold" />,
        ...props,
        ...args,
      }),
    warning: (args: IArgs) =>
      notificationBase.warning({
        icon: <Icon name="InfoCircle" type="sox" variant="bold" />,
        ...props,
        ...args,
      }),
    info: (args: IArgs) =>
      notificationBase.info({
        icon: <Icon name="InfoCircle" type="sox" variant="bold" />,
        ...props,
        ...args,
      }),
    destroy: () => notificationBase.destroy(),
  };
};

export default notification();
