import { Button } from "@consta/uikit/Button";
import { IconHamburger } from "@consta/icons/IconHamburger";
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
import { useContext, useEffect, useState } from "react";
import assets from "../../assets";
import { ShowNavContext } from "../../context/ShowNavContext";
import { IconThumbDown } from "@consta/icons/IconThumbDown";
import { IconTrash } from "@consta/icons/IconTrash";
import { IconFolderClosed } from "@consta/icons/IconFolderClosed";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconBookmarkStroked } from "@consta/icons/IconBookmarkStroked";

const MessengerNavbar = (props) => {
  const { openNav, hideHamburger, showNav } = props;

  const [isActive, setIsActive] = useState(openNav);
  const [isOpen, setOpen] = useState({});

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

  const {
    activeNav,
    navbarHidden = false,
    handleToggleNav,
  } = useContext(ShowNavContext);

  return (
    <div
      className={`navbar messenger-navbar ${isActive ? "active" : ""} ${
        showNav ? "active" : ""
      }  ${activeNav ? "active" : ""} ${navbarHidden ? "navbar-hidden" : ""}`}
    >
      <div className="navbar-top">
        {hideHamburger ? null : (
          <>
            <Button
              view="clear"
              size="xs"
              onlyIcon
              iconLeft={IconHamburger}
              className="hamburger-menu"
              onClick={handleChangeActive}
            />
            <div className="nav-logo flex">
              <div className="logo">
                <img src={assets.logo} alt="logo" width="10" height="11" />
              </div>
              <h4>Приложение</h4>
            </div>
          </>
        )}
        <div className="left-nav__boxes">
          <Collapse
            className="col active"
            size="xs"
            label={
              <div className="nav-list between">
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconHome size="xs" />
                  </div>
                  <a href="#!" className="nav-link collapse">
                    Входящие
                  </a>
                </div>
                <span className="msg-count">8</span>
              </div>
            }
            iconPosition=""
          ></Collapse>

          <Collapse
            className="col"
            size="xs"
            label={
              <div className="nav-list between">
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconFolderOpen size="xs" />
                  </div>
                  <a href="#!" className="nav-link collapse">
                    Черновик
                  </a>
                </div>
                <span className="msg-count">2</span>
              </div>
            }
            iconPosition=""
          ></Collapse>

          <Collapse
            className="col"
            size="xs"
            label={
              <div className="nav-list between">
                <div className="flex items-center">
                  <div className="nav-list__icon">
                    <IconThumbDown size="xs" />
                  </div>
                  <a href="#!" className="nav-link collapse">
                    Спам
                  </a>
                </div>
                <span className="msg-count">2</span>
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
                  <IconCalculator size="xs" />
                </div>
                <p className="nav-link collapse">Процессы</p>
              </div>
            }
            isOpen={isOpen["collapse5"]}
            iconPosition="right"
            onClick={() => handleCollapseToggle("collapse5")}
          >
            <a href="#!">Моделирование</a>
            <a href="#!">Расчетный</a>
          </Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconTrash size="xs" />
                </div>
                <a href="#!" className="nav-link collapse">
                  Удаленные
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
                  <IconFolderClosed size="xs" />
                </div>
                <p className="nav-link collapse">Мои папки</p>
              </div>
            }
            isOpen={isOpen["collapse6"]}
            iconPosition="right"
            onClick={() => handleCollapseToggle("collapse6")}
          >
            <a href="#!">Работа</a>
            <a href="#!">Хобби</a>
            <a href="#!">Футбол</a>
          </Collapse>

          <Collapse
            className="nav-list col"
            size="xs"
            label={
              <div className="flex items-center">
                <div className="nav-list__icon">
                  <IconBookmarkStroked size="xs" />
                </div>
                <a href="#!" className="nav-link collapse">
                  Избранные
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
                  <IconSearchStroked size="xs" />
                </div>
                <a href="#!" className="nav-link collapse">
                  Поиск
                </a>
              </div>
            }
            iconPosition=""
          ></Collapse>
        </div>
      </div>

      <div className="navbar-bottom">
        <Button
          view="clear"
          size="xs"
          onlyIcon
          iconLeft={IconArrowPrevious}
          className="hamburger-menu arrow-prew"
          onClick={clicker}
        />
      </div>
    </div>
  );
};

export default MessengerNavbar;
