import { Link } from "react-router-dom";
import assets from "../assets";
import { Text } from "@consta/uikit/Text";
import { Header } from "../layouts/Header";
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { NavbarLayout } from "../components/Navbar";
import { useContext } from "react";
import { ShowNavContext } from "../context/ShowNavContext";

const Intro = () => {
  const { handleToggleNav, activeNav } = useContext(ShowNavContext);

  const pagesSimple = [
    {
      label: 'Geoapp',
      href: '#!',
    },
    {
      label: 'Лейауты',
      href: '#!',
    }
  ];

  return (
    <>
      <Header searchHeader={true} handleToggleNav={handleToggleNav} hamburgerLogo={true} />

      <div className="flex items-start">
        <NavbarLayout
          hideHamburger={true}
          handleToggleNav={handleToggleNav}
          activeNav={activeNav}
          openNav={activeNav}
        />
        <div className="intro w-full">
          <CustomBreadcrumbs items={pagesSimple} />
          <h2 className="title">Стандарты по структуре страниц</h2>
          <div className="intro-box">
            <Link to="#!" className="intro-card">
              <img src={assets.page01} alt="" />
              <Text size="s" view="secondary" className="page-info">
                0.1 Page
              </Text>
            </Link>
            <div className="intro-cards">
              <Link to="messenger" className="intro-card">
                <img src={assets.page1_1} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  Мессенджер
                </Text>
              </Link>
              <Link to="chat-gpt" className="intro-card">
                <img src={assets.page1_2} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  ЧатGPT
                </Text>
              </Link>
              <Link to="personal-information" className="intro-card">
                <img src={assets.page1_3} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  Формы
                </Text>
              </Link>
              <Link to="directory" className="intro-card">
                <img src={assets.page1_4} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  Справочники
                </Text>
              </Link>
              <Link to="not-found" className="intro-card">
                <img src={assets.page1_6} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  Данные не найдены
                </Text>
              </Link>
              <Link className="intro-card" to='file-manager'>
                <img src={assets.page1_7} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  Менеджер данных
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page1_8} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  3.1 Header + Navbar Default
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page1_9} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  3.2 Header + Navbar Open
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page10} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  3.3 Header + Navbar and Two Panel
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page11} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  4.1 Navbar + Header Default
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page12} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  4.2 Navbar + Header Open
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page13} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  4.3 Navbar + Header and Two Panel
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page14} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  5.1 Navbar + Header Modern
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page15} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  5.2 Navbar + Header Open
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page16} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  5.3 Navbar + Header and Two Panel
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page17} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  6.1 Other - Fixed width
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page18} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  6.2 Other - Overlay content
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page19} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  6.2 Other - Overlay content
                </Text>
              </Link>
              <Link className="intro-card" to='#!'>
                <img src={assets.page1_6} alt="" />
                <Text size="s" view="secondary" className="page-info">
                  7.1 Other - Open Panel or Modal
                </Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro