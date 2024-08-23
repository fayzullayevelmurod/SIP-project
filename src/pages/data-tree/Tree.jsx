import React, { useState } from "react";
import { cnRcTree } from "@consta/rc-tree-adapter/RcTree";
import RCTree, { TreeNode } from "rc-tree";
import { Button } from "@consta/uikit/Button";
import { Text } from "@consta/uikit/Text";
import { cn } from "@bem-react/classname";
import { IconMeatball } from "@consta/icons/IconMeatball";

const data = [
  {
    key: "1",
    title: "ГПН-Ангара",
    children: [],
  },
  {
    key: "2",
    title: "ГПН-Восток",
    children: [
      {
        key: "2-1",
        title: "Арчинское",
        children: [],
      },
      {
        key: "2-2",
        title: "Крапивинское",
        children: [],
      },
      {
        key: "2-3",
        title: "Кулгинское",
        children: [],
      },
      {
        key: "2-4",
        title: "Луганецкое",
        children: [],
      },
      {
        key: "2-5",
        title: "Смоляное",
        children: [],
      },
      {
        key: "2-6",
        title: "Урманское",
        children: [
          {
            key: "2-6-1",
            title: "Исследования",
            children: [],
          },
          {
            key: "2-6-2",
            title: "Пласты",
            children: [],
          },
          {
            key: "2-6-3",
            title: "Подсчет запасов",
            children: [],
          },
          {
            key: "2-6-4",
            title: "Скважины",
            children: [
              {
                key: "2-6-4-1",
                title: "w101",
                children: [],
              },
              {
                key: "2-6-4-2",
                title: "w102",
                children: [],
              },
              {
                key: "2-6-4-3",
                title: "w103",
                children: [],
              },
            ],
          },
          {
            key: "2-6-5",
            title: "Статистика",
            children: [],
          },
          {
            key: "2-6-6",
            title: "Отчеты",
            children: [],
          },
          {
            key: "2-6-7",
            title: "Съемки",
            children: [],
          },
        ],
      },
    ],
  },
  {
    key: "3",
    title: "ГПН-Месояха",
    children: [],
  },
  {
    key: "4",
    title: "ГПН-ННГ",
    children: [],
  },
  {
    key: "5",
    title: "ГПН-Оренбург",
    children: [],
  },
  {
    key: "6",
    title: "ГПН-Хантос",
    children: [],
  },
];

const changeVisisble = (key, nodes) => {
  return nodes.map((node) => {
    if (node.key === key) {
      node.visible = !(typeof node.visible === "undefined"
        ? true
        : node.visible);
    } else {
      if (node.children) {
        node.children = changeVisisble(key, node.children);
      }
    }
    return node;
  });
};

const cnRcTreeCustomControls = cn("RcTreeCustomControls");

const CustomLabel = (props) => {
  const { title, treeKey, handleClick, visible = true } = props;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={cnRcTreeCustomControls("Content")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Text
        className={cnRcTreeCustomControls("Title")}
        size="xs"
        view="primary"
        lineHeight="m"
      >
        {title}
      </Text>
      {hovered && (
        <Button onlyIcon iconLeft={IconMeatball} size="xs" view="clear" />
      )}
    </div>
  );
};

const customNode = (params) => {
  const {
    title,
    key,
    visible = true,
    children,
    disableCheckbox,
    handleClick,
  } = params;
  return (
    <TreeNode
      key={key}
      title={
        <CustomLabel
          treeKey={key}
          title={title}
          handleClick={handleClick}
          visible={visible}
        />
      }
      disableCheckbox={disableCheckbox || !visible}
    >
      {children &&
        visible &&
        children.map((node) => customNode({ handleClick, ...node }))}
    </TreeNode>
  );
};

export const TreeComponent = () => {
  const prefix = cnRcTree({ size: "m" }, ["RcTreeCustomControls"]);
  const [nodes, setNodes] = useState(data);

  const handleClick = (key) => {
    setNodes(changeVisisble(key, nodes));
  };

  return (
    <RCTree prefixCls={prefix} showLine checkable defaultExpandAll>
      {nodes.map((node) => customNode({ handleClick, ...node }))}
    </RCTree>
  );
};
