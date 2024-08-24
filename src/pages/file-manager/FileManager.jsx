import React, { useContext, useState } from "react";
import { Header } from "../../layouts/Header";
import { ShowNavContext } from "../../context/ShowNavContext";
import { NavbarLayout } from "../../components/Navbar";
import "./file-manager.scss";
import { Text } from "@consta/uikit/Text";
import { AvatarGroup } from "@consta/uikit/AvatarGroup";
import { Button } from "@consta/uikit/Button";
import { IconEdit } from "@consta/icons/IconEdit";
import { IconTrash } from "@consta/icons/IconTrash";
import { Tabs } from "@consta/uikit/Tabs";
import { Badge } from "@consta/uikit/Badge";
import { IconAllDone } from "@consta/icons/IconAllDone";
import { IconAlert } from "@consta/icons/IconAlert";
import { Tag } from "@consta/uikit/Tag";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconSortDownCenter } from "@consta/icons/IconSortDownCenter";
import { IconStorage } from "@consta/icons/IconStorage";
import { IconDownload } from "@consta/icons/IconDownload";
import { IconWells } from "@consta/icons/IconWells";
import { IconSeismic2D } from "@consta/icons/IconSeismic2D";
import { IconMarkers } from "@consta/icons/IconMarkers";
import { IconMaps } from "@consta/icons/IconMaps";
import { IconAttach } from "@consta/icons/IconAttach";
import { IconKernStroked } from "@consta/icons/IconKernStroked";
import assets from "../../assets";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import { IconTable2 } from "@consta/icons/IconTable2";
import { IconColumns } from "@consta/icons/IconColumns";
import { IconWellFolder } from "@consta/icons/IconWellFolder";
import { IconMeatball } from "@consta/icons/IconMeatball";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { IconArrowNext } from "@consta/icons/IconArrowNext";
import { Attachment } from "@consta/uikit/Attachment";
import { Grid, GridItem } from "@consta/uikit/Grid";
import { IconArrowPrevious } from "@consta/icons/IconArrowPrevious";

