import React from "react";
import { IconTable2 } from "@consta/icons/IconTable2";
import { IconColumns } from "@consta/icons/IconColumns";

const CustomChoiceGroup = ({ selected, onChange }) => {
  const items = [
    { icon: <IconTable2 size="xs" />, value: "table" },
    { icon: <IconColumns size="xs" />, value: "grid" },
  ];

  return (
    <div className="custom-choice-group">
      {items.map((item, index) => (
        <div
          key={index}
          className={`custom-choice-group-item ${
            selected === item.value ? "selected" : ""
          }`}
          onClick={() => onChange(item.value)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default CustomChoiceGroup;
