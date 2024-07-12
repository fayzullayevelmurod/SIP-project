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
import { DatePicker } from "@consta/uikit/DatePicker";
import { Tabs } from "@consta/uikit/Tabs";
import { Legend } from "@consta/widgets/Legend/Legend";
import { CardHeader, StackedLineChart } from "../../components";
import { Table } from "@consta/uikit/Table";
import { Checkbox } from "@consta/uikit/Checkbox";
import "../table/table.scss";
const rows = [
  {
    id: "1",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    reserves: "53.209028, 58.620724",
    npv: "5 000",
    npvTwo: "5 000",
  },
  {
    id: "2",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    reserves: "53.209028, 58.620724",
    npv: "5 000",
    npvTwo: "5 000",
  },
  {
    id: "3",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    reserves: "53.209028, 58.620724",
    npv: "5 000",
    npvTwo: "5 000",
  },
  {
    id: "4",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    reserves: "53.209028, 58.620724",
    npv: "5 000",
    npvTwo: "5 000",
  },
  {
    id: "5",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    reserves: "53.209028, 58.620724",
    npv: "5 000",
    npvTwo: "5 000",
  },
];

const columns = [
  {
    title: "Месторождение",
    name: <Checkbox size="s" label="Северное" />,
    accessor: "name",
  },
  {
    title: "Год открытия",
    accessor: "year",
  },
  {
    title: "Тип ",
    accessor: "isOpen",
  },
  {
    title: "Добыча, млн.т.",
    accessor: "npvTwo",
    align: "right",
  },
  {
    title: "ЗАПАСЫ, млн.т.",
    accessor: "reserves",
    align: "right",
  },
  {
    title: "NPV (P50), млрд ₽",
    accessor: "npv",
    align: "right",
  },
];

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
    label: "Отчет",
  },
];

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const data = {
  email: [120, 132, 101, 134, 90, 230, 210],
  unionAds: [220, 182, 191, 234, 290, 330, 310],
  videoAds: [150, 232, 201, 154, 190, 330, 410],
  direct: [320, 332, 301, 334, 390, 330, 320],
  searchEngine: [820, 932, 901, 934, 1290, 1330, 1320],
};

const items = ["Квартал", "Месяц", "Неделя"];

const tabItems = ["Информация", "Документы", "Статистика"];

const getItemLabel = (label) => label;

const Report = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [value, setValue] = useState(items[0]);
  const [value2, setValue2] = useState(null);
  const [tabValue, setTabValue] = useState(tabItems[0]);

  return (
    <div className="dashboard-page report-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={true}
        hamburgerLogo={true}
        dropdownLogo={false}
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
              <Text className="title">Отчет</Text>
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
            <div className="MixFlex MixFlex_direction_column MixFlex_gap_s w-full">
              <Tabs
                value={tabValue}
                onChange={setTabValue}
                items={tabItems}
                size="xs"
                getItemLabel={getItemLabel}
              />
              <Card
                className="MixFlex MixFlex_direction_column MixFlex_gap_s w-full"
                horizontalSpace="m"
                verticalSpace="m"
                border={true}
              >
                <CardHeader label="Профиль добычи" />
                <Legend
                  direction="row"
                  items={[
                    {
                      color: "#FF7479",
                      text: "СПГ",
                    },
                    {
                      color: "#32B4FF",
                      text: "Газ",
                    },
                    {
                      color: "#3B4195",
                      text: "Нефть",
                    },
                  ]}
                  getItemLabel={(item) => item.text}
                  getItemColor={(item) => item.color}
                  size="s"
                  icon="dot"
                />
                <StackedLineChart data={data} labels={labels} />
              </Card>
            </div>

            <Table zebraStriped="odd" rows={rows} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
