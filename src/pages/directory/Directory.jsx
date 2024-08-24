import React, { useContext, useState } from "react";
import "./directory.scss";
import { Header } from "../../layouts/Header";
import { NavbarLayout } from "../../components/Navbar";
import { Text } from "@consta/uikit/Text";
import { IconKebab } from "@consta/icons/IconKebab";
import { Button } from "@consta/uikit/Button";
import { Table } from "@consta/uikit/Table";
import { Checkbox } from "@consta/uikit/Checkbox";
import { Pagination } from "@consta/uikit/Pagination";
import { Tabs } from "@consta/uikit/Tabs";
import { AvatarGroup } from "@consta/uikit/AvatarGroup";
import { Tag } from "@consta/uikit/Tag";
import { Badge } from "@consta/uikit/Badge";
import { IconAllDone } from "@consta/icons/IconAllDone";
import { IconAlert } from "@consta/icons/IconAlert";
import { IconEdit } from "@consta/icons/IconEdit";
import { IconTrash } from "@consta/icons/IconTrash";
import { IconFolderOpen } from "@consta/icons/IconFolderOpen";
import { ShowNavContext } from "../../context/ShowNavContext";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconSortDownCenter } from "@consta/icons/IconSortDownCenter";
import { Grid, GridItem } from "@consta/uikit/Grid";
import { IconArrowNext } from "@consta/icons/IconArrowNext";
import { IconArrowPrevious } from "@consta/icons/IconArrowPrevious";

const rows = [
  {
    id: "1",
    name: <Checkbox size="s" label="Северное" />,
    isOpen: "Открытое",
    year: 1982,
    production: "5 000",
    reserves: "5 000",
    npv: "5 000",
  },
  {
    id: "2",
    name: <Checkbox size="s" label="Северное" />,
    isOpen: "Открытое",
    year: 1982,
    production: "5 000",
    reserves: "5 000",
    npv: "5 000",
  },
  {
    id: "3",
    name: <Checkbox size="s" label="Северное" />,
    isOpen: "Открытое",
    year: 1982,
    production: "5 000",
    reserves: "5 000",
    npv: "5 000",
  },
  {
    id: "4",
    name: <Checkbox size="s" label="Северное" />,
    isOpen: "Открытое",
    year: 1982,
    production: "5 000",
    reserves: "5 000",
    npv: "5 000",
  },
  {
    id: "5",
    name: <Checkbox size="s" label="Северное" />,
    isOpen: "Открытое",
    year: 1982,
    production: "5 000",
    reserves: "5 000",
    npv: "5 000",
  },
  {
    id: "6",
    name: <Checkbox size="s" label="Северное" />,
    isOpen: "Открытое",
    year: 1982,
    production: "5 000",
    reserves: "5 000",
    npv: "5 000",
  },
];

const columns = [
  {
    title: "Месторождение",
    accessor: "name",
  },
  {
    title: "Год открытия",
    accessor: "year",
  },
  {
    title: "Тип",
    accessor: "isOpen",
  },
  {
    title: "Добыча, млн.т.",
    accessor: "production",
    align: "right",
  },
  {
    title: "Запасы, млн.т.",
    accessor: "reserves",
    align: "right",
  },
  {
    title: "NPV, млрд ₽",
    accessor: "npv",
    align: "right",
  },
];

const avatarGroupItems = [
  {
    name: "Вадим Матвеев",
  },
  {
    name: "Лидия Индриксон",
  },
  {
    name: "Геннадий Морозов",
  },
  {
    name: "Геннадий Морозов",
  },
  {
    name: "Вадим Матвеев",
  },
  {
    name: "Лидия Индриксон",
  },
  {
    name: "Геннадий Морозов",
  },
  {
    name: "Геннадий Морозов",
  },
];

const listItems = [
  {
    label: "Месторождения",
    id: 1,
    leftIcon: IconFolderOpen,
  },
  {
    label: "Лицензионные участки",
    id: 2,
    leftIcon: IconFolderOpen,
    disabled: true,
  },
  {
    label: "Кусты",
    id: 3,
    leftIcon: IconFolderOpen,
    disabled: true,
  },
  {
    label: "Скважины",
    id: 4,
    leftIcon: IconFolderOpen,
    disabled: true,
  },
  {
    label: "Дочерние общества",
    id: 5,
    leftIcon: IconFolderOpen,
    disabled: true,
  },
];

const items = ["Информация", "История"];

const getItemLabel = (label) => label;

