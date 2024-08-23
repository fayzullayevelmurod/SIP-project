import React, { useContext } from "react";
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
                Дерево данных
              </Text>
              <div className="sidebar-header__btns">
                <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
                <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
              </div>
            </div>
            <TreeComponent />
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

export default DataTree;
