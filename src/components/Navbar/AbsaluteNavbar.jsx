import React, { useContext } from 'react'
import { Button } from "@consta/uikit/Button";
import { IconLithologyFilled } from "@consta/icons/IconLithologyFilled";
import { Collapse } from "@consta/uikit/Collapse";
import { IconHome } from "@consta/icons/IconHome";
import { IconFolderOpen } from "@consta/icons/IconFolderOpen";
import { IconWindow } from "@consta/icons/IconWindow";
import { IconPicture } from "@consta/icons/IconPicture";
import { IconCalculator } from "@consta/icons/IconCalculator";
import { IconBook } from "@consta/icons/IconBook";
import { IconTree } from "@consta/icons/IconTree";
import { IconType } from "@consta/icons/IconType";
import { IconSettings } from "@consta/icons/IconSettings";
import { IconIpadStroked } from "@consta/icons/IconIpadStroked";
import { IconAdd } from "@consta/icons/IconAdd";
import { IconArrowPrevious } from "@consta/icons/IconArrowPrevious";
import { useEffect, useState } from "react";
import assets from "../../assets";
import { IconDocFilled } from "@consta/icons/IconDocFilled";
import { IconRing } from "@consta/icons/IconRing";
import { IconBento } from "@consta/icons/IconBento";
import { Avatar } from "@consta/uikit/Avatar";
import { IconClose } from "@consta/icons/IconClose";
import { ShowNavContext } from '../../context/ShowNavContext';


