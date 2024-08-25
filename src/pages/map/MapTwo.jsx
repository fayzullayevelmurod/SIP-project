import React, { useContext } from "react";
import "./map.scss";
import { ShowNavContext } from "../../context/ShowNavContext";
import { Header } from "../../layouts/Header";
import assets from "../../assets";
import { Text } from "@consta/uikit/Text";

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

const MapTwo = () => {
  const { handleToggleNav } = useContext(ShowNavContext);
  return (
    <div className="visualization-page map-two__page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="cards">
        <div className="card">
          <div className="card-top">
            <img src={assets.reddit} alt="" />
            <Text size="s" view="primary" weight="semibold">
              Сглаживание карт
            </Text>
          </div>
          <div className="card-bottom">
            <Text as="span">DECISION</Text>
          </div>
        </div>
        <div className="card">
          <div className="card-top">
            <img src={assets.reddit} alt="" />
            <Text size="s" view="primary" weight="semibold">
              Сглаживание карт
            </Text>
          </div>
          <div className="card-bottom">
            <Text as="span">DECISION</Text>
          </div>
        </div>
        <div className="card">
          <div className="card-top">
            <img src={assets.reddit} alt="" />
            <Text size="s" view="primary" weight="semibold">
              Название шага или процесса
            </Text>
          </div>
          <div className="card-bottom">
            <Text as="span">DECISION</Text>
          </div>
        </div>
      </div>
      <div className="location">
        <div className="location-img">
          <img src={assets.groupLocation} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MapTwo;