import React, { createContext, useState, useContext } from "react";

// Create context
const SelectedChatContext = createContext();

// Provider component
export const SelectedChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <SelectedChatContext.Provider value={{ selectedChat, setSelectedChat }}>
      {children}
    </SelectedChatContext.Provider>
  );
};

// Custom hook to use the SelectedChat context
export const useSelectedChat = () => {
  const context = useContext(SelectedChatContext);
  if (!context) {
    throw new Error(
      "useSelectedChat must be used within a SelectedChatProvider"
    );
  }
  return context;
};
