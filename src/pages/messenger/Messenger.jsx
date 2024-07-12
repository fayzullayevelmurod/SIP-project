import { useContext, useEffect, useState } from "react";
import { MessengerNavbar, NavbarLayout } from "../../components/Navbar";
import { Header } from "../../layouts/Header";
import { PersonalChat, Sidebar } from "../../components";
import Mail from "../../components/Messenger/CorporateMail";
import { ShowNavContext } from "../../context/ShowNavContext";
import { Route, Routes, useParams } from "react-router-dom";

const Messenger = () => {
  const [pageLinks, setPageLinks] = useState([
    {
      label: "Мессенджер",
      href: "/messenger",
    },
    {
      label: "Почта",
      href: "/messenger",
    },
  ]);
  const { handleToggleNav, activeNav, toggleHidden } =
    useContext(ShowNavContext);

  useEffect(() => {
    toggleHidden();
  }, []);

  const handleTypeChange = (type) => {
    setPageLinks((prevLinks) => [
      prevLinks[0],
      {
        label: type === "personal" ? "Чат" : "Почта",
        href: "/messenger",
      },
    ]);
  };

  return (
    <div className="messenger-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pageLinks}
        noFolderIcon={true}
      />
      <div className="flex">
        <MessengerNavbar
          setNavbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <Sidebar onTypeChange={handleTypeChange} />
        <Routes>
          <Route path="/personal/:id" element={<PersonalChat />} />
          <Route path="/corporate/:id" element={<Mail />} />
        </Routes>
      </div>
    </div>
  );
};

export default Messenger;
