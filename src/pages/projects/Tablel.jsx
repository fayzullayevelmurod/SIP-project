import { Checkbox } from "@consta/uikit/Checkbox";
import { Table } from "@consta/uikit/Table";
import React from "react";

const rowsWithColSpan = [
  {
    id: "row1",
    name: "Сейсмика",
    street: undefined,
    age: undefined,
    number: undefined,
    gender: undefined,
    rows: [
      {
        id: "row1.1",
        name: "Иван",
        street: "1.0",
        age: 126,
        number: 2033,
        gender: "муж.",
      },
      {
        id: "row1.2",
        name: "Анна",
        age: 126,
        street: "1.0",
        number: 2035,
        gender: "жен.",
      },
    ],
  },

  {
    rows: [
      {
        id: "row1.1",
        name: "Иван",
        street: "1.0",
        age: 126,
        number: 2033,
        gender: "муж.",
      },
      {
        id: "row1.2",
        name: "Анна",
        age: 126,
        street: "1.0",
        number: 2035,
        gender: "жен.",
      },
    ],
  },
];

const columns = [
  {
    title: "checked",
    accessor: "name",
    align: "left",
    width: 150,
  },
  {
    title: "Блок работ",
    accessor: "name",
    align: "left",
    width: 150,
  },
  {
    title: "Срок работ, дни",
    accessor: "age",
    align: "right",
    renderCell: (row) => (row.rows ? "126" : row.age),
  },
  {
    title: "Кол-во специалистов",
    accessor: "street",
    align: "right",
    colSpan: (row) => (row.rows ? 3 : 1),
    renderCell: (row) => (row.rows ? "1.0" : row.street),
  },
  {
    title: "Квартира",
    accessor: "number",
    align: "center",
  },
  {
    title: "Стоимость",
    accessor: "gender",
    align: "left",
  },
  {
    title: "Итого",
  },
];

const DropdownTable = () => (
  <Table
    borderBetweenColumns
    borderBetweenRows
    columns={columns}
    rows={rowsWithColSpan}
  />
);

export default DropdownTable;
