import React, { useContext, useEffect, useState } from "react";
import "./table.scss";
import { Table } from "@consta/uikit/Table";
import { Pagination } from "@consta/uikit/Pagination";
import { Checkbox } from "@consta/uikit/Checkbox";
import { Text } from "@consta/uikit/Text";
import { Header } from "../../layouts/Header";
import { ShowNavContext } from "../../context/ShowNavContext";
import { NavbarLayout } from "../../components/Navbar";
import { Button } from "@consta/uikit/Button";
import { IconSortDownCenter } from "@consta/icons/IconSortDownCenter";
import { Badge } from "@consta/uikit/Badge";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { TextField } from "@consta/uikit/TextField";
import { IconAdd } from "@consta/icons/IconAdd";

const rows = [
  {
    id: "1",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    production: <Badge status="system" label="В работе" />,
    reserves: "53.209028, 58.620724",
    npv: "5 000",
  },
  {
    id: "2",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    production: <Badge status="system" label="В работе" />,
    reserves: "53.209028, 58.620724",
    npv: "5 000",
  },
  {
    id: "3",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    production: <Badge status="system" label="В работе" />,
    reserves: "53.209028, 58.620724",
    npv: "5 000",
  },
  {
    id: "4",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    production: <Badge status="system" label="В работе" />,
    reserves: "53.209028, 58.620724",
    npv: "5 000",
  },
  {
    id: "5",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    production: <Badge status="system" label="В работе" />,
    reserves: "53.209028, 58.620724",
    npv: "5 000",
  },
  {
    id: "6",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    production: <Badge status="system" label="В работе" />,
    reserves: "53.209028, 58.620724",
    npv: "5 000",
  },
  {
    id: "6",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    production: <Badge status="system" label="В работе" />,
    reserves: "53.209028, 58.620724",
    npv: "5 000",
  },
  {
    id: "6",
    name: <Checkbox size="s" label="101" />,
    isOpen: "Зимнее",
    year: "ГПН-Хантос",
    production: <Badge status="system" label="В работе" />,
    reserves: "53.209028, 58.620724",
    npv: "5 000",
  },
];

const columns = [
  {
    title: "Скважина",
    name: <Checkbox size="s" label="Северное" />,
    accessor: "name",
  },
  {
    title: "ДО",
    accessor: "year",
  },
  {
    title: "МР",
    accessor: "isOpen",
  },
  {
    title: "Статус",
    accessor: "production",
    align: "left",
  },
  {
    title: "XY",
    accessor: "reserves",
    align: "right",
  },
  {
    title: "Глубина",
    accessor: "npv",
    align: "right",
  },
  {
    title: "Запасы, млн.т.",
    accessor: "npv",
    align: "right",
  },
  {
    title: "NPV, млрд ₽",
    accessor: "npv",
    align: "right",
  },
  {
    title: "NPV, млрд ₽",
    accessor: "npv",
    align: "right",
  },
];

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
    label: "Таблица",
  },
];

const TablePage = () => {
  const [page, setPage] = useState(1);
  const { handleToggleNav, activeNav, setNavbarHidden, toggleHidden } =
    useContext(ShowNavContext);

  return (
    <>
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="table-page flex w-full">
        <NavbarLayout
          setNavbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <div className={`table-parent__box ${activeNav ? "show-navbar" : ""}`}>
          <div className="search-header">
            <div className="flex">
              <div className="table-search">
                <TextField size="xs" type="text" placeholder="Поиск" />
                <Button
                  size="xs"
                  view="clear"
                  iconLeft={IconSearchStroked}
                  className="search-icon"
                />
              </div>
              <Button
                label="Фильтры"
                iconLeft={IconSortDownCenter}
                size="xs"
                view="ghost"
              />
            </div>
            <Button
              label="Добавить"
              iconLeft={IconAdd}
              size="xs"
              view="primary"
            />
          </div>
          <div className="table-box">
            <Table zebraStriped="odd" rows={rows} columns={columns} />
            <div className="table-pagination">
              <Text
                as="span"
                className="pagination-text"
                size="xs"
                view="ghost"
              >
                1 из 8
              </Text>
              <Pagination
                type="input"
                items={5}
                value={page}
                onChange={setPage}
                outerMostArrows={[true, true]}
                arrows={[{ label: null }, { label: null }]}
                size="xs"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablePage;
