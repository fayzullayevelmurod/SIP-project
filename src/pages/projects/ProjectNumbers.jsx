import React, { useContext, useState } from "react";
import { NavbarLayout } from "../../components/Navbar";
import { Header } from "../../layouts/Header";
import CustomBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { ShowNavContext } from "../../context/ShowNavContext";
import { Badge } from "@consta/uikit/Badge";
import "./projects.scss";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { IconBookmarkStroked } from "@consta/icons/IconBookmarkStroked";
import { IconShare } from "@consta/icons/IconShare";
import { IconKebab } from "@consta/icons/IconKebab";
import { Tabs } from "@consta/uikit/Tabs";
import { Grid, GridItem } from "@consta/uikit/Grid";
import { Table } from "@consta/uikit/Table";
import { IconTopRight } from "@consta/icons/IconTopRight";
import { IconCopy } from "@consta/icons/IconCopy";
import { Card } from "@consta/uikit/Card";
import { Attachment } from "@consta/uikit/Attachment";
import { AvatarGroup } from "@consta/uikit/AvatarGroup";
import { Tag } from "@consta/uikit/Tag";
import { IconAllDone } from "@consta/icons/IconAllDone";
import { IconAlert } from "@consta/icons/IconAlert";
import { IconAttach } from "@consta/icons/IconAttach";
import DropdownTable from "./Tablel";
import { IconUser } from "@consta/icons/IconUser";
import { User } from "@consta/uikit/User";

const pageLinks = [
  {
    label: "Geoapp",
    href: "#!",
  },
  { label: "Проекты", href: "projects" },
  { label: "№207" },
];

const tabItems = [
  "Общая информация",
  "Услуги и работы",
  "Документы",
  "Пользователи",
  "История",
  "Настройки",
];

const getTabItemLabel = (label) => label;

const rows = [
  {
    id: "1",
    name: "Бурение",
    date: "12.04.2024",
    oil: "Исполнитель",
    fte: "FTE",
    price: "Стоимость",
  },
  {
    id: "2",
    name: "Бурение",
    date: "12.04.2024",
    oil: "Исполнитель",
    fte: "FTE",
    price: "Стоимость",
  },
  {
    id: "3",
    name: "Бурение",
    date: "12.04.2024",
    oil: "Исполнитель",
    fte: "FTE",
    price: "Стоимость",
  },
  {
    id: "4",
    name: "Бурение",
    date: "12.04.2024",
    oil: "Исполнитель",
    fte: "FTE",
    price: "Стоимость",
  },
  {
    id: "5",
    name: "Бурение",
    date: "12.04.2024",
    oil: "Исполнитель",
    fte: "FTE",
    price: "Стоимость",
  },
  {
    id: "6",
    name: "Бурение",
    date: "12.04.2024",
    oil: "Исполнитель",
    fte: "FTE",
    price: "Стоимость",
  },
  {
    id: "7",
    name: "Бурение",
    date: "12.04.2024",
    oil: "Исполнитель",
    fte: "FTE",
    price: "Стоимость",
  },
];

const columns = [
  {
    title: "Месторождение",
    accessor: "name",
  },
  {
    title: "Дата начала",
    accessor: "date",
  },
  {
    title: "Исполнитель",
    accessor: "oil",
  },
  {
    title: "FTE",
    align: "right",
    accessor: "fte",
  },
  {
    title: "Стоимость",
    align: "right",
    accessor: "price",
  },
];

const avatarGroupItems = [
  {
    name: "Вадим Матвеев",
  },
  {
    name: "Лидия Индриксон",
  },
  {
    name: "Геннадий Морозов",
  },
  {
    name: "Геннадий Морозов",
  },
  {
    name: "Вадим Матвеев",
  },
  {
    name: "Лидия Индриксон",
  },
  {
    name: "Геннадий Морозов",
  },
  {
    name: "Геннадий Морозов",
  },
];