const AbsaluteNavbar = ({ openNav }) => {
  const [isActive, setIsActive] = useState(openNav);
  const [isOpen, setOpen] = useState({});
  const { handleAbsoluteNav } = useContext(ShowNavContext);

  useEffect(() => {
    setIsActive(openNav);
  }, [openNav]);

  const handleChangeActive = () => {
    setIsActive(!isActive);
    setOpen({});
  };
  const handleCollapseToggle = (key) => {
    if (isActive) {
      setOpen((prevState) => ({
        ...prevState,
        [key]: !prevState[key],
      }));
    }
  };

  const clicker = () => {
    handleChangeActive();
    if (handleToggleNav) {
      handleToggleNav();
    }
    if (handleToggleNav) {
      handleToggleNav();
    }
  };

  return (
    <>
      <div className='overlay'></div>
      <div className='navbar absolute-navbar'>
        <div className="navbar-top">
          <div className='MixFlex MixFlex_align_center MixFlex_justify_space-between top-logo'>
            <div className='MixFlex MixFlex_align_center MixFlex_gap_xs'>
              <img
                src={assets.headerLogo}
                alt="header-logo"
                width="24"
                height="24"
              />
              <p>Geoapp</p>
            </div>
            <Button view="clear" size="xs" iconLeft={IconClose} onClick={handleAbsoluteNav} />
          </div>
          <div className="left-nav__boxes">
            <Collapse
              className="nav-list active col"
              size="xs"
              label={
                <div className="flex  items-center">
                  <div className="nav-list__icon">
                    <IconHome size="xs" />
                  </div>
                  <a href="#!" className="nav-link collapse">
                    Главная
                  </a>
                </div>
              }
              iconPosition=""
            ></Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconLithologyFilled size="xs" />
                  </div>
                  <p className="nav-link collapse">Дашборд</p>
                </div>
              }
              isOpen={isOpen["collapse1"]}
              iconPosition="right"
              onClick={() => handleCollapseToggle("collapse1")}
            >
              <a href="/dashboard">Общая</a>
              <a href="/report">Детальная</a>
            </Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center notification">
                  <div className="nav-list__icon">
                    <IconFolderOpen size="xs" />
                  </div>
                  <p className="nav-link collapse">Проекты</p>
                </div>
              }
              isOpen={isOpen["collapse2"]}
              iconPosition="right"
              onClick={() => handleCollapseToggle("collapse2")}
            >
              <a href="/projects">Карточки</a>
              <a href="#!">Список</a>
              <a href="#!">Детальная</a>
            </Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconWindow size="xs" />
                  </div>
                  <p className="nav-link collapse">Контент</p>
                </div>
              }
              isOpen={isOpen["collapse3"]}
              iconPosition="right"
              onClick={() => handleCollapseToggle("collapse3")}
            >
              <a href="/projects-number">Общая</a>
              <a href="#!">Информация</a>
              <a href="#!">Файлы</a>
              <a href="#!">Команда</a>
              <a href="#!">История</a>
              <a href="#!">Комментарии</a>
            </Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconPicture size="xs" />
                  </div>
                  <p className="nav-link collapse">Визуализатор</p>
                </div>
              }
              isOpen={isOpen["collapse4"]}
              iconPosition="right"
              onClick={() => handleCollapseToggle("collapse4")}
            >
              <a href="/table">Таблица</a>
              <a href="/visualization-2D">2D карта</a>
              <a href="/visualization-3D">3D сцена</a>
              <a href="/interpretation">Интерпретация</a>
              <a href="/corr-circuit">Корреляционная схема</a>
              <a href="/tablet">Планшет</a>
              <a href="#!">Расчетный процесс</a>
              <a href="/modeling">Моделирование</a>
            </Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconDocFilled size="xs" />
                  </div>
                  <p className="nav-link collapse">Менеджер данных</p>
                </div>
              }
              isOpen={isOpen["collapse04"]}
              iconPosition="right"
              onClick={() => handleCollapseToggle("collapse04")}
            >
              <a href="#!">Хранилище</a>
              <a href="#!">Импорт из ПК</a>
              <a href="#!">Импорт из БД</a>
              <a href="#!">Корзина (СБД)</a>
            </Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconCalculator size="xs" />
                  </div>
                  <p className="nav-link collapse">Процессы</p>
                </div>
              }
              isOpen={isOpen["collapse5"]}
              iconPosition="right"
              onClick={() => handleCollapseToggle("collapse5")}
            >
              <a href="/modeling">Моделирование</a>
              <a href="/estimated">Расчетный</a>
            </Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconBook size="xs" />
                  </div>
                  <a href="#!" className="nav-link collapse">
                    Справочники
                  </a>
                </div>
              }
              iconPosition=""
            ></Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconTree size="xs" />
                  </div>
                  <a href="/data-tree" className="nav-link collapse">
                    Дерево данных
                  </a>
                </div>
              }
              iconPosition=""
            >
            </Collapse>

            <div className="parent-links">
              <a href="/data-tree">Дерево</a>
              <a href="/multi-menu">Мульти-меню</a>
              <a href="/columns">Колонки</a>
            </div>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconTree size="xs" />
                  </div>
                  <a href="/data-tree" className="nav-link collapse">
                    Мессенджеры
                  </a>
                </div>
              }
              iconPosition=""
            >
            </Collapse>

            <div className="parent-links">
              <a href="/messenger/*">Почта</a>
              <a href="/messenger/personal/1">Чат</a>
              <a href="/chat-gpt/*">ЧатGPT</a>
            </div>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconType size="xs" />
                  </div>
                  <a href="/personal-information" className="nav-link collapse">
                    Формы
                  </a>
                </div>
              }
              iconPosition=""
            ></Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconSettings size="xs" />
                  </div>
                  <p className="nav-link collapse">Сервис</p>
                </div>
              }
              isOpen={isOpen["collapse6"]}
              iconPosition="right"
              onClick={() => handleCollapseToggle("collapse6")}
            >
              <a href="/*">Нет данных</a>
              <a href="/*">Запросить доступ</a>
              <a href="/*">Ошибка 404</a>
              <a href="/*">Ошибка 500</a>
            </Collapse>

            <Collapse
              className="nav-list col"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconIpadStroked size="xs" />
                  </div>
                  <a href="#!" className="nav-link collapse">
                    Лейауты
                  </a>
                </div>
              }
              iconPosition=""
            ></Collapse>
            <div className="line"></div>

            <Collapse
              className="nav-list col mb-4"
              size="xs"
              label={
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconAdd size="xs" />
                  </div>
                  <a href="#!" className="nav-link collapse">
                    Заказать модуль
                  </a>
                </div>
              }
              iconPosition=""
            ></Collapse>

            <div className="notification-collapse">
              <Collapse
                className="nav-list col mb-4"
                size="xs"
                label={
                  <div className="flex items-center">
                    <div className="nav-list__icon blue-icon">
                      <IconRing size="xs" />
                    </div>
                    <a href="#!" className="nav-link collapse">
                      Заказать модуль
                    </a>
                  </div>
                }
                iconPosition=""
              ></Collapse>

              <Collapse
                className="nav-list col mb-4"
                size="xs"
                label={
                  <div className="flex items-center">
                    <div className="nav-list__icon blue-icon">
                      <IconBento size="xs" />
                    </div>
                    <a href="#!" className="nav-link collapse">
                      Приложения
                    </a>
                  </div>
                }
                iconPosition=""
              ></Collapse>
            </div>
          </div>
        </div>
        <div className="avatar-box">
          <Avatar name="Вадим Матвеев" url={assets.avatar} />
          <span>Имя Фамилия</span>
        </div>
      </div>
    </>
  )
}

export default AbsaluteNavbar