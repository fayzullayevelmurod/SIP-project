import React, { useContext, useEffect } from "react";
import { Header } from "../../layouts/Header";
import { ShowNavContext } from "../../context/ShowNavContext";
import { NavbarLayout } from "../../components/Navbar";
import "./visualization.scss";
import { ActionBar } from "../../components";
import assets from "../../assets";
const pagesLink = [
  {
    label: "Geoapp",
    href: "#!",
  },
  {
    label: "Визуализация",
    href: "#!",
  },
  {
    label: "Модель обьекта",
    href: "#!",
  },
];

const ObjectModel = () => {
  const { handleToggleNav, activeNav, toggleHidden } =
    useContext(ShowNavContext);

  useEffect(() => {
    toggleHidden();
  }, []);

  return (
    <div className="visualization-page object-model__page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="flex w-full">
        <NavbarLayout
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <div className="w-full h-scroll">
          <ActionBar />
          <div className="object-model__img image-box">
            <img src={assets.objectModelImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectModel;
