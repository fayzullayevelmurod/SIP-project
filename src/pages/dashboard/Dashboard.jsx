import React, { useContext, useState } from "react";
import "./dashboard.scss";
import { Header } from "../../layouts/Header";
import { NavbarLayout } from "../../components/Navbar";
import { ShowNavContext } from "../../context/ShowNavContext";
import CustomBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { IconRevert } from "@consta/icons/IconRevert";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import { IconAdd } from "@consta/icons/IconAdd";
import { Grid, GridItem } from "@consta/uikit/Grid";
import { Card } from "@consta/uikit/Card";
import { Stats } from "@consta/widgets/Stats";
import assets from "../../assets";
import { IconWellBlue } from "@consta/icons/IconWellBlue";
import { DatePicker } from "@consta/uikit/DatePicker";

import {
  CardHeader,
  CustomBarChart,
  PolygonsExample,
  StackedLineChart,
} from "../../components";
import { Legend } from "@consta/widgets/Legend/Legend";
import { BarChart } from "@consta/widgets/BarChart";
import { IconTopRight } from "@consta/icons/IconTopRight";

const pageLinks = [
  {
    label: "Geoapp",
    href: "#!",
  },
  {
    label: "Дашборд",
    href: "#!",
  },
  {
    label: "Сводная",
  },
];

const data = {
  email: [120, 132, 101, 134, 90, 230, 210],
  unionAds: [220, 182, 191, 234, 290, 330, 310],
  videoAds: [150, 232, 201, 154, 190, 330, 410],
  direct: [320, 332, 301, 334, 390, 330, 320],
  searchEngine: [820, 932, 901, 934, 1290, 1330, 1320],
};

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const items = ["Квартал", "Месяц", "Неделя"];

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

const listItems = [
  {
    label: "Скважина 1",
    leftIcon: <IconWellBlue />,
    id: 1,
    rightText: "ХМАО / Зимнее",
  },
  {
    label: "Скважина 2",
    id: 2,
    leftIcon: <IconWellBlue />,
    rightText: "ХМАО / Зимнее",
  },
  {
    label: "Скважина 3",
    id: 3,
    leftIcon: <IconWellBlue />,
    rightText: "ХМАО / Зимнее",
  },
  {
    label: "Скважина 1",
    leftIcon: <IconWellBlue />,
    id: 4,
    rightText: "ХМАО / Зимнее",
  },
  {
    label: "Скважина 2",
    id: 5,
    leftIcon: <IconWellBlue />,
    rightText: "ХМАО / Зимнее",
  },
  {
    label: "Скважина 3",
    id: 6,
    leftIcon: <IconWellBlue />,
    rightText: "ХМАО / Зимнее",
  },
  {
    label: "Скважина 3",
    id: 7,
    leftIcon: <IconWellBlue />,
    rightText: "ХМАО / Зимнее",
  },
];

const Dashboard = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [value, setValue] = useState(items[0]);
  const [value2, setValue2] = useState(null);

  return (
    <div className="dashboard-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={true}
        hamburgerLogo={true}
        dropdownLogo={false}
        numeredIcon={true}
      />
      <div className="flex">
        <NavbarLayout
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <div className="dashboard-content">
          <div className="MixFlex MixFlex_direction_column MixFlex_gap_xl">
            <CustomBreadcrumbs items={pageLinks} />
            <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full">
              <Text className="title">Сводная</Text>
              <div className="MixFlex MixFlex_gap_2xs MixFlex_align_center">
                <Button view="ghost" size="s" label="Распечатать" />
                <div className="button-separator"></div>
                <Button view="ghost" size="s" iconLeft={IconRevert} />
              </div>
            </div>
            <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full">
              <div className="MixFlex MixFlex_align_center MixFlex_gap_2xs">
                <ChoiceGroup
                  value={value}
                  onChange={setValue}
                  items={items}
                  getItemLabel={(item) => item}
                  multiple={false}
                  name="ChoiceGroupExample"
                  size="xs"
                  view="secondary"
                />
                <DatePicker size="xs" value={value2} onChange={setValue2} />
              </div>

              <Button
                size="xs"
                view="ghost"
                label="Сохранить"
                iconLeft={IconAdd}
              />
            </div>
          </div>
          <Grid cols={4} gap="xl">
            <GridItem>
              <Card
                className="MixFlex MixFlex_justify_space-between MixFlex_align_center sitatistik-card"
                border={true}
                horizontalSpace="m"
                verticalSpace="m"
              >
                <Stats
                  value={587}
                  title="ВНС, шт"
                  rate="2%"
                  iconArrowRate
                  status="success"
                />
                <img src={assets.statistiks} alt="" />
              </Card>
            </GridItem>
            <GridItem>
              <Card
                className="MixFlex MixFlex_justify_space-between MixFlex_align_center sitatistik-card"
                border={true}
                horizontalSpace="m"
                verticalSpace="m"
              >
                <Stats
                  value={106562}
                  title="Q УВ, млн т н.э."
                  rate="13%"
                  iconArrowRate
                  status="warning"
                />
                <img src={assets.statistiks} alt="" />
              </Card>
            </GridItem>
            <GridItem>
              <Card
                className="MixFlex MixFlex_justify_space-between MixFlex_align_center sitatistik-card"
                border={true}
                horizontalSpace="m"
                verticalSpace="m"
              >
                <Stats
                  value={106562}
                  title="Q УВ, млн т н.э."
                  rate="13%"
                  iconArrowRate
                  status="warning"
                />
                <img src={assets.statistiks} alt="" />
              </Card>
            </GridItem>
            <GridItem>
              <Card
                className="MixFlex MixFlex_justify_space-between MixFlex_align_center sitatistik-card"
                border={true}
                horizontalSpace="m"
                verticalSpace="m"
              >
                <Stats
                  value={587}
                  title="ВНС, шт"
                  rate="2%"
                  iconArrowRate
                  status="success"
                />
                <img src={assets.statistiks} alt="" />
              </Card>
            </GridItem>
          </Grid>
          <Grid cols={2} gap="xl">
            <GridItem>
              <Card
                className="MixFlex MixFlex_direction_column MixFlex_gap_s"
                horizontalSpace="m"
                verticalSpace="m"
                border={true}
              >
                <CardHeader label="Карта" />
                <PolygonsExample />
              </Card>
            </GridItem>
            <GridItem>
              <Card
                className="MixFlex MixFlex_direction_column MixFlex_gap_s"
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
          <Grid cols={3} gap="xl">
            <GridItem>
              <Card
                className="MixFlex MixFlex_direction_column MixFlex_gap_s"
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
                className="MixFlex MixFlex_direction_column MixFlex_gap_s"
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
                className="MixFlex MixFlex_direction_column MixFlex_gap_s"
                horizontalSpace="m"
                verticalSpace="m"
                border={true}
              >
                <CardHeader label="Скважины" />
                <ul className="list">
                  {listItems?.map((item) => (
                    <li
                      className="list-item MixFlex MixFlex_align_center MixFlex_justify_space-between"
                      key={item.id}
                    >
                      <div className="MixFlex MixFlex_gap_xs MixFlex_align_center">
                        {item.leftIcon}
                        <Text size="xs" view="primary">
                          {item.label}
                        </Text>
                      </div>
                      <Text as="span" view="secondary" size="xs">
                        {item.rightText}
                      </Text>
                    </li>
                  ))}
                </ul>
                <Button
                  label="Все скважины"
                  view="ghost"
                  size="s"
                  className="show-more__btn"
                  iconRight={IconTopRight}
                />
              </Card>
            </GridItem>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
