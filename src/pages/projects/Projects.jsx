import React, { useContext, useState } from 'react';
import './projects.scss';
import { Header } from '../../layouts/Header';
import { ShowNavContext } from '../../context/ShowNavContext';
import { NavbarLayout } from '../../components/Navbar';
import CustomBreadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Text } from '@consta/uikit/Text';
import { Button } from '@consta/uikit/Button';
import { IconSearchStroked } from '@consta/icons/IconSearchStroked';
import { IconSortDownCenter } from '@consta/icons/IconSortDownCenter';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { IconTable2 } from '@consta/icons/IconTable2';
import { IconColumns } from '@consta/icons/IconColumns';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { Card } from '@consta/uikit/Card';
import { Badge } from '@consta/uikit/Badge';
import { IconKebab } from '@consta/icons/IconKebab';
import { Pagination } from '@consta/uikit/Pagination';
import { Table } from '@consta/uikit/Table';
import { Avatar } from '@consta/uikit/Avatar';
import CustomChoiceGroup from '../../components/CustomChoiceGroup';

const pageLinks = [
  {
    label: 'Geoapp',
    href: '#!',
  },
  { label: 'Проекты' },
];

const items = [
  {
    icon: IconTable2,
  },
  {
    icon: IconColumns,
  },
];

const rows = [
  {
    id: '1',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="system" label="В работе" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '2',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="normal" label="В работе" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '3',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="warning" label="В работе" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '4',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="success" label="завершен" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '5',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="system" label="В работе" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '6',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="system" label="В работе" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '7',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="normal" label="В работе" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '8',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="warning" label="В работе" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '9',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="success" label="завершен" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '10',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="system" label="В работе" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '11',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="success" label="завершен" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
  {
    id: '12',
    name: 'Добыча газа',
    avatar: <Avatar name="Вадим Матвеев" size="xs" />,
    year: 'ГПН-Хантос',
    production: <Badge size="xs" status="system" label="В работе" />,
    reserves: '16 май',
    npv: <Button size="xs" view="clear" iconLeft={IconKebab} />,
  },
];

const columns = [
  {
    title: 'Название',
    name: 'Добыча газа',
    accessor: 'name',
  },
  {
    title: 'Статус',
    accessor: 'production',
  },
  {
    title: 'Автор',
    accessor: 'avatar',
  },
  {
    title: 'Дата изменения',
    accessor: 'reserves',
    align: 'left',
  },
  {
    title: 'Действия',
    accessor: 'npv',
    align: 'right',
  },
];

const Projects = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [view, setView] = useState('grid');
  const [page, setPage] = useState(1);

  return (
    <div className="projects-page">
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
          <div className="projects-body">
            <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
              <CustomBreadcrumbs items={pageLinks} />
              <CustomChoiceGroup selected={view} onChange={setView} />
            </div>
            <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
              <Text as="h2" view="primary">
                Проекты
              </Text>
              <div className="MixFlex MixFlex_gap_2xs">
                <Button iconLeft={IconSearchStroked} size="s" view="clear" />
                <Button iconLeft={IconSortDownCenter} size="s" view="clear" />
                <Button
                  label="Новый проект"
                  iconLeft={IconSortDownCenter}
                  size="s"
                  view="primary"
                />
              </div>
            </div>
            <div className="MixFlex MixFlex_direction_column MixFlex_gap_s">
              {view === 'grid' ? (
                <>
                  <Grid
                    gap="s"
                    cols={3}
                    breakpoints={{
                      0: {
                        cols: 1,
                        gap: 'm',
                      },
                      480: {
                        cols: 2,
                        gap: 'm',
                      },
                      768: {
                        cols: 34,
                        gap: '2xl',
                      },
                    }}
                  >
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="system" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="normal" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="warning" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="normal" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="normal" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="success" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="system" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="normal" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="warning" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="normal" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="normal" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                    <GridItem>
                      <Card border={true} horizontalSpace="m" verticalSpace="m">
                        <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between">
                          <Badge status="success" label="черновик" size="xs" />
                          <Button size="xs" view="clear" iconLeft={IconKebab} />
                        </div>
                        <div>
                          <Text className="title-sm MixSpace_pB_2xs">
                            Добыча газа
                          </Text>
                          <Text
                            className="MixSpace_pB_xs"
                            size="xs"
                            view="secondary"
                          >
                            Для обнаружения запасов нефти и газа используются
                            современные методы
                          </Text>
                        </div>
                        <div className="MixFlex MixFlex_justify_space-between MixFlex_align_center">
                          <Text size="xs" view="secondary">
                            16 май{' '}
                          </Text>
                          <Button size="xs" view="ghost" label="Подробнее" />
                        </div>
                      </Card>
                    </GridItem>
                  </Grid>
                  <div className="table-pagination MixFlex MixFlex_justify_space-between MixFlex_align_center w-full">
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
                </>
              ) : (
                <>
                  <Table rows={rows} columns={columns} />
                  <div className="table-pagination MixFlex MixFlex_justify_space-between MixFlex_align_center w-full">
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
