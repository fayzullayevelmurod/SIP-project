import React, { useContext, useEffect } from 'react'
import { Header } from '../../layouts/Header'
import { ShowNavContext } from '../../context/ShowNavContext';
import { NavbarLayout } from '../../components/Navbar';
import './visualization.scss';
import { ActionBar } from '../../components';
import assets from '../../assets';
import AbsaluteNavbar from '../../components/Navbar/AbsaluteNavbar';

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
    label: '2D сцена',
    href: '#!',
  },
]

const Visualization2D = () => {
  const { handleToggleNav, activeNav, toggleHidden, handleAbsoluteNav, absoluteNav } = useContext(ShowNavContext);

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
        absoluteNav={absoluteNav}
        handleAbsoluteNav={handleAbsoluteNav}
      />
      <div className='flex w-full'>
        <div className='w-full h-scroll'>
          <ActionBar />
          <div className='vizualization-img image-box'>
            <img src={assets.vizualizationImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visualization2D