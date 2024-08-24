import React, { useContext, useState } from "react";
import { Header } from "../../layouts/Header";
import { ShowNavContext } from "../../context/ShowNavContext";
import { NavbarLayout } from "../../components/Navbar";
import { IconSortDownCenter } from "@consta/icons/IconSortDownCenter";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { Text } from "@consta/uikit/Text";
import assets from "../../assets";
import { Button } from "@consta/uikit/Button";
import CustomBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { IconWells } from "@consta/icons/IconWells";
import { IconSeismic2D } from "@consta/icons/IconSeismic2D";
import { IconMarkers } from "@consta/icons/IconMarkers";
import { IconMaps } from "@consta/icons/IconMaps";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { IconClose } from "@consta/icons/IconClose";
import { IconHamburger } from "@consta/icons/IconHamburger";

const pagesLink = [
  {
    label: "Дерево данных",
    href: "#!",
  },
  {
    label: "Мульти-меню",
    href: "/#!",
  },
];

const pagesLink2 = [
  {
    label: "ГПН-Ангара",
    href: "#!",
  },
  {
    label: "Урманское",
    href: "/#!",
  },
];

const MultiMenu = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [showNav, setShowNav] = useState(false);

  const handleToggleShowNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="data-tree__page multi-menu__page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="flex relative-box">
        <NavbarLayout
          navbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={activeNav}
        />
        <div className="sidebars">
          <div
            className={`navbar-sidebar media-hide__navbar ${
              showNav ? "show" : ""
            }`}
          >
            <div className="sidebar-header">
              <CustomBreadcrumbs items={pagesLink2} />
              <div className="sidebar-header__btns">
                <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
                <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
                <Button
                  size="xs"
                  view="ghost"
                  iconLeft={IconClose}
                  onClick={handleToggleShowNav}
                  className="media-show__menu-btn"
                />
              </div>
            </div>
            <ul className="list">
              <li className="list-item active">
                <div className="flex">
                  <IconWells size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Скважины
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconSeismic2D size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Сьемки
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <img src={assets.iconSeismic3d} alt="" />
                  <Text weight="medium" view="primary" size="xs">
                    Модели
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconMarkers size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Маркеры
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <IconMaps size="s" />
                  <Text weight="medium" view="primary" size="xs">
                    Карты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
              <li className="list-item">
                <div className="flex">
                  <img src={assets.iconHorizon} alt="" />
                  <Text weight="medium" view="primary" size="xs">
                    Горизонты
                  </Text>
                </div>
                <Button iconLeft={IconArrowRight} size="xs" view="clear" />
              </li>
            </ul>
          </div>
          <div className="no-data">
            <Button
              onClick={handleToggleShowNav}
              className="media-show__nav-btn"
              size="xs"
              view="ghost"
              iconLeft={IconHamburger}
            />
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

export default MultiMenu;
