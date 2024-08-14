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
import { IconAttach } from "@consta/icons/IconAttach";
import DropdownTable from "./Tablel";
import { IconUser } from "@consta/icons/IconUser";
import { User } from "@consta/uikit/User";
import { IconDownload } from "@consta/icons/IconDownload";
import { Avatar } from "@consta/uikit/Avatar";
import { IconEdit } from "@consta/icons/IconEdit";
import { IconUpload } from "@consta/icons/IconUpload";
import { IconCommentStroked } from "@consta/icons/IconCommentStroked";
import { IconRevert } from "@consta/icons/IconRevert";
import { TextField } from "@consta/uikit/TextField";
import { IconQuestion } from "@consta/icons/IconQuestion";
import { IconSendMessage } from "@consta/icons/IconSendMessage";
import { Select } from "@consta/uikit/Select";
import { DragNDropField } from "@consta/uikit/DragNDropField";
import { Checkbox } from "@consta/uikit/Checkbox";


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

const items = [
  {
    label: "Исследование",
    id: 1,
  },
  {
    label: "Исследование",
    id: 2,
  },
  {
    label: "Исследование",
    id: 3,
  },
];
const items2 = [
  {
    label: "Андрей Петрович",
    id: 1,
  },
  {
    label: "Андрей Петрович",
    id: 2,
  },
  {
    label: "Андрей Петрович",
    id: 3,
  },
];

