import React, { useContext, useState } from "react";
import "./data-tree.scss";
import { Header } from "../../layouts/Header";
import { ShowNavContext } from "../../context/ShowNavContext";
import { NavbarLayout } from "../../components/Navbar";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconSortDownCenter } from "@consta/icons/IconSortDownCenter";
import { TreeComponent } from "./Tree";
import assets from "../../assets";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { IconClose } from "@consta/icons/IconClose";

const pagesLink = [
  {
    label: "Дерево данных",
    href: "#!",
  },
  {
    label: "Дерево",
    href: "/#!",
  },
];

const DataTree = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [showNav, setShowNav] = useState(false);

  const handleToggleShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="data-tree__page">
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
              <Text as="h1" view="primary">
                Дерево данных
              </Text>
              <div className="sidebar-header__btns">
                <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
                <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
                <Button
                  size="xs"
                  view="ghost"
                  iconLeft={IconClose}
                  onClick={handleToggleShowNav}
                />
              </div>
            </div>
            <TreeComponent />
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

export default DataTree;
