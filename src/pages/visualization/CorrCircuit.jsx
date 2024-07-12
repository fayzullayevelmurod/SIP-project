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
    label: "Корр-схема",
    href: "#!",
  },
];

const CorrCircuit = () => {
  const { handleToggleNav, activeNav, toggleHidden } =
    useContext(ShowNavContext);

  useEffect(() => {
    toggleHidden();
  }, []);

  return (
    <div className="visualization-page">
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
          <div className="tablet-img image-box">
            <img src={assets.CorrCircuitImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorrCircuit;
