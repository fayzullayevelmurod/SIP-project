import React, { useContext, useState } from "react";
import { ShowNavContext } from "../../context/ShowNavContext";
import { NavbarLayout } from "../../components/Navbar";
import { Header } from "../../layouts/Header";
import { IconBackward } from "@consta/icons/IconBackward";
import { Button } from "@consta/uikit/Button";
import { Text } from "@consta/uikit/Text";
import { ChoiceGroup } from "@consta/uikit/ChoiceGroup";
import "./basket.scss";
import { IconSearchStroked } from "@consta/icons/IconSearchStroked";
import { IconSortDownCenter } from "@consta/icons/IconSortDownCenter";
import { Card } from "@consta/uikit/Card";
import { IconUpload } from "@consta/icons/IconUpload";
import { Badge } from "@consta/uikit/Badge";
import { IconAllDone } from "@consta/icons/IconAllDone";
import { IconLoading } from "@consta/icons/IconLoading";
import { IconClose } from "@consta/icons/IconClose";
import { IconPause } from "@consta/icons/IconPause";
import { IconPlay } from "@consta/icons/IconPlay";
import { IconRevert } from "@consta/icons/IconRevert";

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
const choiceGroupItems = ["Все", "Загрузки", "Выгрузки"];

const ExportBasketUnloading = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);
  const [choiceGroupValue, setChoiceGroupValue] = useState(choiceGroupItems[0]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="basket-page export-basket__uploading-page">
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
            <Text className="title">Загрузки и выгрузки</Text>
            <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between w-full top-box">
              <ChoiceGroup
                value={choiceGroupValue}
                onChange={setChoiceGroupValue}
                items={choiceGroupItems}
                getItemLabel={(item) => item}
                multiple={false}
                name="ChoiceGroupExample"
                size="xs"
                view="primary"
              />
              <div>
                <Button size="xs" view="clear" iconLeft={IconSearchStroked} />
                <Button size="xs" view="clear" iconLeft={IconSortDownCenter} />
              </div>
            </div>
            <div className="MixFlex MixFlex_direction_column MixFlex_gap_m">
              <Card>
                <Text as="h3" className="card-title">
                  Сегодня
                </Text>
                <div className="list">
                  <div className="list-item MixFlex MixFlex_align_start">
                    <IconUpload className="list-item__logo" size="xs" />
                    <div className="w-full">
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between top-content">
                        <Text size="xs" view="primary" weight="medium">
                          Загрузка от 26.06.2024 в 12:00, 6 обьектов
                        </Text>
                        <Badge
                          iconLeft={IconAllDone}
                          status="success"
                          view="stroked"
                          label="Завершен"
                          size="xs"
                        />
                      </div>
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between bottom-content">
                        <Text size="xs" view="secondary">
                          ГПН-Хантос / Зимнее
                        </Text>
                        <Text size="xs" view="secondary">
                          Завершен 26.06.24 в 12:34
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="list-item MixFlex MixFlex_align_start">
                    <IconUpload className="list-item__logo" size="xs" />
                    <div className="w-full">
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between top-content">
                        <Text size="xs" view="primary" weight="medium">
                          Загрузка от 26.06.2024 в 12:00, 6 обьектов
                        </Text>
                        <Badge
                          iconLeft={IconLoading}
                          status="normal"
                          view="stroked"
                          label="В работе"
                          size="xs"
                        />
                      </div>
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between bottom-content">
                        <Text size="xs" view="secondary">
                          ГПН-Хантос / Зимнее
                        </Text>
                        <div className="MixFlex MixFlex_gap_2xs">
                          <Button size="xs" view="ghost" iconLeft={IconPause} />
                          <Button size="xs" view="ghost" iconLeft={IconClose} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-item MixFlex MixFlex_align_start">
                    <IconUpload className="list-item__logo" size="xs" />
                    <div className="w-full">
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between top-content">
                        <Text size="xs" view="primary" weight="medium">
                          Загрузка от 26.06.2024 в 12:00, 6 обьектов
                        </Text>
                        <Badge
                          status="system"
                          view="stroked"
                          label="отложен"
                          size="xs"
                        />
                      </div>
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between bottom-content">
                        <Text size="xs" view="secondary">
                          ГПН-Хантос / Зимнее
                        </Text>
                        <div className="MixFlex MixFlex_gap_2xs">
                          <Button size="xs" view="ghost" iconLeft={IconPlay} />
                          <Button size="xs" view="ghost" iconLeft={IconClose} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-item MixFlex MixFlex_align_start">
                    <IconUpload className="list-item__logo" size="xs" />
                    <div className="w-full">
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between top-content">
                        <Text size="xs" view="primary" weight="medium">
                          Загрузка от 26.06.2024 в 12:00, 6 обьектов
                        </Text>
                        <Badge
                          status="error"
                          view="stroked"
                          label="ошибка"
                          size="xs"
                        />
                      </div>
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between bottom-content">
                        <Text size="xs" view="secondary">
                          ГПН-Хантос / Зимнее
                        </Text>
                        <div className="MixFlex MixFlex_gap_2xs">
                          <Button
                            size="xs"
                            view="ghost"
                            iconLeft={IconRevert}
                          />
                          <Button size="xs" view="ghost" iconLeft={IconClose} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <Text as="h3" className="card-title">
                  Ранее
                </Text>
                <div className="list">
                  <div className="list-item MixFlex MixFlex_align_start">
                    <IconUpload className="list-item__logo" size="xs" />
                    <div className="w-full">
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between top-content">
                        <Text size="xs" view="primary" weight="medium">
                          Загрузка от 26.06.2024 в 12:00, 6 обьектов
                        </Text>
                        <Badge
                          iconLeft={IconAllDone}
                          status="success"
                          view="stroked"
                          label="Завершен"
                          size="xs"
                        />
                      </div>
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between bottom-content">
                        <Text size="xs" view="secondary">
                          ГПН-Хантос / Зимнее
                        </Text>
                        <Text size="xs" view="secondary">
                          Завершен 26.06.24 в 12:34
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="list-item MixFlex MixFlex_align_start">
                    <IconUpload className="list-item__logo" size="xs" />
                    <div className="w-full">
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between top-content">
                        <Text size="xs" view="primary" weight="medium">
                          Загрузка от 26.06.2024 в 12:00, 6 обьектов
                        </Text>
                        <Badge
                          iconLeft={IconAllDone}
                          status="success"
                          view="stroked"
                          label="Завершен"
                          size="xs"
                        />
                      </div>
                      <div className="MixFlex MixFlex_align_center MixFlex_justify_space-between bottom-content">
                        <Text size="xs" view="secondary">
                          ГПН-Хантос / Зимнее
                        </Text>
                        <Text size="xs" view="secondary">
                          Завершен 26.06.24 в 12:34
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportBasketUnloading;
