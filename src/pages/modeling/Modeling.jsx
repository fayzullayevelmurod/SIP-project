import React, { useContext, useState } from "react";
import { Header } from "../../layouts/Header";
import { ShowNavContext } from "../../context/ShowNavContext";
import { ActionBar, CardHeader, StackedLineChart } from "../../components";
import assets from "../../assets";
import "./modeling.scss";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { IconClose } from "@consta/icons/IconClose";
import { Icon3DMap } from "@consta/icons/Icon3DMap";
import { IconPolygonBlue } from "@consta/icons/IconPolygonBlue";
import { IconMarkers } from "@consta/icons/IconMarkers";
import { IconWells } from "@consta/icons/IconWells";
import { IconMaps } from "@consta/icons/IconMaps";
import { Collapse } from "@consta/uikit/Collapse";
import { TextField } from "@consta/uikit/TextField";
import { Select } from "@consta/uikit/Select";
import { IconArrowUp } from "@consta/icons/IconArrowUp";
import { Grid, GridItem } from "@consta/uikit/Grid";
import { Card } from "@consta/uikit/Card";
import { BarChart } from "@consta/widgets/BarChart";
import { Legend } from "@consta/widgets/Legend/Legend";

const pagesLink = [
  {
    label: "Процессы",
    href: "#!",
  },
  {
    label: "Геомоделирование",
    href: "#!",
  },
];

const colors = [
  "var(--color-bg-normal)",
  "var(--color-bg-alert)",
  "var(--color-bg-warning)",
];

const groupExampleData = {
  colors,
  groups: [
    {
      groupName: "первая группа",
      values: [410, 115],
    },
    {
      groupName: "вторая группа",
      values: [650, 210, 80],
    },
    {
      groupName: "третья группа",
      values: [75],
    },
  ],
};

const groupExampleData2 = {
  colors,
  groups: [
    {
      groupName: "Питерское",
      values: [410],
    },
    {
      groupName: "Уфимское",
      values: [650],
    },
    {
      groupName: "Московское",
      values: [700],
    },
    {
      groupName: "Казанское",
      values: [550],
    },
    {
      groupName: "Орское",
      values: [400],
    },
    {
      groupName: "Ямалское",
      values: [500],
    },
  ],
};
const algorithmOptions = [{ label: "Конвергентный", value: "convergent" }];

const variogramOptions = [{ label: "Гаусса", value: "gaussian" }];

