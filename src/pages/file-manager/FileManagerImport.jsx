import React, { useContext, useState } from "react";
import { Header } from "../../layouts/Header";
import { ShowNavContext } from "../../context/ShowNavContext";
import { NavbarLayout } from "../../components/Navbar";
import { Button } from "@consta/uikit/Button";
import { Text } from "@consta/uikit/Text";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconSortDownCenter } from "@consta/icons/IconSortDownCenter";
import { Tabs } from "@consta/uikit/Tabs";
import assets from "../../assets";
import "./file-manager.scss";
import { Badge } from "@consta/uikit/Badge";
import { IconAdd } from "@consta/icons/IconAdd";
import { Checkbox } from "@consta/uikit/Checkbox";
import { IconTrash } from "@consta/icons/IconTrash";
import { IconSettings } from "@consta/icons/IconSettings";
import { IconKebab } from "@consta/icons/IconKebab";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
const pagesLink = [
  {
    label: "Менеджер данных",
    href: "file-manager",
  },
  {
    label: "Импорт файлов",
    href: "/#!",
  },
];
const items = ["Все 37", "Успешно 26", "Ошибка 11"];
const items2 = ["Все 20", "С маппингом 6", "Без маппинга 12"];
const getItemLabel = (label) => label;
const getItemLabel2 = (label) => label;
const choiceGroupItems = ["Файл", "Планшет", "Карта"];

const data = [
  {
    title: "Скважина",
    coordinates: "54.736687, 55.986100",
    distance: "200 м.",
    subtitle: "w202",
    details: [
      { name: "Гис", value: "2" },
      { name: "Ригис", value: "4" },
      { name: "Керн", value: "4" },
      { name: "Маркеры", value: "4" },
      { name: "Координаты", value: "Файл.dev" },
      { name: "Геометрия", value: "W203" },
      { name: "Исследования", value: "W203" },
      { name: "Маркеры", value: "W203" },
    ],
  },
  {
    title: "Скважина",
    coordinates: "54.736687, 55.986100",
    distance: "200 м.",
    subtitle: "w203",
    details: [
      { name: "Гис", value: "2" },
      { name: "Ригис", value: "4" },
      { name: "Маркеры", value: "4" },
    ],
  },
];

