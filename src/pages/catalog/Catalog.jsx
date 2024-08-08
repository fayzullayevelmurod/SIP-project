import React, { useContext, useState } from 'react';
import { Header } from '../../layouts/Header';
import { ShowNavContext } from '../../context/ShowNavContext';
import { NavbarLayout } from '../../components/Navbar';
import CustomBreadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { IconChatFilled } from '@consta/icons/IconChatFilled';
import { Card } from '@consta/uikit/Card';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { IconDocFilled } from '@consta/icons/IconDocFilled';
import { IconForward } from '@consta/icons/IconForward';
import { IconCommentAddFilled } from '@consta/icons/IconCommentAddFilled';
import { IconFolderClosed } from '@consta/icons/IconFolderClosed';
import { IconTeam } from '@consta/icons/IconTeam';
import './catalog.scss';
import assets from '../../assets';
import { Tag } from '@consta/uikit/Tag';
import { Avatar } from '@consta/uikit/Avatar';
import { IconKebab } from '@consta/icons/IconKebab';

const pageLinks = [
  {
    label: 'GeoUI',
    href: '#!',
  },
  {
    label: 'Каталог',
  },
];

const items = [
  {
    label: 'Первый — этот вариант не выбрать',
    leftIcon: assets.yandexDzen,
    date: '26.02.2024 в 14:30',
    rightIcon: IconKebab,
  },
  {
    label: 'Статистика сейсморазведки за 2020 год',
    leftIcon: assets.yandexDzen,
    date: '26.02.2024 в 14:30',
    rightIcon: IconKebab,
  },
  {
    label: 'Данные скважин',
    leftIcon: assets.yandexDzen,
    date: '26.02.2024 в 14:30',
    rightIcon: IconKebab,
  },
  {
    label: 'Первый — этот вариант не выбрать',
    leftIcon: assets.yandexDzen,
    date: '26.02.2024 в 14:30',
    rightIcon: IconKebab,
  },
  {
    label: 'Статистика сейсморазведки за 2020 год',
    leftIcon: assets.yandexDzen,
    date: '26.02.2024 в 14:30',
    rightIcon: IconKebab,
  },
  {
    label: 'Данные скважин',
    leftIcon: assets.yandexDzen,
    date: '26.02.2024 в 14:30',
    rightIcon: IconKebab,
  },
  {
    label: 'Первый — этот вариант не выбрать',
    leftIcon: assets.yandexDzen,
    date: '26.02.2024 в 14:30',
    rightIcon: IconKebab,
  },
  {
    label: 'Статистика сейсморазведки за 2020 год',
    leftIcon: assets.yandexDzen,
    date: '26.02.2024 в 14:30',
    rightIcon: IconKebab,
  },
  {
    label: 'Данные скважин',
    leftIcon: assets.yandexDzen,
    date: '26.02.2024 в 14:30',
    rightIcon: IconKebab,
  },
];

