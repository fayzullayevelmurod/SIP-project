import React, { act, createContext, useState } from "react";

export const ShowNavContext = createContext();

export const ShowNavProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState(false);
  const [navbarHidden, setNavbarHidden] = useState(false);

  const handleToggleNav = () => {
    setActiveNav(!activeNav);
  };

  const toggleHidden = () => {
    setNavbarHidden(!navbarHidden);
  };
  return (
    <ShowNavContext.Provider value={{ activeNav, setActiveNav, navbarHidden, setNavbarHidden, handleToggleNav, toggleHidden }}>
      {children}
    </ShowNavContext.Provider>
  )
}