const data = {
  email: [120, 132, 101, 134, 90, 230, 210],
  unionAds: [220, 182, 191, 234, 290, 330, 310],
  videoAds: [150, 232, 201, 154, 190, 330, 410],
  direct: [320, 332, 301, 334, 390, 330, 320],
  searchEngine: [820, 932, 901, 934, 1290, 1330, 1320],
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const items = ["Квартал", "Месяц", "Неделя"];

const Modeling = () => {
  const { handleToggleNav } = useContext(ShowNavContext);
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);
  const [showLeftSide, setShowLeftSide] = useState(false);

  const handleShowLeftSide = () => {
    setShowLeftSide(!showLeftSide);
  };

  const [showRightSide, setShowRightSide] = useState(false);

  const handleShowRightSide = () => {
    setShowRightSide(!showRightSide);
  };

  const [showBottomPanel, setShowBottomPanel] = useState(false);

  const handleShowBottomPanel = () => {
    setShowBottomPanel(!showBottomPanel);
  };

  return (
    <div className="modeling-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="scroll-box">
        <div className="sidebars">
          <button className="pole-left__btn" onClick={handleShowLeftSide}>
            <img src={assets.iconGeoOrg} alt="" />
          </button>
          <button className="pole-right__btn" onClick={handleShowRightSide}>
            <img src={assets.panel} alt="" />
          </button>
          <ActionBar />
          <div className={`left-side ${showLeftSide ? "show-side" : ""}`}>
            <div>
              <div className="sidebar-top MixFlex MixFlex_align_center MixFlex_justify_space-between">
                <div className="MixFlex MixFlex_gap_xs ">
                  <Text size="xs" view="primary" weight="medium">
                    Инспектор
                  </Text>
                  <Text size="xs" view="secondary" weight="medium">
                    Навигатор
                  </Text>
                </div>
                <Button
                  iconLeft={IconClose}
                  size="xs"
                  view="clear"
                  onClick={handleShowLeftSide}
                />
              </div>
              <div className="sidebar-body">
                <ul className="list">
                  <li className="list-item">
                    <div className="img-box">
                      <Icon3DMap />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconPolygonBlue />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconMarkers />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconWells />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconMaps />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconMaps />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-bottom">
              <Collapse
                label={<>Параметры</>}
                isOpen={isOpen}
                onClick={() => setOpen(!isOpen)}
                size="'xs"
              >
                <ul className="list">
                  <li className="list-item">
                    <div className="img-box">
                      <Icon3DMap />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconPolygonBlue />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconMarkers />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconWells />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconMaps />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                  <li className="list-item">
                    <div className="img-box">
                      <IconMaps />
                    </div>
                    <Text>Сьемка</Text>
                  </li>
                </ul>
              </Collapse>
            </div>
          </div>
          <div className="modeling-img__box">
            <img className="modeling-img" src={assets.modelingImg} alt="" />
          </div>
          <div className={`right-side ${showRightSide ? "show-side" : ""}`}>
            <div>
              <div className="sidebar-top MixFlex MixFlex_align_center MixFlex_justify_space-between">
                <div className="MixFlex MixFlex_gap_xs ">
                  <Text size="xs" view="primary" weight="medium">
                    Свойства
                  </Text>
                  <Text size="xs" view="secondary" weight="medium">
                    Статистика
                  </Text>
                </div>
                <Button
                  iconLeft={IconClose}
                  size="xs"
                  view="clear"
                  onClick={handleShowRightSide}
                />
              </div>
              <Collapse
                label={<>Визуализация</>}
                isOpen={isOpen2}
                onClick={() => setOpen2(!isOpen2)}
                size="xs"
              >
                <div className="form-box">
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Имя"
                    placeholder="Картопостроение 1"
                    rightSide={IconClose}
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Вес"
                    type="number"
                    placeholder="1"
                    rightSide="км²"
                  />
                  <Select
                    size="xs"
                    label="Алгоритм"
                    placeholder="Выберите алгоритм"
                    items={algorithmOptions}
                    value={algorithmOptions[0]}
                    onChange={(e) => e.value}
                  />
                  <Select
                    size="xs"
                    label="Вариограмма"
                    placeholder="Выберите вариограмму"
                    items={variogramOptions}
                    value={variogramOptions[0]}
                    onChange={(e) => e.value}
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Общий прог"
                    type="number"
                    rightSide={IconClose}
                    placeholder="1"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Xmin"
                    type="number"
                    rightSide={IconClose}
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Xmax"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Ymin"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Ymax"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Шаг сетки"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                </div>
              </Collapse>
            </div>
            <div className="sidebar-bottom">
              <div className="line"></div>
              <Collapse
                label={<>Визуализация</>}
                isOpen={isOpen3}
                onClick={() => setOpen3(!isOpen3)}
                size="xs"
              >
                <div className="form-box">
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Имя"
                    placeholder="Картопостроение 1"
                    rightSide={IconClose}
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Вес"
                    type="number"
                    placeholder="1"
                    rightSide="км²"
                  />
                  <Select
                    size="xs"
                    label="Алгоритм"
                    placeholder="Выберите алгоритм"
                    items={algorithmOptions}
                    value={algorithmOptions[0]}
                  />
                  <Select
                    size="xs"
                    label="Вариограмма"
                    placeholder="Выберите вариограмму"
                    items={variogramOptions}
                    value={variogramOptions[0]}
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Общий прог"
                    type="number"
                    rightSide={IconClose}
                    placeholder="1"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Xmin"
                    type="number"
                    rightSide={IconClose}
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Xmax"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Ymin"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Ymax"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Шаг сетки"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                </div>
              </Collapse>
              <div className="line"></div>
              <Collapse
                label={<>Визуализация</>}
                isOpen={isOpen4}
                onClick={() => setOpen4(!isOpen4)}
                size="xs"
              >
                <div className="form-box">
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Имя"
                    placeholder="Картопостроение 1"
                    rightSide={IconClose}
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Вес"
                    type="number"
                    placeholder="1"
                    rightSide="км²"
                  />
                  <Select
                    size="xs"
                    label="Алгоритм"
                    placeholder="Выберите алгоритм"
                    items={algorithmOptions}
                    value={algorithmOptions[0]}
                  />
                  <Select
                    size="xs"
                    label="Вариограмма"
                    placeholder="Выберите вариограмму"
                    items={variogramOptions}
                    value={variogramOptions[0]}
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Общий прог"
                    type="number"
                    rightSide={IconClose}
                    placeholder="1"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Xmin"
                    type="number"
                    rightSide={IconClose}
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Xmax"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Ymin"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Ymax"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                  <TextField
                    incrementButtons={false}
                    size="xs"
                    label="Шаг сетки"
                    rightSide={IconClose}
                    type="number"
                    placeholder="0"
                  />
                </div>
              </Collapse>
            </div>
          </div>
        </div>
        <div className="bottom-panel">
          <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center MixSpace_pB_xs">
            <div className="MixFlex MixFlex_gap_xs">
              <Text size="xs" view="primary" weight="medium">
                Аналитика
              </Text>
              <Text size="xs" view="secondary" weight="medium">
                Статистика
              </Text>
              <Text size="xs" view="secondary" weight="medium">
                События
              </Text>
            </div>
            <div className="MixFlex MixFlex_gap_xs">
              <button className="btn">
                <img src={assets.IconNodeStep} alt="" />
              </button>
              <Button
                iconLeft={IconArrowUp}
                size="xs"
                view="clear"
                onClick={handleShowBottomPanel}
              />
            </div>
          </div>
          <div
            className={`bottom-panel__content ${showBottomPanel ? "show" : ""}`}
          >
            <Grid
              cols={3}
              gap="xl"
              breakpoints={{
                0: {
                  cols: 1,
                  gap: "xl",
                },
                992: {
                  cols: 2,
                  gap: "xl",
                },
                1400: {
                  cols: 3,
                  gap: "xl",
                },
              }}
            >
              <GridItem>
                <Card
                  className="MixFlex MixFlex_direction_column MixFlex_gap_s media-height"
                  horizontalSpace="m"
                  verticalSpace="m"
                  border={true}
                >
                  <CardHeader label="Месторождения" />
                  <BarChart
                    formatValueForTooltip={(v) => `${v} км`}
                    colors={groupExampleData2.colors}
                    groups={groupExampleData2.groups}
                    showGrid={true}
                    showGuide={true}
                    showGroupsLabels={true}
                  />
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  className="MixFlex MixFlex_direction_column MixFlex_gap_s media-height"
                  horizontalSpace="m"
                  verticalSpace="m"
                  border={true}
                >
                  <CardHeader label="Ввод новых скважин" />
                  <BarChart
                    formatValueForTooltip={(v) => `${v} км`}
                    colors={groupExampleData.colors}
                    groups={groupExampleData.groups}
                    showGrid={true}
                    showGuide={true}
                    showGroupsLabels={true}
                  />
                </Card>
              </GridItem>
              <GridItem>
                <Card
                  className="MixFlex MixFlex_direction_column MixFlex_gap_s chart-card"
                  horizontalSpace="m"
                  verticalSpace="m"
                  border={true}
                >
                  <CardHeader label="Добыча" />
                  <Legend
                    direction="row"
                    items={[
                      {
                        color: "var(--color-bg-caution)",
                        text: "Нефть",
                      },
                      {
                        color: "var(--color-bg-warning)",
                        text: "Газ",
                      },
                      {
                        color: "var(--color-bg-normal)",
                        text: "Железо",
                      },
                      {
                        color: "var(--color-bg-success)",
                        text: "Аллюминий",
                      },
                    ]}
                    getItemLabel={(item) => item.text}
                    getItemColor={(item) => item.color}
                    size="s"
                    icon="dot"
                  />
                  <StackedLineChart data={data} labels={labels} />
                </Card>
              </GridItem>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modeling;