const pagesLink = [
  {
    label: "Менеджер данных",
    href: "#!",
  },
  {
    label: "Хранилище",
    href: "/#!",
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

const listItems = [
  {
    label: "Скважины",
    id: 1,
    disabled: false,
    leftIcon: IconWells,
  },
  {
    label: "Сьемки",
    id: 2,
    disabled: true,
    leftIcon: IconSeismic2D,
  },
  {
    label: "Модели",
    id: 3,
    disabled: true,
    leftIcon: IconMarkers,
  },
  {
    label: "Маркеры",
    id: 4,
    disabled: true,
    leftIcon: IconMarkers,
  },
  {
    label: "Карты",
    id: 5,
    disabled: true,
    leftIcon: IconMaps,
  },
  {
    label: "Горизонты",
    id: 6,
    disabled: true,
    leftIcon: IconMaps,
  },
];

const items = ["Информация", "История"];

const getItemLabel = (label) => label;

const items2 = [
  {
    icon: IconTable2,
  },
  {
    icon: IconColumns,
  },
];

const FileManager = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [value, setValue] = useState(items[0]);
  const [value2, setValue2] = useState(items2[1]);
  const [activeSidebar, setActiveSidebar] = useState({
    left: false,
    right: false,
  });

  const handleOpenSidebar = (sidebar) => {
    setActiveSidebar((prevState) => ({
      ...prevState,
      [sidebar]: !prevState[sidebar],
    }));
  };

  return (
    <div className="file-manager__page home">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />

      <div className="flex file-manager">
        <NavbarLayout
          navbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={activeNav}
        />
        <div
          className={`left-sidebar ${activeSidebar.left ? "show-sidebar" : ""}`}
        >
          <Button
            view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconArrowNext}
            onClick={() => handleOpenSidebar("left")}
            className={`media-open__sidebar-btn MixSpace_mB_s`}
          />
          <div className="sidebar-header">
            <Text as="h1" view="primary">
              Мои обьекты
            </Text>
            <div className="sidebar-header__btns MixFlex MixFlex_gap_2xs">
              <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
              <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
            </div>
          </div>
          <div className="btns">
            <Button
              size="xs"
              iconLeft={IconAttach}
              label="Загрузить из ПК"
              view="primary"
            />
            <Button
              size="xs"
              iconLeft={IconKernStroked}
              label="Загрузить из БД"
              view="secondary"
            />
          </div>
          <ul className="list">
            <li className="list-item active">
              <div className="flex">
                <IconWells size="s" />
                <Text weight="medium" view="primary" size="xs">
                  Скважины
                </Text>
              </div>
              <Text as="span" size="xs" view="secondary">
                64
              </Text>
            </li>
            <li className="list-item">
              <div className="flex">
                <IconSeismic2D size="s" />
                <Text weight="medium" view="primary" size="xs">
                  Сьемки
                </Text>
              </div>
              <Text as="span" size="xs" view="secondary">
                64
              </Text>
            </li>
            <li className="list-item">
              <div className="flex">
                <img src={assets.iconSeismic3d} alt="" />
                <Text weight="medium" view="primary" size="xs">
                  Модели
                </Text>
              </div>
              <Text as="span" size="xs" view="secondary">
                64
              </Text>
            </li>
            <li className="list-item">
              <div className="flex">
                <IconMarkers size="s" />
                <Text weight="medium" view="primary" size="xs">
                  Маркеры
                </Text>
              </div>
              <Text as="span" size="xs" view="secondary">
                64
              </Text>
            </li>
            <li className="list-item">
              <div className="flex">
                <IconMaps size="s" />
                <Text weight="medium" view="primary" size="xs">
                  Карты
                </Text>
              </div>
              <Text as="span" size="xs" view="secondary">
                64
              </Text>
            </li>
            <li className="list-item">
              <div className="flex">
                <img src={assets.iconHorizon} alt="" />
                <Text weight="medium" view="primary" size="xs">
                  Горизонты
                </Text>
              </div>
              <Text as="span" size="xs" view="secondary">
                64
              </Text>
            </li>
          </ul>
        </div>
        <div className={`middle-sidebar ${activeNav ? "show-nav" : ""}`}>
          <div className="sidebar-header">
            <Text as="h1" view="primary">
              Скважины
            </Text>
            <div className="btns">
              <div className="MixFlex MixFlex_gap_2xs">
                <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
                <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
              </div>
              <ChoiceGroup
                value={value2}
                view="ghost"
                onlyIcon
                size="xs"
                onChange={setValue2}
                items={items2}
                getItemLabel={(item) => item}
                multiple={true}
                name="ChoiceGroupExample"
              />
              <Button
                view="clear"
                size="xs"
                onlyIcon
                iconLeft={IconArrowNext}
                onClick={() => handleOpenSidebar("left")}
                className={`media-open__sidebar-btn`}
              />
              <Button
                view="clear"
                size="xs"
                onlyIcon
                iconLeft={IconArrowPrevious}
                onClick={() => handleOpenSidebar("right")}
                className={`media-open__sidebar-btn`}
              />
            </div>
          </div>
          <div className="lists">
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconMeatball} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
            <div className="list-item">
              <div className="top-box">
                <div className="flex">
                  <IconWellFolder />
                  <Text size="xs" view="primary" weight="medium">
                    Группа скважин 1
                  </Text>
                </div>
                <div className="right-box flex">
                  <Text size="xs" view="secondary">
                    12.8 Мб.
                  </Text>
                  <Text size="xs" view="secondary">
                    05.12.2024 в 13:25
                  </Text>
                </div>
              </div>
              <div className="bottom-box">
                <div className="flex">
                  <Text size="xs" view="secondary">
                    ГПН-Хантос
                  </Text>
                  <Text size="xs" view="secondary">
                    Зимнее
                  </Text>
                  <Text size="xs" view="secondary">
                    Маркеры 4
                  </Text>
                </div>
                <Button size="xs" view="clear" iconLeft={IconArrowRight} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`right-sidebar ${
            activeSidebar.right ? "show-sidebar" : ""
          }`}
        >
          <Button
            view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconArrowPrevious}
            onClick={() => handleOpenSidebar("right")}
            className={`media-open__sidebar-btn MixSpace_mB_s`}
          />
          <div className="sidebar-header">
            <Text as="h1" view="primary">
              Скважина 1
            </Text>
            <div className="sidebar-header__btns">
              <Button size="xs" view="clear" iconLeft={IconDownload} />
              <Button size="xs" view="clear" iconLeft={IconStorage} />
              <Button size="xs" view="clear" iconLeft={IconEdit} />
              <Button size="xs" view="clear" iconLeft={IconTrash} />
            </div>
          </div>
          <div className="tabs">
            <Tabs
              value={value}
              onChange={setValue}
              items={items}
              size="xs"
              getItemLabel={getItemLabel}
            />
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
                Описание очень-очень длинное на две строки, и еще раз длинное
                название чего-либо
              </Text>
            </div>
            <div className="text-box">
              <Text as="span" size="s" view="secondary">
                Статус
              </Text>
              <div className="tags">
                <Badge
                  size="xs"
                  status="success"
                  label="Согласован"
                  iconLeft={IconAllDone}
                  iconRight={IconAlert}
                />
                <Badge
                  size="xs"
                  status="success"
                  label="Согласован"
                  iconLeft={IconAllDone}
                  iconRight={IconAlert}
                />
              </div>
            </div>
            <div className="text-box">
              <Text as="span" size="s" view="secondary">
                Теги
              </Text>
              <div className="tags">
                <Tag size="xs" label="Label" mode="checkbox" />
                <Tag size="xs" label="Label" mode="checkbox" />
              </div>
            </div>
            <div className="text-box">
              <Text as="span" size="s" view="secondary">
                Пользователи
              </Text>
              <AvatarGroup
                size="xs"
                items={avatarGroupItems}
                visibleCount={4}
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
        </div>
      </div>
    </div>
  );
};

export default FileManager;
