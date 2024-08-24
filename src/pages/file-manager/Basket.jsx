import React, { useContext, useState } from "react";
import "./basket.scss";
import { ShowNavContext } from "../../context/ShowNavContext";
import { Header } from "../../layouts/Header";
import { NavbarLayout } from "../../components/Navbar";
import { Badge } from "@consta/uikit/Badge";
import { Button } from "@consta/uikit/Button";
import { IconBackward } from "@consta/icons/IconBackward";
import { Text } from "@consta/uikit/Text";
import { Card } from "@consta/uikit/Card";
import { Checkbox } from "@consta/uikit/Checkbox";
import { IconClose } from "@consta/icons/IconClose";
import { IconWellBlue } from "@consta/icons/IconWellBlue";

const pagesLink = [
  {
    label: "Мой проект",
    href: "/#!",
  },
  {
    label: "Менеджер данных",
    href: "/#!",
  },
  {
    label: "Экспорт",
    href: "/#!",
  },
];

const data = [
  {
    logo: <IconWellBlue />,
    title: "206_2",
    subtitle: "ГПН-Хантос / Зимнее",
  },
  {
    logo: <IconWellBlue />,
    title: "206_2",
    subtitle: "ГПН-Хантос / Зимнее",
  },
  {
    logo: <IconWellBlue />,
    title: "206_2",
    subtitle: "ГПН-Хантос / Зимнее",
  },
  {
    logo: <IconWellBlue />,
    title: "206_2",
    subtitle: "ГПН-Хантос / Зимнее",
  },
  {
    logo: <IconWellBlue />,
    title: "206_2",
    subtitle: "ГПН-Хантос / Зимнее",
  },
];

const Basket = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="basket-page home">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        date={true}
        pagesLink={pagesLink}
      />
      <div className="flex">
        <NavbarLayout
          navbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={activeNav}
        />
        <div className="scroll-content">
          <div className="basket-content">
            <Button
              size="xs"
              view="ghost"
              label="Менеджер данных"
              iconLeft={IconBackward}
            />
            <Text className="title">
              Корзина <span>12</span>
            </Text>

            <div className="basket-cards">
              <div className="left-card">
                <Card>
                  <div className="MixFlex clear-header MixFlex_justify_space-between">
                    <Checkbox
                      label="Выбрать"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <Button
                      size="xs"
                      view="clear"
                      label="Очистить корзину"
                      iconLeft={IconClose}
                    />
                  </div>
                  <ul>
                    {data?.map((item, index) => (
                      <li key={index}>
                        <div className="logo">{item.logo}</div>
                        <div className="w-full">
                          <div className="top">
                            <Text size="xs" view="primary">
                              {item.title}
                            </Text>
                          </div>
                          <div className="bottom MixFlex w-full MixFlex_align_center MixFlex_justify_space-between">
                            <Text size="xs" view="secondary">
                              {item.subtitle}
                            </Text>
                            <Button
                              iconLeft={IconClose}
                              size="xs"
                              view="clear"
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
              <div className="right-card">
                <Card>
                  <Text as="h3" view="primary" className="card-title">
                    Итого
                  </Text>
                  <ul>
                    <li>
                      <Text size="xs" view="secondary">
                        Размер данных
                      </Text>
                      <Text size="xs" view="primary">
                        13.02 Мб
                      </Text>
                    </li>
                    <li>
                      <Text size="xs" view="secondary">
                        Размер данных
                      </Text>
                      <Text size="xs" view="primary">
                        13.02 Мб
                      </Text>
                    </li>
                  </ul>
                  <Button size="m" view="primary" label="Перейти к экспорту" />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
