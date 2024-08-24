import React, { useState } from "react";
import { Checkbox } from "@consta/uikit/Checkbox";
import { IconArrowRight } from "@consta/icons/IconArrowRight";
import { IconArrowDown } from "@consta/icons/IconArrowDown";

const initialData = [
  {
    id: 1,
    name: "Сейсмика",
    duration: 126,
    specialists: 1,
    cost: 2990,
    total: 29900,
    expandable: true,
    selected: false,
    subRows: [
      {
        id: 8,
        name: "Подготовка территории",
        duration: 50,
        specialists: 2,
        cost: 1990,
        total: 9950,
        selected: false,
      },
      {
        id: 9,
        name: "Сбор данных",
        duration: 40,
        specialists: 3,
        cost: 2390,
        total: 7170,
        selected: false,
      },
    ],
  },
  {
    id: 2,
    name: "Создание микрочипов",
    duration: 126,
    specialists: 1,
    cost: 2990,
    total: 29900,
    expandable: false,
    selected: false,
  },
  {
    id: 3,
    name: "Анализ местности",
    duration: 126,
    specialists: 1,
    cost: 2990,
    total: 29900,
    expandable: false,
    selected: false,
  },
  {
    id: 4,
    name: "Исследование месторождения",
    duration: 126,
    specialists: 1,
    cost: 2990,
    total: 29900,
    expandable: false,
    selected: false,
  },
  {
    id: 5,
    name: "Проведение экспериментов",
    duration: 126,
    specialists: 1,
    cost: 2990,
    total: 29900,
    expandable: false,
    selected: false,
  },
  {
    id: 6,
    name: "Подготовка результата",
    duration: 126,
    specialists: 1,
    cost: 2990,
    total: 29900,
    expandable: false,
    selected: false,
  },
  {
    id: 7,
    name: "Геология",
    duration: 126,
    specialists: 1,
    cost: 2990,
    total: 29900,
    expandable: true,
    selected: false,
    subRows: [
      {
        id: 10,
        name: "Бурение",
        duration: 126,
        specialists: 1,
        cost: 2990,
        total: 29900,
        selected: false,
      },
    ],
  },
];

const DropdownTable = () => {
  const [data, setData] = useState(initialData);
  const [expandedRows, setExpandedRows] = useState([]);

  const handleCheckboxChange = (id, parentId = null) => {
    const newData = data.map((row) => {
      if (row.id === id) {
        if (row.subRows) {
          const newSelected = !row.selected;
          return {
            ...row,
            selected: newSelected,
            subRows: row.subRows.map((subRow) => ({
              ...subRow,
              selected: newSelected,
            })),
          };
        } else {
          return { ...row, selected: !row.selected };
        }
      } else if (row.id === parentId) {
        // Toggle child checkbox and update parent checkbox's state
        const newSubRows = row.subRows.map((subRow) =>
          subRow.id === id ? { ...subRow, selected: !subRow.selected } : subRow
        );
        const allChecked = newSubRows.every((subRow) => subRow.selected);
        const someChecked = newSubRows.some((subRow) => subRow.selected);
        return {
          ...row,
          selected: allChecked,
          subRows: newSubRows,
          intermediate: !allChecked && someChecked,
        };
      } else {
        return row;
      }
    });
    setData(newData);
  };

  const handleRowClick = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter((rowId) => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  const [allSelected, setAllSelected] = useState(false);

  const handleAllCheckboxChange = () => {
    const newSelectedState = !allSelected;
    setAllSelected(newSelectedState);

    const newData = data.map((row) => ({
      ...row,
      selected: newSelectedState,
      subRows: row.subRows?.map((subRow) => ({
        ...subRow,
        selected: newSelectedState,
      })),
    }));
    setData(newData);
  };

  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>
            <Checkbox
              size="m"
              checked={allSelected}
              onChange={handleAllCheckboxChange}
            />
          </th>
          <th>Блок работ</th>
          <th>Срок работ, дни</th>
          <th>Кол-во специалистов</th>
          <th>Стоимость</th>
          <th>Итого</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <React.Fragment key={row.id}>
            <tr>
              <td>
                <Checkbox
                  size="m"
                  checked={row.selected || false}
                  intermediate={
                    row.intermediate ||
                    (row.subRows?.every((subRow) => subRow.selected) &&
                      row.selected)
                  }
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </td>
              <td>
                <div className="parent-row">
                  {row.expandable && (
                    <button onClick={() => handleRowClick(row.id)}>
                      {expandedRows.includes(row.id) ? (
                        <IconArrowDown />
                      ) : (
                        <IconArrowRight />
                      )}
                    </button>
                  )}
                  {row.name}
                </div>
              </td>
              <td>{row.duration}</td>
              <td>{row.specialists}</td>
              <td>{row.cost} руб/ч</td>
              <td>{row.total} руб/ч</td>
            </tr>
            {expandedRows.includes(row.id) &&
              row.subRows &&
              row.subRows.map((subRow) => (
                <tr key={subRow.id}>
                  <td>
                    <Checkbox
                      size="m"
                      checked={subRow.selected || false}
                      onChange={() => handleCheckboxChange(subRow.id, row.id)}
                    />
                  </td>
                  <td style={{ paddingLeft: "60px" }}>{subRow.name}</td>
                  <td>{subRow.duration}</td>
                  <td>{subRow.specialists}</td>
                  <td>{subRow.cost} руб/ч</td>
                  <td>{subRow.total} руб/ч</td>
                </tr>
              ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default DropdownTable;
