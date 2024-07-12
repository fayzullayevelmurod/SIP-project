import React from "react";
import { Text } from "@consta/uikit/Text";
import { Button } from "@consta/uikit/Button";
import { Link } from "react-router-dom";

const GptNavbar = ({ onSelectChat, menuItems, selectedChat, activeNav }) => {
  return (
    <div className={`gpt-navbar ${activeNav ? "" : "show"}`}>
      <ul>
        {menuItems?.map((item) => (
          <li key={item.id}>
            <Link
              to={`/chat-gpt/${item.id}`}
              onClick={() => onSelectChat(item)}
              className={`${selectedChat?.id === item.id ? "active" : ""}`}
            >
              <Button view="clear" size="xs" iconLeft={item.icon} />
              <Text as="span">{item.name}</Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GptNavbar;