const ProjectNumbers = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [tabValue, setTabValue] = useState(tabItems[1]);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
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
                <Text className="title-sm MixSpace_mB_s">Услуги и работы</Text>
                <Button
                  size="xs"
                  view="ghost"
                  iconLeft={IconAttach}
                  label="Загрузить документ"
                />
              </div>
              <DropdownTable />

							<div>

							</div>
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
                    <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
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
                      <Button size="xs" view="clear" iconLeft={IconKebab} />
                    </div>
                    <Text size="xs" view="secondary" className="user-job">
                      Администратор, Сейсмик
                    </Text>
                  </li>
                  <li>
                    <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
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
                      <Button size="xs" view="clear" iconLeft={IconKebab} />
                    </div>
                    <Text size="xs" view="secondary" className="user-job">
                      Администратор, Сейсмик
                    </Text>
                  </li>
                  <li>
                    <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
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
                      <Button size="xs" view="clear" iconLeft={IconKebab} />
                    </div>
                    <Text size="xs" view="secondary" className="user-job">
                      Администратор, Сейсмик
                    </Text>
                  </li>
                  <li>
                    <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
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
                      <Button size="xs" view="clear" iconLeft={IconKebab} />
                    </div>
                    <Text size="xs" view="secondary" className="user-job">
                      Администратор, Сейсмик
                    </Text>
                  </li>
                </ul>
              </Card>
            </div>
          )}
          {tabValue == tabItems[4] && (
            <div className="stories">
              <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full">
                <Text className="title-sm">События</Text>
                <Button
                  size="xs"
                  view="ghost"
                  iconLeft={IconDownload}
                  label="Выгрузить лог"
                />
              </div>
              <div>
                <div className="MixFlex MixSpace_mT_s step-card">
                  <div className="step-box">
                    <div className="icon">
                      <IconEdit size="xs" view="secondary" />
                    </div>
                    <div className="line"></div>
                  </div>
                  <Card className="MixFlex MixFlex_align_center MixFlex_justify_space-between MixFlex_direction_row MixFlex_gap_s MixFlex_align_center">
                    <div className="MixFlex MixFlex_align_center MixFlex_direction_row MixFlex_gap_s MixFlex_align_center">
                      <Avatar size="s" name="Артур Утяшев" />
                      <Text size="xs" weight="semibold">
                        Артур Утяшев
                      </Text>
                      <Text size="xs" view="secondary">
                        изменил статус обьекта
                      </Text>
                      <div className="MixFlex MixFlex_gap_2xs MixFlex_align_stretch">
                        <Tag size="xs" label="КТ-750" mode="check" />
                        <Badge status="system" label="Черновик" size="xs" />
                      </div>
                      <Text size="xs" view="secondary">
                        на
                      </Text>
                      <Badge label="в работе" status="normal" size="xs" />
                    </div>
                    <div className="MixFlex MixFlex_gap_s MixFlex_align_center">
                      <Text size="xs" view="secondary">
                        2 часа назад
                      </Text>
                      <Button size="xs" view="clear" iconLeft={IconKebab} />
                    </div>
                  </Card>
                </div>
                <div className="MixFlex MixSpace_mT_s step-card">
                  <div className="step-box">
                    <div className="icon">
                      <IconUpload size="xs" view="secondary" />
                    </div>
                    <div className="line"></div>
                  </div>
                  <Card>
                    <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between MixFlex_direction_row MixFlex_gap_s MixFlex_align_center">
                      <div className="MixFlex MixFlex_align_center MixFlex_direction_row MixFlex_gap_s MixFlex_align_center">
                        <Avatar size="s" name="Артур Утяшев" />
                        <Text size="xs" weight="semibold">
                          Сергей Светлаков
                        </Text>
                        <Text size="xs" view="secondary">
                          добавил файлы
                        </Text>
                        <Tag size="xs" label="3 шт." mode="button" />
                      </div>
                      <div className="MixFlex MixFlex_gap_s MixFlex_align_center">
                        <Text size="xs" view="secondary">
                          2 часа назад
                        </Text>
                        <Button size="xs" view="clear" iconLeft={IconKebab} />
                      </div>
                    </div>
                    <div>
                      <Attachment
                        size="xs"
                        fileName="Данные исследований.pdf"
                        fileExtension="loading"
                        fileDescription="Загрузка 33%"
                        withPictogram={true}
                      />
                      <Attachment
                        size="xs"
                        fileName="Данные исследований Зимнее Каротажи.xls"
                        fileExtension="xls"
                        fileDescription="1,5 Mб  21.02.2019, 14:12 "
                        withPictogram={true}
                      />
                      <Attachment
                        size="xs"
                        fileName="Данные исследований Зимнее Кривые.doc"
                        fileExtension="doc"
                        fileDescription="1,5 Mб  21.02.2019, 14:12 "
                        withPictogram={true}
                      />
                    </div>
                  </Card>
                </div>
                <div className="MixFlex MixSpace_mT_s step-card">
                  <div className="step-box">
                    <div className="icon">
                      <IconCommentStroked size="xs" view="secondary" />
                    </div>
                    <div className="line"></div>
                  </div>
                  <Card>
                    <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between MixFlex_direction_row MixFlex_gap_s MixFlex_align_center">
                      <div className="MixFlex MixFlex_align_center MixFlex_direction_row MixFlex_gap_s MixFlex_align_center">
                        <Avatar size="s" name="Артур Утяшев" />
                        <Text size="xs" weight="semibold">
                          Ильяс Хисматуллин
                        </Text>
                        <Text size="xs" view="secondary">
                          оставил комментарий в проекте
                        </Text>
                        <Tag size="xs" label="ГЕО" mode="check" />
                      </div>
                      <div className="MixFlex MixFlex_gap_s MixFlex_align_center">
                        <Text size="xs" view="secondary">
                          2 часа назад
                        </Text>
                        <Button size="xs" view="clear" iconLeft={IconKebab} />
                      </div>
                    </div>
                    <div className="info-bg">
                      <Text as="p" size="xs" view="secondary">
                        Добро пожаловать в систему GeoUI. С помощью нашего
                        сервиса, помогите дизайнерам и разработчикам создавать
                        красивые продукты, которые будут более гибкими и
                        работать с удовольствием
                      </Text>
                    </div>
                  </Card>
                </div>
                <div className="MixFlex MixSpace_mT_s step-card">
                  <div className="step-box">
                    <div className="icon">
                      <IconRevert size="xs" view="secondary" />
                    </div>
                    <div className="line last-child"></div>
                  </div>
                  <Card className="MixFlex MixFlex_align_center MixFlex_justify_space-between MixFlex_direction_row MixFlex_gap_s MixFlex_align_center">
                    <div className="MixFlex MixFlex_align_center MixFlex_direction_row MixFlex_gap_s MixFlex_align_center">
                      <Avatar size="s" name="Артур Утяшев" />
                      <Text size="xs" weight="semibold">
                        Система
                      </Text>
                      <Text size="xs" view="secondary">
                        перезагрузка серверов
                      </Text>
                    </div>
                    <div className="MixFlex MixFlex_gap_s MixFlex_align_center">
                      <Text size="xs" view="secondary">
                        2 часа назад
                      </Text>
                      <Button size="xs" view="clear" iconLeft={IconKebab} />
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          )}
          {tabValue == tabItems[5] && (
            <div className="form-box">
              <Text className="title-sm MixSpace_mB_s">Настройки</Text>
              {/* <Text size="xs" view="secondary">Название</Text> */}
              <form className="auth-box MixFlex MixFlex_direction_column MixFlex_gap_s MixCard_border MixSpace_pT_m MixSpace_pB_m MixSpace_pL_m MixSpace_pR_m rounded-12">
                <TextField
                  label="Название"
                  labelIcon={IconQuestion}
                  size="xs"
                  required
                  value="Освоение месторождения №207"
                  type="text"
                  placeholder="Освоение месторождения №207"
                />
                <Select
                  size="xs"
                  items={items}
                  value={value}
                  onChange={setValue}
                  label="Категория"
                  placeholder="Исследование"
                  caption="Начните вводить текст, а формат подстроится автоматически"
                />
                <TextField
                  label="Общая стоимость"
                  labelIcon={IconQuestion}
                  size="xs"
                  required
                  value="28 460 460"
                  type="text"
                  rightSide="руб"
                  placeholder="Освоение месторождения №207"
                />
                <Select
                  size="xs"
                  items={items2}
                  value={value2}
                  onChange={setValue2}
                  label="Автор"
                  placeholder="Андрей Петрович"
                />
                <TextField
                  label="Описание"
                  labelIcon={IconQuestion}
                  size="xs"
                  required
                  type="textarea"
                  rows={4}
                  placeholder="Введите текст"
                />
                <DragNDropField
                  className="w-full"
                  accept={[".PNG", ".TIFF", "JPG"]}
                >
                  {({ openFileDialog }) => (
                    <>
                      <Text size="xs" view="secondary">
                        Перетащите файлы или {" "}
                        <Text
                          as="span"
                          size="xs"
                          view="link"
                          onClick={openFileDialog}
                        >
                          загрузите
                        </Text>
                      </Text>
                      <Text size="xs" view="ghost" className="MixSpace_mT_xs">
                        Поддерживаемые форматы: PNG, TIFF, JPG
                      </Text>
                    </>
                  )}
                </DragNDropField>

                <div className="auth-bottom MixFlex MixFlex_justify_space-between MixFlex_align_center MixSpace_mT_s w-full">
                  <Button view="ghost" size="xs" iconLeft={IconQuestion} />
                  <Button
                    label="Отправить"
                    view="primary"
                    size="xs"
                    iconRight={IconSendMessage}
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectNumbers;
