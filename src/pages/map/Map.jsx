import React, { useContext } from "react";
import { Header } from "../../layouts/Header";
import { ShowNavContext } from "../../context/ShowNavContext";
import "../visualization/visualization.scss";
import assets from "../../assets";
import "./map.scss";
import PolygonsExample from "./MapComponent";
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
    label: "Карта",
  },
];

const Map = () => {
  const { handleToggleNav } = useContext(ShowNavContext);
  return (
    <div className="visualization-page map-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="flex w-full">
        <div className="w-full h-scroll">
          <div className="action-bar">
            <div className="img-box">
              <img src={assets.location} alt="" />
            </div>
            <div className="line"></div>
            <div className="img-box">
              <img src={assets.rule} alt="" />
            </div>
            <div className="img-box">
              <img src={assets.layout} alt="" />
            </div>
            <div className="img-box">
              <img src={assets.flow} alt="" />
            </div>
            <div className="img-box">
              <img src={assets.more} alt="" />
            </div>
            <div className="line"></div>
            <div className="img-box">
              <img src={assets.zoom} alt="" />
            </div>
            <div className="img-box">
              <img src={assets.zoomMinus} alt="" />
            </div>
          </div>
          <PolygonsExample />
        </div>
      </div>
    </div>
  );
};

export default Map;
