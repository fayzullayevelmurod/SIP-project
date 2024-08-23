import React, { useContext } from "react";
import { Header } from "../../layouts/Header";
import { ShowNavContext } from "../../context/ShowNavContext";
import { NavbarLayout } from "../../components/Navbar";
import { IconSortDownCenter } from "@consta/icons/IconSortDownCenter";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { Text } from "@consta/uikit/Text";
import assets from "../../assets";
import { Button } from "@consta/uikit/Button";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { IconFolderClosed } from "@consta/icons/IconFolderClosed";
import { IconFlagStroked } from "@consta/icons/IconFlagStroked";
import { IconGisMultiple } from "@consta/icons/IconGisMultiple";
import { IconHorizonMultiple } from "@consta/icons/IconHorizonMultiple";
import { IconAttribute } from "@consta/icons/IconAttribute";
import { IconWells } from "@consta/icons/IconWells";
import { IconWellGreen } from "@consta/icons/IconWellGreen";
import { IconWellOrange } from "@consta/icons/IconWellOrange";

const pagesLink = [
  {
    label: "Дерево данных",
    href: "#!",
  },
  {
    label: "Колонки",
    href: "/#!",
  },
];

const Columns = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  return (
    <div className="data-tree__page multi-menu__page columns-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="flex">
        <NavbarLayout
          navbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={activeNav}
        />
        <div className="sidebars">
          <div className="navbar-sidebar">
            <div className="sidebar-header">
              <Text as="h1" view="primary">
                Дочерние общества
              </Text>
              <div className="sidebar-header__btns">
                <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
                <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
              </div>
            </div>
            <ul className="list primary-icon">
              <li className="list-item active">
                <div className="flex">
                  <IconFolderClosed size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Скважины
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFolderClosed size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Сьемки
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFolderClosed size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Модели
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFolderClosed size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Маркеры
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFolderClosed size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Карты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFolderClosed size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Горизонты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
            </ul>
          </div>
          <div className="navbar-sidebar">
            <div className="sidebar-header">
              <Text as="h1" view="primary">
                Месторождения
              </Text>
              <div className="sidebar-header__btns">
                <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
                <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
              </div>
            </div>
            <ul className="list light-primary-icon">
              <li className="list-item active">
                <div className="flex">
                  <IconFlagStroked size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Скважины
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFlagStroked size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Сьемки
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFlagStroked size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Модели
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFlagStroked size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Маркеры
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFlagStroked size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Карты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconFlagStroked size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Горизонты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
            </ul>
          </div>
          <div className="navbar-sidebar">
            <div className="sidebar-header">
              <Text as="h1" view="primary">
                Данные
              </Text>
              <div className="sidebar-header__btns">
                <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
                <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
              </div>
            </div>
            <ul className="list">
              <li className="list-item active">
                <div className="flex">
                  <IconGisMultiple size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Скважины
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconHorizonMultiple size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Сьемки
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconAttribute size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Модели
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconWells size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Маркеры
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconWells size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Карты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconWells size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Горизонты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
            </ul>
          </div>
          <div className="navbar-sidebar">
            <div className="sidebar-header">
              <Text as="h1" view="primary">
                Скважины
              </Text>
              <div className="sidebar-header__btns">
                <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
                <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
              </div>
            </div>
            <ul className="list">
              <li className="list-item">
                <div className="flex">
                  <IconWells size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Маркеры
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item active">
                <div className="flex">
                  <IconWellGreen size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Карты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconWellOrange size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Горизонты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
            </ul>
          </div>
          <div className="no-data">
            <div className="null-content">
              <img src={assets.notFoundImg} alt="" />
              <Text view="primary" size="lg" weight="semibold">
                Выберите обьект
              </Text>
              <Text view="secondary" size="s">
                Пока тут пусто
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Columns;
