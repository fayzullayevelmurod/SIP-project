import { AnimateIconSwitcherProvider } from "@consta/icons/AnimateIconSwitcherProvider";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { withAnimateSwitcherHOC } from "@consta/icons/withAnimateSwitcherHOC";
import { Checkbox } from "@consta/uikit/Checkbox";
import { Button } from "@consta/uikit/Button";
import { useMutableRef } from "@consta/uikit/useMutableRef";
import React, { useCallback, useMemo, useState } from "react";

import { DataCell } from "@consta/table/DataCell";
import { Table } from "@consta/table/Table";

const range = (count) => {
  return Array.from({ length: count }, (_, i) => i);
};

const IconArrow = withAnimateSwitcherHOC({
  startIcon: IconArrowRight,
  startDirection: 0,
  endDirection: 90,
});

const getDataCell = (idx) => {
  const parrent = Math.floor(idx / 10) * 10;

  return {
    idx,
    col1: `Данные 1 - ${idx}`,
    col2: `Данные 2 - ${idx}`,
    col3: `Данные 3 - ${idx}`,
    parrent: parrent === idx ? undefined : parrent,
    level: parrent === idx ? 0 : 1,
    checked: false,
  };
};

const data = range(100).map(getDataCell);

const DataCellCol1 = (props) => {
  const {
    row: { col1, parrent, idx, level },
    opened,
    toggle,
  } = props;

  return (
    <AnimateIconSwitcherProvider active={opened}>
      <DataCell
        level={level}
        control={
          typeof parrent === "undefined" ? (
            <Button
              size="s"
              view="clear"
              iconLeft={IconArrow}
              onlyIcon
              onClick={() => toggle(idx)}
            />
          ) : undefined // Agar `parrent` defined bo'lmagan bo'lsa, faqat ikonkani ko'rsatish
        }
      >
        {col1}
      </DataCell>
    </AnimateIconSwitcherProvider>
  );
};

export const DropdownTable = () => {
  const [openedList, setOpenedList] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});

  const openedListRef = useMutableRef(openedList);

  const rows = useMemo(() => {
    return data.filter(
      (dataItem) =>
        dataItem.parrent === undefined ||
        openedList.findIndex(
          (openedListItem) => openedListItem === dataItem.parrent
        ) !== -1
    );
  }, [openedList]);

  const toggle = useCallback((idx) => {
    setOpenedList((state) => {
      const open = state.findIndex((value) => value === idx) !== -1;
      if (open) {
        return state.filter((value) => value !== idx);
      }
      return [...state, idx];
    });
  }, []);

  const onCheck = useCallback((idx) => {
    setCheckedItems((state) => ({
      ...state,
      [idx]: !state[idx],
    }));
  }, []);

  const renderCellCol1 = useCallback(
    (props) => (
      <DataCellCol1
        {...props}
        toggle={toggle}
        opened={
          openedListRef.current.findIndex((item) => item === props.row.idx) !==
          -1
        }
      />
    ),
    []
  );

  const renderCheckboxCell = useCallback(
    (props) => (
      <Checkbox
        checked={!!checkedItems[props.row.idx]}
        onChange={() => onCheck(props.row.idx)}
      />
    ),
    [checkedItems]
  );

  // const columns = useMemo(
  //   () => [
  //     {
  //       title: "",
  //       accessor: "checkbox",
  //       renderCell: renderCheckboxCell,
  //       width: 50, // Checkbox ustuni kengligi
  //     },
  //     {
  //       title: "Колонка - 1",
  //       accessor: "col1",
  //       renderCell: renderCellCol1,
  //     },
  //     {
  //       title: "Колонка - 2",
  //       accessor: "col2",
  //     },
  //     {
  //       title: "Колонка - 3",
  //       accessor: "col3",
  //     },
  //   ],
  //   [renderCellCol1, renderCheckboxCell]
  // );
  // Barcha elementlarni belgilash uchun yangi state
  const [selectAll, setSelectAll] = useState(false);

  // handleSelectAll funksiyasi
  const handleSelectAll = useCallback(() => {
    setSelectAll((prev) => {
      const newSelectAll = !prev;
      if (newSelectAll) {
        // Barcha checkboxlarni belgilash
        setOpenedList(data.map((item) => item.idx));
      } else {
        // Barcha checkboxlarni bekor qilish
        setOpenedList([]);
      }
      return newSelectAll;
    });
  }, [data]);
  const columns = useMemo(
    () => [
      {
        title: <Checkbox checked={selectAll} onChange={handleSelectAll} />,
        accessor: "checkbox",
        renderCell: (props) => (
          <Checkbox
            checked={openedListRef.current.includes(props.row.idx)}
            onChange={() => toggle(props.row.idx)}
          />
        ),
      },
      {
        title: "Колонка - 1",
        accessor: "col1",
        renderCell: renderCellCol1, // Dropdown uchun cell
      },
      {
        title: "Колонка - 2",
        accessor: "col2",
      },
      {
        title: "Колонка - 3",
        accessor: "col3",
      },
    ],
    [selectAll, handleSelectAll, toggle, renderCellCol1]
  );

  return (
    <Table
      style={{ maxHeight: 400 }}
      rows={rows}
      columns={columns}
      stickyHeader
      virtualScroll
    />
  );
};

export default DropdownTable;
