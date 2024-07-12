import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../layouts/Header";
import { GptNavbar } from "../../components/Navbar";
import "./messenger.scss";
import GptMail from "../../components/Messenger/GptMail";
import { ShowNavContext } from "../../context/ShowNavContext";
import { gptData } from "../../helpers/GPTData";
import { Route, Routes } from "react-router-dom";

const pagesLink = [
  {
    label: "ЧатGPT",
    href: "/",
  },
];

const ChatGPT = () => {
  const [onSelectChat, setSelectedChat] = useState(null);
  const {
    handleToggleNav,
    activeNav = true,
    showNavbar,
  } = useContext(ShowNavContext);

  useEffect(() => {
    setSelectedChat(gptData[1]);
  }, []);

  return (
    <div className="chat-gpt__page">
      <Header
        noFolderIcon={true}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className="flex">
        <GptNavbar
          menuItems={gptData}
          onSelectChat={setSelectedChat}
          selectedChat={onSelectChat}
          activeNav={activeNav}
          showNavbar={showNavbar}
        />
        <Routes>
          <Route path="/:id" element={<GptMail />} />
        </Routes>
      </div>
    </div>
  );
};

export default ChatGPT;
