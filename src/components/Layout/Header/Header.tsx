import React, { useMemo } from "react";
import { Layout } from "antd";
import { useTranslation } from "react-i18next";
import cx from "classnames";
import { GrMenu } from "react-icons/gr";

const { Header } = Layout;

import { useAuth } from "@/modules/auth/hooks";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";

import cls from "./Header.module.scss";

interface Language {
  key: "uz" | "en" | "ru";
  name: string;
  flag: "Uzbek" | "English" | "Russian";
}

interface Item {
  name: string;
  icon: string;
  onClick: () => void;
}

interface IProps {
  header?: string;
  onToggle: () => void;
}

const Headerr: React.FC<IProps> = ({ onToggle }) => {
  const { i18n } = useTranslation();
  const {
    profile: { firstName, lastName },
    methods: { logout },
  } = useAuth();

  const languages: Language[] = useMemo(
    () => [
      {
        key: "uz",
        name: "Uzbek",
        flag: "Uzbek",
      },
      {
        key: "en",
        name: "English",
        flag: "English",
      },
      {
        key: "ru",
        name: "Russ",
        flag: "Russian",
      },
    ],
    [i18n.language]
  );

  const items: Item[] = useMemo(
    () => [
      {
        name: "Logout",
        icon: "Logout",
        onClick: () => logout(),
      },
    ],
    []
  );

  const currentLanguage = useMemo(
    () => languages.find((language) => language.key === i18n.language),
    [i18n.language]
  );

  return (
    <Layout className={cls.wrapper}>
      <Header>
        <Icon
          className={cls.toggle}
          onClick={onToggle}
          name="MenuFoldOutlined"
          size={28}
        />

        <button
          style={{ fontSize: "24px", cursor: "pointer" }}
          onClick={onToggle}
        >
          {" "}
          <GrMenu />
        </button>

        <div className={cls.settings}>
          <Dropdown
            menu={{
              items: [
                ...languages.map((item) => ({
                  key: item.name,
                  label: (
                    <div
                      className={cx(
                        cls.language,
                        item.key === i18n.language && cls.active
                      )}
                      onClick={() => i18n.changeLanguage(item.key)}
                    >
                      <Icon
                        name={item.flag}
                        type="flag"
                        variant="regular"
                        size={20}
                      />
                      <div>{item.name}</div>
                    </div>
                  ),
                })),
              ],
            }}
            overlayClassName={cls.overlay}
            trigger={["click"]}
          >
            <div className={cls.currentLanguage}>
              <Icon
                name={currentLanguage?.flag}
                type="flag"
                variant="regular"
                size={32}
              />
            </div>
          </Dropdown>

          <Dropdown
            menu={{
              items: [
                ...items.map((item) => ({
                  key: item.name,
                  label: (
                    <div className={cls.item} onClick={item.onClick}>
                      <Icon name={item.icon} size={16} />
                      <div>{item.name}</div>
                    </div>
                  ),
                })),
              ],
            }}
            overlayClassName={cls.overlay}
            trigger={["click"]}
          >
            <div className={cls.name}>
              {firstName.charAt(0)} {lastName.charAt(0)}
            </div>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default Headerr;