const Catalog = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="catalog-page">
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
        <div className="scroll-box">
          <div className="catalog-page__content">
            <CustomBreadcrumbs items={pageLinks} />
            <div className="catalog-page__header">
              <Text as="h2" view="primary">
                Каталог
              </Text>
              <Button
                size="s"
                view="ghost"
                label="Обратная связь"
                iconLeft={IconChatFilled}
              />
            </div>
            <div className=" MixFlex MixFlex_direction_column MixFlex_gap_3xl">
              <Grid
                cols={4}
                gap={'s'}
                className="cards"
                breakpoints={{
                  0: {
                    cols: 1,
                    rowGap: 's',
                  },
                  480: {
                    cols: 2,
                    gap: 's',
                  },
                  800: {
                    cols: 4,
                    gap: 's',
                  },
                }}
              >
                <GridItem>
                  <Card
                    verticalSpace="m"
                    horizontalSpace="m"
                    status="clear"
                    shadow={false}
                    border={true}
                    className="card"
                  >
                    <div className="icon-card">
                      <IconDocFilled />
                    </div>
                    <div className="top-box MixFlex MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                      <Text as="h3" size="s" view="primary">
                        Менеджер данных
                      </Text>
                      <Button size="xs" view="clear" iconLeft={IconForward} />
                    </div>
                    <Text view="secondary" size="xs">
                      Импорт и экспорт файлов
                    </Text>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card
                    verticalSpace="m"
                    horizontalSpace="m"
                    status="clear"
                    shadow={false}
                    border={true}
                    className="card"
                  >
                    <div className="icon-card">
                      <IconCommentAddFilled />
                    </div>
                    <div className="MixFlex top-box MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                      <Text as="h3" size="s" view="primary">
                        Менеджер данных
                      </Text>
                      <Button size="xs" view="clear" iconLeft={IconForward} />
                    </div>
                    <Text view="secondary" size="xs">
                      Импорт и экспорт файлов
                    </Text>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card
                    verticalSpace="m"
                    horizontalSpace="m"
                    status="clear"
                    shadow={false}
                    border={true}
                    className="card"
                  >
                    <div className="icon-card">
                      <IconFolderClosed />
                    </div>
                    <div className="MixFlex top-box MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                      <Text as="h3" size="s" view="primary">
                        Менеджер данных
                      </Text>
                      <Button size="xs" view="clear" iconLeft={IconForward} />
                    </div>
                    <Text view="secondary" size="xs">
                      Импорт и экспорт файлов
                    </Text>
                  </Card>
                </GridItem>
                <GridItem>
                  <Card
                    verticalSpace="m"
                    horizontalSpace="m"
                    status="clear"
                    shadow={false}
                    border={true}
                    className="card"
                  >
                    <div className="icon-card">
                      <IconTeam />
                    </div>
                    <div className="MixFlex top-box MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                      <Text as="h3" size="s" view="primary">
                        Менеджер данных
                      </Text>
                      <Button size="xs" view="clear" iconLeft={IconForward} />
                    </div>
                    <Text view="secondary" size="xs">
                      Импорт и экспорт файлов
                    </Text>
                  </Card>
                </GridItem>
              </Grid>

              <div className="sections">
                <Text as="h3" className="title-sm MixSpace_pB_xl">
                  Разделы
                </Text>
                <Grid
                  cols={3}
                  gap={'s'}
                  className="cards"
                  breakpoints={{
                    0: {
                      cols: 1,
                      rowGap: 's',
                    },
                    680: {
                      cols: 2,
                      gap: 's',
                    },
                    800: {
                      cols: 3,
                      gap: 's',
                    },
                  }}
                >
                  <GridItem>
                    <Card
                      verticalSpace="m"
                      horizontalSpace="m"
                      status="clear"
                      shadow={false}
                      border={true}
                      className="card"
                    >
                      <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                        <Text as="h3" size="s" view="primary">
                          Геология
                        </Text>
                        <Button size="xs" view="clear" iconLeft={IconForward} />
                      </div>
                      <Text className="info" view="secondary" size="xs">
                        Создавайте страницы с наборами диаграмм, таблиц и
                        фильтров
                      </Text>
                      <img
                        className="w-full"
                        src={assets.catalogImg1}
                        alt="catalog img"
                      />
                    </Card>
                  </GridItem>
                  <GridItem>
                    <Card
                      verticalSpace="m"
                      horizontalSpace="m"
                      status="clear"
                      shadow={false}
                      border={true}
                      className="card"
                    >
                      <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                        <Text as="h3" size="s" view="primary">
                          Сейсмика
                        </Text>
                        <Button size="xs" view="clear" iconLeft={IconForward} />
                      </div>
                      <Text className="info" view="secondary" size="xs">
                        Создавайте страницы с наборами диаграмм, таблиц и
                        фильтров
                      </Text>
                      <img
                        className="w-full"
                        src={assets.catalogImg2}
                        alt="catalog img"
                      />
                    </Card>
                  </GridItem>
                  <GridItem>
                    <Card
                      verticalSpace="m"
                      horizontalSpace="m"
                      status="clear"
                      shadow={false}
                      border={true}
                      className="card"
                    >
                      <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                        <Text as="h3" size="s" view="primary">
                          ГРР
                        </Text>
                        <Button size="xs" view="clear" iconLeft={IconForward} />
                      </div>
                      <Text className="info" view="secondary" size="xs">
                        Создавайте страницы с наборами диаграмм, таблиц и
                        фильтров
                      </Text>
                      <img
                        className="w-full"
                        src={assets.catalogImg3}
                        alt="catalog img"
                      />
                    </Card>
                  </GridItem>

                  <GridItem>
                    <Card
                      verticalSpace="m"
                      horizontalSpace="m"
                      status="clear"
                      shadow={false}
                      border={true}
                      className="card"
                    >
                      <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                        <Text as="h3" size="s" view="primary">
                          Разведка
                        </Text>
                        <Button size="xs" view="clear" iconLeft={IconForward} />
                      </div>
                      <Text className="info" view="secondary" size="xs">
                        Создавайте страницы с наборами диаграмм, таблиц и
                        фильтров
                      </Text>
                      <img
                        className="w-full"
                        src={assets.catalogImg4}
                        alt="catalog img"
                      />
                      <div className="Mi MixFlex MixFlex_align_center MixFlex_justify_space-between MixSpace_pT_s">
                        <Tag label="ГК Арктик" group={4} mode="info" size="s" />
                        <Avatar size="s" name="М Д" />
                      </div>
                    </Card>
                  </GridItem>
                  <GridItem>
                    <Card
                      verticalSpace="m"
                      horizontalSpace="m"
                      status="clear"
                      shadow={false}
                      border={true}
                      className="card"
                    >
                      <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                        <Text as="h3" size="s" view="primary">
                          Добыча
                        </Text>
                        <Button size="xs" view="clear" iconLeft={IconForward} />
                      </div>
                      <Text className="info" view="secondary" size="xs">
                        Создавайте страницы с наборами диаграмм, таблиц и
                        фильтров
                      </Text>
                      <img
                        className="w-full"
                        src={assets.catalogImg5}
                        alt="catalog img"
                      />
                      <div className="Mi MixFlex MixFlex_align_center MixFlex_justify_space-between MixSpace_pT_s">
                        <div className="MixFlex MixFlex_gap_xs">
                          <Tag
                            label="ГК Арктик"
                            group={4}
                            mode="info"
                            size="s"
                          />
                          <Tag label="Орион" group={8} mode="info" size="s" />
                        </div>
                        <Avatar size="s" name="М Д" />
                      </div>
                    </Card>
                  </GridItem>
                  <GridItem>
                    <Card
                      verticalSpace="m"
                      horizontalSpace="m"
                      status="clear"
                      shadow={false}
                      border={true}
                      className="card"
                    >
                      <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center MixSpace_pT_s">
                        <Text as="h3" size="s" view="primary">
                          Экономика это раздел с динным текстом в карточке
                        </Text>
                        <Button size="xs" view="clear" iconLeft={IconForward} />
                      </div>
                      <Text className="info" view="secondary" size="xs">
                        Хозяйственная деятельность, а также совокупность
                        общественных отношений, которые складываются в системе
                        производства, распределения
                      </Text>
                      <img
                        className="w-full"
                        src={assets.catalogImg6}
                        alt="catalog img"
                      />
                      <div className="Mi MixFlex MixFlex_align_center MixFlex_justify_space-between MixSpace_pT_s">
                        <Tag label="Орион" group={8} mode="info" size="s" />
                        <Avatar size="s" name="М Д" />
                      </div>
                    </Card>
                  </GridItem>
                </Grid>
              </div>

              <div className="w-full">
                <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between title-box MixSpace_pB_xl">
                  <Text as="h3" className="title-sm">
                    Источники
                  </Text>
                  <Button
                    size="xs"
                    view="clear"
                    label="Перейти в раздел"
                    iconRight={IconForward}
                  />
                </div>
                <Card
                  border={true}
                  shadow={false}
                  verticalSpace="m"
                  horizontalSpace="m"
                  className="list-card"
                >
                  <ul className="list">
                    {items?.map((item, idx) => (
                      <React.Fragment key={idx}>
                        <span
                          className={`line ${
                            hoveredIndex === idx ? 'hide' : ''
                          }`}
                        ></span>
                        <li
                          className="list-item MixFlex MixFlex_align_center MixFlex_justify_space-between"
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          <div className="MixFlex MixFlex_align_center gap-4">
                            <img src={item.leftIcon} alt="" />
                            <Text className="hidden-text">{item.label}</Text>
                          </div>
                          <div className="MixFlex MixFlex_align_center gap-4">
                            <Text size="xs" view="secondary">
                              {item.date}
                            </Text>
                            <Button
                              size="xs"
                              view="clear"
                              iconLeft={item.rightIcon}
                            />
                          </div>
                        </li>
                      </React.Fragment>
                    ))}
                  </ul>
                </Card>
                <Button
                  className="  MixSpace_mT_2xl MixSpace_mL_auto MixSpace_mR_auto MixFlex"
                  label="Показать еще"
                  size="s"
                  view="ghost"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
