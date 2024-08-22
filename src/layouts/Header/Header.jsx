import { Button } from "@consta/uikit/Button";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconRing } from "@consta/icons/IconRing";
import { IconKebab } from "@consta/icons/IconKebab";
import { IconBackward } from "@consta/icons/IconBackward";
import { Badge } from "@consta/uikit/Badge";
import { Text } from "@consta/uikit/Text";
import { useContext, useState } from "react";
import { User } from "@consta/uikit/User";
import { Link, useLocation } from "react-router-dom";
import { IconBento } from "@consta/icons/IconBento";
import { IconStorage } from "@consta/icons/IconStorage";
import { IconFolders } from "@consta/icons/IconFolders";
import { IconArrowDown } from "@consta/icons/IconArrowDown";
import CustomBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import assets from "../../assets";
import { ShowNavContext } from "../../context/ShowNavContext";
import { IconHamburger } from "@consta/icons/IconHamburger";
import { IconListNumbered } from "@consta/icons/IconListNumbered";

const items = [
  "Главная",
  "Дашборд",
  "Проекты",
  "Контент",
  "Визуализатор",
  "Процессы",
  "Справочник",
  "Дерево",
  "Формы",
  "Сервис",
  "Лейауты",
];
const pagesSimple = ["Главная", "Раздел", "Страница"];

const Header = (props) => {
  const {
    searchHeader,
    hamburgerLogo,
    dropdownLogo,
    pagesLink,
    searchBox,
    noFolderIcon,
    mediaHamburgerIcon = false,
    numeredIcon = false,
    date = false,
  } = props;
  const { handleToggleNav } = useContext(ShowNavContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation().pathname;

  return (
    <header className="header">
      <div className="header-left">
        {mediaHamburgerIcon && (
          <Button
            className="media-block__hamburger"
            onlyIcon
            size="xs"
            view="clear"
            iconLeft={IconHamburger}
            onClick={handleToggleNav}
          />
        )}
        {hamburgerLogo ? (
          <Button
            view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconBento}
            className="hamburger-menu media-none"
          />
        ) : null}
        {dropdownLogo ? (
          <>
            <button className="logo-box">
              <img
                src={assets.headerLogo}
                alt="header-logo"
                width="10"
                height="11"
              />
              <IconArrowDown view="secondary" size="xs" />
            </button>
            {pagesLink && (
              <>
                <div className="line"></div>
                <CustomBreadcrumbs items={pagesLink} />
              </>
            )}
          </>
        ) : (
          <Link to="/" className="logo-box">
            <img
              src={assets.headerLogo}
              alt="header-logo"
              width="10"
              height="11"
            />
            <p>Geoapp</p>
          </Link>
        )}
        {date && (
          <>
            {pagesLink?.length > 0 && (
              <>
                <div className="line"></div>
                <CustomBreadcrumbs items={pagesLink} />
              </>
            )}
            <Badge size="xs" status="system" label="Черновик" />
            <Text size="xs" view="secondary">
              20.01.2023
            </Text>
          </>
        )}
        {searchBox ? (
          <div className={`search-box`}>
            <div className="search-box">
              <input type="text" placeholder="Поиск" />
              <IconSearchStroked className="search-icon" />
            </div>
          </div>
        ) : null}
        {searchHeader ? null : (
          <>
            <div className="line"></div>
            <div
              className={`${
                location === "/" ? "hidden " : ""
              } header-breadcrumbs`}
            >
              <Button
                label="Назад"
                size="xs"
                view="ghost"
                iconLeft={IconBackward}
              />
              <CustomBreadcrumbs items={pagesSimple} />
              <Badge size="xs" status="system" label="черновик" />
              <Text size="xs" view="secondary">
                20.01.2023
              </Text>
              <Button onlyIcon view="cencle" iconLeft={IconKebab} size="xs" />
              <div className="line mx-8"></div>
              <div className="nav-list">
                <ul>
                  {items.map((item, index) => (
                    <li key={index}>
                      <a
                        className={index === activeIndex ? "active" : ""}
                        href="#!"
                        onClick={() => setActiveIndex(index)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <div className={`header-right`}>
        <div>
          <Button
            view="clear"
            size="xs"
            onlyIcon
            iconLeft={IconBento}
            className="hamburger-menu media-block"
          />
          {numeredIcon ? (
            <Button
              view="clear"
              size="xs"
              onlyIcon
              iconLeft={IconListNumbered}
            />
          ) : null}
          {noFolderIcon ? null : (
            <Button view="clear" size="xs" onlyIcon iconLeft={IconFolders} />
          )}
          <Button view="clear" size="xs" onlyIcon iconLeft={IconRing} />
          <Button view="clear" size="xs" onlyIcon iconLeft={IconStorage} />
        </div>
        <User avatarUrl={assets.avatar} />
      </div>
    </header>
  );
};

export default Header;