const FileManagerImport = () => {
  const [value, setValue] = useState(items[0]);
  const [value2, setValue2] = useState(items2[0]);
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [isChecked, setIsChecked] = useState(true);
  const [choiceGroupValue, setChoiceGroupValue] = useState(items[0]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleChecked = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className="file-manager__page file-manager__import-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />

      <div className="flex file-manager">
        <NavbarLayout
          navbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={activeNav}
        />
        <div className="left-sidebar">
          <div className="sidebar-header">
            <Text as="h1" view="primary">
              Скважина 1
            </Text>
            <div className="MixFlex MixFlex_gap_2xs">
              <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
              <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
            </div>
          </div>
          <Tabs
            value={value}
            onChange={setValue}
            items={items}
            size="xs"
            getItemLabel={getItemLabel}
          />
          <ul className="list MixSpace_pT_xl">
            <li className="list-item active">
              <div className="flex">
                <img src={assets.document} alt="" />
                <Text
                  className="MixFlex MixFlex_gap_xs"
                  weight="medium"
                  view="primary"
                  size="xs"
                >
                  Файл.dev
                  <Text as="span" view="secondary" weight="regular">
                    trace
                  </Text>
                </Text>
              </div>
              <Text as="span" weight="regular" size="xs" view="secondary">
                W203
              </Text>
            </li>
            <li className="list-item">
              <div className="flex">
                <img src={assets.document} alt="" />
                <Text weight="medium" view="primary" size="xs">
                  Well head.dev
                </Text>
              </div>
              <Text as="span" weight="regular" size="xs" view="secondary">
                16 обьектов
              </Text>
            </li>
            <li className="list-item">
              <div className="flex">
                <img src={assets.document} alt="" />
                <Text weight="medium" view="primary" size="xs">
                  Файл.dev
                </Text>
              </div>
              <Badge minified size="s" status="error" label="Стойте" />
            </li>
            <li className="list-item">
              <div className="flex">
                <Checkbox
                  size="xs"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <Text weight="medium" view="primary" size="xs">
                  Файл.dev
                </Text>
              </div>
              <Badge minified size="xs" status="error" label="Стойте" />
            </li>
            <li className="list-item">
              <div className="flex">
                <img src={assets.document} alt="" />
                <Text weight="medium" view="primary" size="xs">
                  Файл.dev
                </Text>
              </div>
              <Badge minified size="xs" status="error" label="Стойте" />
            </li>
            <li className="list-item">
              <div className="flex">
                <img src={assets.document} alt="" />
                <Text weight="medium" view="primary" size="xs">
                  Файл.dev
                </Text>
              </div>
              <Badge minified size="xs" status="error" label="Стойте" />
            </li>
            <li className="list-item">
              <div className="flex">
                <img src={assets.folderZip} alt="" />
                <Text
                  weight="medium"
                  view="primary"
                  size="xs"
                  className="MixFlex MixFlex_gap_xs"
                >
                  Файл.dev
                  <Text as="span" view="secondary" weight="regular">
                    13.2 Мб
                  </Text>
                </Text>
              </div>
              <Button
                label="Распоковать"
                size="xs"
                iconRight={IconAdd}
                view="ghost"
              />
            </li>
          </ul>
        </div>
        <div className="middle-sidebar">
          <div className="sidebar-header">
            <Text as="h1" view="primary">
              Обьекты
            </Text>
            <div className="MixFlex MixFlex_gap_2xs">
              <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
              <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
            </div>
          </div>
          <Tabs
            value={value2}
            onChange={setValue2}
            items={items2}
            size="xs"
            getItemLabel={getItemLabel2}
          />
          <div style={{ borderBottom: "1px solid #eaeaea", padding: "10px 0" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  size="xs"
                  checked={isChecked}
                  onChange={toggleChecked}
                />
                <div style={{ marginLeft: 10 }}>{data.title}</div>
              </div>
              <div>{data.coordinates}</div>
              <div>{data.distance}</div>
              <div onClick={toggleOpen} style={{ cursor: "pointer" }}>
                {isOpen ? <IconArrowDown /> : <IconArrowRight />}
              </div>
            </div>
            {isOpen && (
              <div
                style={{
                  marginTop: 10,
                  backgroundColor: "#f5f5f5",
                  padding: 10,
                  borderRadius: 8,
                }}
              >
                <div style={{ fontWeight: "bold", marginBottom: 5 }}>
                  {data.subtitle}
                </div>
                {data.details.map((detail, index) => (
                  <div
                    key={index}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>{detail.name}</span>
                    <span>{detail.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="right-sidebar">
          <div className="sidebar-header">
            <Text as="h1" view="primary">
              Скважина 1
            </Text>
            <div className="sidebar-header__btns">
              <Button size="xs" view="ghost" iconLeft={IconSettings} />
              <Button size="xs" view="ghost" iconLeft={IconTrash} />
              <Button size="xs" view="ghost" iconLeft={IconKebab} />
            </div>
          </div>
          <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
            <ChoiceGroup
              value={choiceGroupValue}
              onChange={setChoiceGroupValue}
              items={choiceGroupItems}
              getItemLabel={(choiceGroupItems) => choiceGroupItems}
              multiple={false}
              size="xs"
              view="primary"
              form="default"
              name="ChoiceGroupExampleView"
            />
            <Button
              size="xs"
              view="ghost"
              label="Парсер trace"
              iconLeft={IconSettings}
            />
          </div>
          <Text
            className="MixSpace_mT_xl"
            size="xs"
            view="primary"
            weight="regular"
          >
            Текст из файла
          </Text>
        </div>
      </div>
    </div>
  );
};

export default FileManagerImport;
