import React, { useContext, useState } from "react";
import { Header } from "../../layouts/Header";
import { NavbarLayout } from "../../components/Navbar";
import CustomBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./personal-information.scss";
import { Text } from "@consta/uikit/Text";
import { Tabs } from "@consta/uikit/Tabs";
import { TextField } from "@consta/uikit/TextField";
import { DragNDropField } from "@consta/uikit/DragNDropFieldCanary";
import { IconUser } from "@consta/icons/IconUser";
import { Button } from "@consta/uikit/Button";
import { IconLock } from "@consta/icons/IconLock";
import { IconClose } from "@consta/icons/IconClose";
import { ShowNavContext } from "../../context/ShowNavContext";

const pagesLink = [
  {
    label: "Geoapp",
    href: "#!",
  },
  {
    label: "Формы",
    href: "/messenger",
  },
];

const items = [
  "Форма простая",
  "Форма в блоке",
  "Форма пошаговая",
  "Форма с вкладками",
];

const getItemLabel = (label) => label;

const PersonalInformation = () => {
  const [value, setValue] = useState(items[0]);
  const { activeNav } = useContext(ShowNavContext);

  return (
    <div className="personal-information__page">
      <Header
        searchHeader={true}
        searchBox={true}
        hamburgerLogo={true}
        noFolderIcon={true}
        mediaHamburgerIcon={true}
      />
      <div className="flex">
        <NavbarLayout
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <div className="right-box">
          <div className="personal-information__header">
            <CustomBreadcrumbs items={pagesLink} />
            <Text as="h1" className="title" view="primary">
              Формы
            </Text>
            <div className="tabs">
              <Tabs
                value={value}
                onChange={setValue}
                items={items}
                fitMode="scroll"
                getItemLabel={getItemLabel}
                size="xs"
              />
            </div>
          </div>

          {value === "Форма простая" && (
            <div className="form-boxes">
              <TextField
                label="Система"
                size="m"
                type="text"
                placeholder="НСИ"
                view="clear"
              />
              <TextField
                label="Идентификатор"
                size="m"
                type="number"
                disabled={true}
                placeholder="5080"
              />
              <TextField
                label="Фамилия"
                size="m"
                type="text"
                placeholder="Фамилия"
              />

              <div className="form-group">
                <TextField label="Имя" size="m" type="text" placeholder="Имя" />
                <TextField
                  label="Отчество"
                  size="m"
                  type="text"
                  placeholder="Введите отчество"
                />
              </div>

              <div className="form-box">
                <Text size="x" view="secondary">
                  Email{" "}
                  <Text as="span" view="alert" size="x">
                    *
                  </Text>
                </Text>
                <TextField size="m" type="email" placeholder="Email" />
              </div>

              <div className="form-group">
                <TextField
                  label="Рабочий телефон:"
                  size="m"
                  type="number"
                  placeholder="+7 (_ _ _) _ _ _  _ _  _ _"
                />
                <TextField
                  label="Личный телефон:"
                  size="m"
                  type="number"
                  placeholder="+7 (_ _ _) _ _ _  _ _  _ _"
                />
              </div>

              <div className="form-box">
                <Text size="x" view="secondary">
                  Файлы
                </Text>
                <DragNDropField>
                  {({ openFileDialog }) => (
                    <>
                      <Text size="s" view="secondary">
                        Перетащите файлы или{" "}
                        <Text as="span" view="link" onClick={openFileDialog}>
                          загрузите
                        </Text>
                      </Text>
                      <Text size="s" view="ghost">
                        Поддерживаемые форматы: PNG, TIFF, JPG
                      </Text>
                    </>
                  )}
                </DragNDropField>
              </div>
            </div>
          )}

          {value === "Форма в блоке" && (
            <form className="auth-box">
              <TextField
                label="Логин:"
                leftSide={IconUser}
                size="m"
                value="ivanov.Al"
                type="text"
                placeholder="Логин:"
                rightSide={IconClose}
              />
              <TextField
                label="Новый пароль:"
                leftSide={IconLock}
                size="m"
                type="password"
                value="123456"
                placeholder="Логин:"
              />
              <div className="auth-bottom">
                <Button label="Отменить" view="clear" size="m" />
                <Button label="Сохранить" view="primary" size="m" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
