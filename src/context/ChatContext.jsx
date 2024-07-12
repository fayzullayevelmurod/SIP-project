import React, { createContext, useState, useContext } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([
    {
      date: "Сегодня",
      items: [
        { id: 1, type: "personal", avatarImg: `${assets.avatar2}`, name: "Игорь Петрович", message: "Привет! Завтра планируется конференция", msgTime: "Июнь 28 2024 в 12:30", seen: true },
        { id: 2, type: "corporate", name: "Корпоративный клуб", message: "Технологический лидер нефтегазового рынка России", msgTime: "Июнь 28 2024 в 12:30", seen: true },
        { id: 3, type: "personal", avatarImg: `${assets.avatar}`, name: "Андрей Фирт", message: "Привет! Завтра планируется конференция", msgTime: "Июнь 28 2024 в 12:30", seen: true },
        { id: 4, type: "personal", avatarImg: `${assets.avatar2}`, name: "Михаил Давыдов", message: "Привет! Завтра планируется конференция", msgTime: "Июнь 28 2024 в 12:30", seen: true }
      ]
    }
  ]);

  return (
    <ChatContext.Provider value={{ chats, setChats }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = (id, type) => {
  const { chats } = useContext(ChatContext);
  return chats
    .flatMap(section => section.items)
    .find(item => item.id === parseInt(id) && item.type === type);
};
