import React, { useContext, useEffect } from 'react'
import { Header } from '../../layouts/Header'
import { ShowNavContext } from '../../context/ShowNavContext';
import { NavbarLayout } from '../../components/Navbar';
import './visualization.scss';
import { ActionBar } from '../../components';
import assets from '../../assets';
const pagesLink = [
  {
    label: 'Geoapp',
    href: '#!',
  },
  {
    label: 'Визуализация',
    href: '#!',
  },
  {
    label: '3D сцена',
    href: '#!',
  },
]

const Visualization3D = () => {
  const { handleToggleNav, activeNav, setNavbarHidden, toggleHidden } = useContext(ShowNavContext);

  useEffect(() => {
    toggleHidden()
  }, [])

  return (
    <div className="visualization-page">
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        searchBox={false}
        hamburgerLogo={true}
        dropdownLogo={true}
        pagesLink={pagesLink}
      />
      <div className='flex w-full'>
        <NavbarLayout
          setNavbarHidden={true}
          hideHamburger={true}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <div className='w-full h-scroll'>
          <ActionBar />
          <div className='chart-img image-box'>
            <img src={assets.chart3d} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visualization3D