const Directory = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);

  const [page, setPage] = useState(1);
  const [value, setValue] = useState(items[0]);
  const [selectedItem, setSelectedItem] = useState(listItems[0]?.id);

  const handleListItemClick = (item) => {
    setSelectedItem(item.id);
  };
  const [activeSidebar, setActiveSidebar] = useState({
    left: false,
    right: false,
  });

  const handleOpenSidebar = (sidebar) => {
    setActiveSidebar((prevState) => ({
      ...prevState,
      [sidebar]: !prevState[sidebar],
    }));
  };

  return (
    <div className="directory-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={true}
        hamburgerLogo={true}
        dropdownLogo={true}
      />
      <div className="flex scroll-box">
        <NavbarLayout
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={() => handleToggleNav(!activeNav)}
        />
        <div
          className={`left-sidebar ${activeSidebar.left ? "show-sidebar" : ""}`}
        >
          <Button
            view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconArrowNext}
            onClick={() => handleOpenSidebar("left")}
            className={`media-open__sidebar-btn MixSpace_mB_s`}
          />
          <div className="sidebar-header">
            <Text as="h1" view="primary">
              Северное
            </Text>
            <div className="sidebar-header__btns">
              <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
              <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
            </div>
          </div>
          <ul className="list">
            {listItems?.map((item) => (
              <li
                key={item.id}
                className={`list-item ${
                  selectedItem === item.id ? "active" : ""
                }`}
                onClick={() => handleListItemClick(item)}
              >
                <IconFolderOpen size="xs" view="secondary" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <div className={`middle-sidebar ${activeNav && "show-nav"}`}>
          <div className="sidebar-header">
            <Text as="h1" view="primary">
              {listItems.find((item) => item.id === selectedItem)?.label}
            </Text>
            <div className="MixFlex MixFlex_gap_2xs">
            <Button size="xs" view="clear" iconLeft={IconKebab} />
              <Button
                view="clear"
                size="xs"
                onlyIcon
                iconLeft={IconArrowNext}
                onClick={() => handleOpenSidebar("left")}
                className={`media-open__sidebar-btn`}
              />
              <Button
                view="clear"
                size="xs"
                onlyIcon
                iconLeft={IconArrowPrevious}
                onClick={() => handleOpenSidebar("right")}
                className={`media-open__sidebar-btn`}
              />
            </div>
          </div>
          <div className="table-box">
            <Table zebraStriped="odd" rows={rows} columns={columns} />
            <div className="table-pagination">
              <Text as="span" className="pagination-text">
                1 из 8
              </Text>
              <Pagination
                type="input"
                items={5}
                value={page}
                onChange={setPage}
                outerMostArrows={[true, true]}
                arrows={[{ label: null }, { label: null }]}
              />
            </div>
          </div>
        </div>
        <div
          className={`right-sidebar ${activeNav && "show-nav"} ${
            activeSidebar.right ? "show-sidebar" : ""
          }`}
        >
          <Button
            view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconArrowPrevious}
            onClick={() => handleOpenSidebar("right")}
            className={`media-open__sidebar-btn MixSpace_mB_s`}
          />
          <div className="sidebar-header">
            <Text as="h1" view="primary">
              Северное
            </Text>
            <div className="sidebar-header__btns">
              <Button size="xs" view="clear" iconLeft={IconEdit} />
              <Button size="xs" view="clear" iconLeft={IconTrash} />
            </div>
          </div>
          <div className="tabs">
            <Tabs
              value={value}
              onChange={setValue}
              items={items}
              size="xs"
              getItemLabel={getItemLabel}
            />
            <div className="text-box">
              <Text as="span" size="s" view="secondary">
                Название
              </Text>
              <Text size="s">Северное</Text>
            </div>
            <div className="text-box">
              <Text as="span" size="s" view="secondary">
                Описание
              </Text>
              <Text size="s">
                Описание очень-очень длинное на две строки, и еще раз длинное
                название чего-либо
              </Text>
            </div>
            <div className="text-box ">
              <Text view="secondary" size="s">
                Статус
              </Text>
              <div className="badges MixFlex MixFlex_gap_2xs">
                <Badge
                  size="s"
                  status="success"
                  icon={IconAllDone}
                  label="Согласован"
                  iconRight={IconAlert}
                />
                <Badge
                  size="s"
                  status="success"
                  icon={IconAllDone}
                  label="Согласован"
                  iconRight={IconAlert}
                />
              </div>
            </div>
            <div className="text-box">
              <Text view="secondary" size="s">
                Теги
              </Text>
              <div className="tags">
                <Tag size="xs" mode="check" label="Label" />
                <Tag size="xs" mode="check" label="Label" />
              </div>
            </div>
            <div className="text-box">
              <Text view="secondary" size="s">
                Пользователиа
              </Text>
              <AvatarGroup items={avatarGroupItems} visibleCount={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