const ProjectNumbers = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [tabValue, setTabValue] = useState(tabItems[3]);

  return (
    <div className="project-number__page">
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
        <div className="project-number__body">
          <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
            <div className="MixFlex MixFlex_align_center MixFlex_gap_xs">
              <CustomBreadcrumbs items={pageLinks} />
              <Badge status="system" size="xs" label="черновик" />
              <Text size="xs" view="secondary">
                20.01.2023
              </Text>
            </div>
            <div className="MixFlex MixFlex_gap_2xs">
              <Button view="clear" size="xs" iconLeft={IconBookmarkStroked} />
              <Button view="clear" size="xs" iconLeft={IconShare} />
              <Button view="clear" size="xs" iconLeft={IconKebab} />
            </div>
          </div>
          <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
            <Text as="h2" className="title">
              Освоение месторождения №207
            </Text>
            <Button size="s" view="secondary" label="Опубликовать" />
          </div>
          <Tabs
            value={tabValue}
            onChange={setTabValue}
            items={tabItems}
            getItemLabel={getTabItemLabel}
            size="xs"
          />

          {tabValue == tabItems[0] && (
            <Grid gap="xs" className="custom-grid" cols={5}>
              <GridItem className="flexible" col={4}>
                <div className="MixFlex MixFlex_direction_column MixFlex_gap_xl">
                  <div className="MixFlex MixFlex_direction_column MixFlex_gap_s w-full">
                    <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full">
                      <Text className="title-sm">Виды работ</Text>
                      <Button size="xs" view="ghost" label="Экспорт" />
                    </div>
                    <Table zebraStriped="odd" rows={rows} columns={columns} />
                    <Button
                      label="Полная смета"
                      size="s"
                      view="ghost"
                      iconRight={IconTopRight}
                      className="show-more__btn"
                    />
                  </div>
                  <div className="MixFlex MixFlex_direction_column MixFlex_gap_s w-full">
                    <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full">
                      <Text className="title-sm">Справочная информация</Text>
                      <Button size="xs" view="ghost" iconLeft={IconCopy} />
                    </div>
                    <Card
                      shadow={false}
                      border={true}
                      verticalSpace="s"
                      horizontalSpace="m"
                    >
                      <div className="card-box">
                        <Text size="xs" view="secondary">
                          Виды деятельности
                        </Text>
                        <Text as="p" size="xs">
                          Торговля автомобильными деталями, узлами и
                          принадлежностями (45.3) <br /> Торговля оптовая
                          твердым, жидким и газообразным топливом и подобными
                          продуктами (46.71) <br /> Торговля розничная
                          преимущественно пищевыми продуктами, включая напитки,
                          и табачными изделиями в неспециализированных магазинах
                          (47.11)
                        </Text>
                      </div>
                      <div className="card-box">
                        <Text size="xs" view="secondary">
                          Классификатор
                        </Text>
                        <Text as="p" size="xs">
                          06.20.10.110: Газ горючий природный (газ естественный)
                        </Text>
                      </div>
                      <div className="card-box">
                        <Text size="xs" view="secondary">
                          Дополнительно
                        </Text>
                        <Text as="p" size="xs">
                          Торговля розничная моторным топливом в
                          специализированных магазинах (47.30)
                        </Text>
                      </div>
                    </Card>
                  </div>
                </div>
              </GridItem>
              <GridItem className="right-sidebar" col={1}>
                <Text className="title-sm">Общие свединия</Text>
                <div className="tabs">
                  <div className="text-box">
                    <Text as="span" size="s" view="secondary">
                      Название
                    </Text>
                    <Text size="s">Северное</Text>
                  </div>
                  <div className="text-box">
                    <Text as="p" size="s" view="secondary">
                      Название
                    </Text>
                    <Text as="p" size="s">
                      Описание очень-очень длинное на две строки, и еще раз
                      длинное название чего-либо
                    </Text>
                  </div>
                  <div className="text-box">
                    <Text as="span" size="s" view="secondary">
                      Статус
                    </Text>
                    <div className="tags">
                      <Badge size="xs" status="system" label="черновик" />
                    </div>
                  </div>
                  <div className="text-box">
                    <Text as="span" size="s" view="secondary">
                      Теги
                    </Text>
                    <div className="tags">
                      <Tag size="xs" label="Label" mode="check" />
                      <Tag size="xs" label="Label" mode="check" />
                    </div>
                  </div>
                  <div className="text-box">
                    <Text as="span" size="s" view="secondary">
                      Пользователи
                    </Text>
                    <AvatarGroup
                      size="xs"
                      items={avatarGroupItems}
                      visibleCount={3}
                    />
                  </div>
                  <div className="text-box">
                    <Text as="span" size="s" view="secondary">
                      Документы
                    </Text>
                    <Attachment
                      withPictogram
                      fileName="Приложенный документ c небольшим названием"
                      fileExtension="docx"
                      fileDescription="1,5 Mб  21.02.2019, 14:12"
                      size="xs"
                    />
                    <Attachment
                      withPictogram
                      fileName="Приложенный документ c небольшим названием"
                      fileExtension="pdf"
                      fileDescription="1,5 Mб  21.02.2019, 14:12"
                      size="xs"
                    />
                    <Attachment
                      withPictogram
                      fileName="Приложенный документ c небольшим названием"
                      fileExtension="xlsx"
                      fileDescription="1,5 Mб  21.02.2019, 14:12"
                      size="xs"
                    />
                  </div>
                </div>
              </GridItem>
            </Grid>
          )}
          {tabValue == tabItems[1] && (
            <div>
              <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full">
                <Text className="title-sm">Услуги и работы</Text>
                <Button
                  size="xs"
                  view="ghost"
                  iconLeft={IconAttach}
                  label="Загрузить документ"
                />
              </div>
              <DropdownTable />
            </div>
          )}
          {tabValue == tabItems[2] && (
            <div className="MixFlex MixFlex_direction_column MixFlex_gap_s">
              <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full">
                <Text className="title-sm">Документы</Text>
                <Button
                  size="xs"
                  view="ghost"
                  iconLeft={IconAttach}
                  label="Загрузить документ"
                />
              </div>
              <Card>
                <Attachment
                  size="xs"
                  withPictogram
                  fileName="Исследования МР.doc"
                  fileExtension="doc"
                  fileDescription="1,5 Mб  21.02.2019, 14:12 "
                />
                <Attachment
                  size="xs"
                  withPictogram
                  fileName="Формула расчета.csv"
                  fileExtension="csv"
                  fileDescription="1,5 Mб  21.02.2019, 14:12 "
                />
                <Attachment
                  size="xs"
                  withPictogram
                  fileName="Отчет добычи.pdf"
                  fileExtension="pdf"
                  fileDescription="1,5 Mб  21.02.2019, 14:12 "
                />
                <Attachment
                  size="xs"
                  withPictogram
                  fileName="Все документы.rar"
                  fileExtension="rar"
                  fileDescription="1,5 Mб  21.02.2019, 14:12 "
                />
                <Attachment
                  size="xs"
                  withPictogram
                  fileName="Исследования МР.doc"
                  fileExtension="doc"
                  fileDescription="1,5 Mб  21.02.2019, 14:12 "
                />
              </Card>
            </div>
          )}
          {tabValue == tabItems[3] && (
            <div className="MixFlex MixFlex_direction_column MixFlex_gap_s">
              <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full">
                <Text className="title-sm">Пользователи</Text>
                <Button
                  size="xs"
                  view="ghost"
                  iconLeft={IconUser}
                  label="Пригласить пользователя"
                />
              </div>
              <Card>
                <ul className="user-list">
                  <li>
                    <div className="MixFlex MixFlex_align_center">
                      <User
                        size="s"
                        name="Беляев Алексей Петрович"
                        className="user-box"
                      />
                      <Text size="xs" view="secondary">
                        belyev.ap@mail.com
                      </Text>
                    </div>
                    <Text size="xs" view="secondary" className="user-job">
                      Администратор, Сейсмик
                    </Text>
                  </li>
                </ul>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectNumbers;
