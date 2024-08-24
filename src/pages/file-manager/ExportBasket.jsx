import React, { useContext, useState } from "react";
import "./basket.scss";
import { ShowNavContext } from "../../context/ShowNavContext";
import { Header } from "../../layouts/Header";
import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/icons/IconBackward";
import { Text } from "@consta/uikit/Text";
import { NavbarLayout } from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Card } from "@consta/uikit/Card";
import { Grid, GridItem } from "@consta/uikit/Grid";
import { Checkbox } from "@consta/uikit/Checkbox";
import { IconAdd } from "@consta/icons/IconAdd";
import { IconWellBlue } from "@consta/icons/IconWellBlue";
import { IconGisMultiple } from "@consta/icons/IconGisMultiple";
import { IconRigiss } from "@consta/icons/IconRigiss";
import { IconMarkers } from "@consta/icons/IconMarkers";

const pagesLink = [
  {
    label: "Мой проект",
    href: "/#!",
  },
  {
    label: "Менеджер данных",
    href: "/#!",
  },
  {
    label: "Экспорт",
    href: "/#!",
  },
];

const listData = [
  { logo: <IconWellBlue />, name: "206_2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconWellBlue />, name: "206_2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconWellBlue />, name: "206_2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconGisMultiple />, name: "206_2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconRigiss />, name: "РИГИС N2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconMarkers />, name: "РИГИС N2", subTitle: "ГПН-Хантос / Зимнее" },
];

const listData2 = [
  { logo: <IconWellBlue />, name: "206_2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconWellBlue />, name: "206_2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconWellBlue />, name: "206_2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconGisMultiple />, name: "206_2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconRigiss />, name: "РИГИС N2", subTitle: "ГПН-Хантос / Зимнее" },
  { logo: <IconMarkers />, name: "РИГИС N2", subTitle: "ГПН-Хантос / Зимнее" },
];

const ExportBasket = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [checkedItems2, setCheckedItems2] = useState({});
  const [checkedItems3, setCheckedItems3] = useState({});
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);

  const navigate = useNavigate();

  const handleBasketNavigate = () => {
    navigate("/basket");
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [name]: checked,
    }));
  };

  const handleCheckboxChange2 = (event) => {
    const { name, checked } = event.target;
    setCheckedItems2((prevItems) => ({
      ...prevItems,
      [name]: checked,
    }));
  };

  const handleCheckboxChange3 = (event) => {
    const { name, checked } = event.target;
    setCheckedItems3((prevItems) => ({
      ...prevItems,
      [name]: checked,
    }));
  };

  const checkboxes = [
    { label: "Это чекбокс", name: "checkbox1" },
    { label: "По типу", name: "checkbox2" },
    { label: "По отдельности", name: "checkbox3" },
    { label: "Другой", name: "checkbox4" },
  ];
  const checkboxes2 = [
    { label: "Это чекбокс", name: "checkbox1", info: "База данных геологии" },
    { label: "По типу", name: "checkbox2", info: "Десктопное приложение" },
    {
      label: "По отдельности",
      name: "checkbox3",
      info: "Файловый формат выгрузки",
    },
  ];
  const checkboxes3 = [
    { label: "Это чекбокс", name: "checkbox1", info: "База данных геологии" },
    { label: "По типу", name: "checkbox2", info: "Десктопное приложение" },
    {
      label: "По отдельности",
      name: "checkbox3",
      info: "Файловый формат выгрузки",
    },
  ];

  return (
    <div className="basket-page basket-export__page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        date={true}
        pagesLink={pagesLink}
      />
      <div className="flex">
        <NavbarLayout
          navbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={activeNav}
        />
        <div className="scroll-content">
          <div className="basket-content">
            <Button
              size="xs"
              view="ghost"
              label="Вернуться в корзину"
              iconLeft={IconBackward}
              onClick={handleBasketNavigate}
            />
            <Text className="title">Оформление экспорта</Text>
            <div className="basket-cards">
              <div className="left-card MixFlex MixFlex_direction_column MixFlex_gap_m">
                <Card>
                  <Text className="card-title" as="h3">
                    Как выгрузить?
                  </Text>
                  <Grid
                    cols={4}
                    gap="xs"
                    breakpoints={{
                      0: {
                        cols: 1,
                        gap: "xs",
                      },
                      600: {
                        cols: 2,
                        gap: "xs",
                      },
                      992: {
                        cols: 4,
                        gap: "xs",
                      },
                    }}
                  >
                    {checkboxes.map((checkbox, index) => {
                      const isActive = checkedItems[checkbox.name] || false;

                      return (
                        <GridItem key={index} className="answer-item">
                          <Card
                            className={`MixFlex MixFlex_align_center MixFlex_justify_space-between  ${
                              isActive ? "active" : ""
                            }`}
                          >
                            <Checkbox
                              label={checkbox.label}
                              size="s"
                              name={checkbox.name}
                              checked={isActive}
                              onChange={handleCheckboxChange}
                            />
                            {checkbox.name === "checkbox4" && (
                              <Button
                                size="xs"
                                view="clear"
                                iconLeft={IconAdd}
                              />
                            )}
                          </Card>
                        </GridItem>
                      );
                    })}
                  </Grid>
                </Card>
                <Card>
                  <Text className="card-title" as="h3">
                    Геология
                  </Text>
                  <ul>
                    {listData?.map((item, idx) => (
                      <li
                        className="MixFlex MixFlex_align_center MixFlex_justify_space-between"
                        key={idx}
                      >
                        <div className="MixFlex MixFlex_align_center MixFlex_gap_2xs">
                          {item.logo}
                          <Text size="xs" view="primary">
                            {item.name}
                          </Text>
                        </div>
                        <Text size="xs" view="secondary">
                          {item.subTitle}
                        </Text>
                      </li>
                    ))}
                  </ul>
                  <Text className="card-title sub-title" as="h3">
                    Куда выгрузить?
                  </Text>
                  <Grid
                    cols={3}
                    gap="xs"
                    breakpoints={{
                      0: {
                        cols: 1,
                        gap: "xs",
                      },
                      992: {
                        cols: 3,
                        gap: "xs",
                      },
                    }}
                  >
                    {checkboxes2.map((checkbox, index) => {
                      const isActive2 = checkedItems2[checkbox.name] || false;

                      return (
                        <GridItem key={index} className="answer-item">
                          <Card className={isActive2 ? "active" : ""}>
                            <div>
                              <Checkbox
                                label={checkbox.label}
                                size="s"
                                name={checkbox.name}
                                checked={isActive2}
                                onChange={handleCheckboxChange2}
                              />
                              {checkbox.name === "checkbox4" && (
                                <Button
                                  size="xs"
                                  view="clear"
                                  iconLeft={IconAdd}
                                />
                              )}
                            </div>
                            <Text
                              size="xs"
                              view="secondary"
                              className="info-text"
                            >
                              {checkbox.info}
                            </Text>
                          </Card>
                        </GridItem>
                      );
                    })}
                  </Grid>
                </Card>

                <Card>
                  <Text className="card-title" as="h3">
                    Сейсмика
                  </Text>
                  <ul>
                    {listData2?.map((item, idx) => (
                      <li
                        className="MixFlex MixFlex_align_center MixFlex_justify_space-between"
                        key={idx}
                      >
                        <div className="MixFlex MixFlex_align_center MixFlex_gap_2xs">
                          {item.logo}
                          <Text size="xs" view="primary">
                            {item.name}
                          </Text>
                        </div>
                        <Text size="xs" view="secondary">
                          {item.subTitle}
                        </Text>
                      </li>
                    ))}
                  </ul>
                  <Text className="card-title sub-title" as="h3">
                    Куда выгрузить?
                  </Text>
                  <Grid
                    cols={3}
                    gap="xs"
                    breakpoints={{
                      0: {
                        cols: 1,
                        gap: "xs",
                      },
                      992: {
                        cols: 3,
                        gap: "xs",
                      },
                    }}
                  >
                    {checkboxes3.map((checkbox, index) => {
                      const isActive = checkedItems3[checkbox.name] || false;

                      return (
                        <GridItem key={index} className="answer-item">
                          <Card className={isActive ? "active" : ""}>
                            <div>
                              <Checkbox
                                label={checkbox.label}
                                size="s"
                                name={checkbox.name}
                                checked={isActive}
                                onChange={handleCheckboxChange3}
                              />
                              {checkbox.name === "checkbox4" && (
                                <Button
                                  size="xs"
                                  view="clear"
                                  iconLeft={IconAdd}
                                />
                              )}
                            </div>
                            <Text
                              size="xs"
                              view="secondary"
                              className="info-text"
                            >
                              {checkbox.info}
                            </Text>
                          </Card>
                        </GridItem>
                      );
                    })}
                  </Grid>
                </Card>
              </div>
              <div className="right-card">
                <Card>
                  <Text as="h3" view="primary" className="card-title">
                    Итого
                  </Text>
                  <ul>
                    <li>
                      <Text size="xs" view="secondary">
                        Размер данных
                      </Text>
                      <Text size="xs" view="primary">
                        13.02 Мб
                      </Text>
                    </li>
                    <li>
                      <Text size="xs" view="secondary">
                        Размер данных
                      </Text>
                      <Text size="xs" view="primary">
                        13.02 Мб
                      </Text>
                    </li>
                    <li>
                      <Text size="xs" view="secondary">
                        Размер данных
                      </Text>
                      <Text size="xs" view="primary">
                        13.02 Мб
                      </Text>
                    </li>
                    <li>
                      <Text size="xs" view="secondary">
                        Размер данных
                      </Text>
                      <Text size="xs" view="primary">
                        13.02 Мб
                      </Text>
                    </li>
                  </ul>
                  <Button size="m" view="primary" label="Перейти к экспорту" />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportBasket;
