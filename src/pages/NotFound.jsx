import React from 'react'
import { NotFoundData } from '../components'
import CustomBreadcrumbs from '../components/Breadcrumbs/Breadcrumbs'
import { NavbarLayout } from '../components/Navbar'
import { Header } from '../layouts/Header'

const NotFound = ({ activeNav, handleToggleNav }) => {
  const breadcrumbs = [
    {
      label: 'Geoapp',
      href: '/'
    },
    {
      label: 'Нет данных',
    }
  ]
  return (
    <div>
      <Header
        handleToggleNav={handleToggleNav}
        searchHeader={true}
        hamburgerLogo={true}
      />
      <div className="flex">
        <NavbarLayout
          hideHamburger={true}
          activeNav={activeNav}
          openNav={activeNav}
          setActiveNav={!activeNav}
        />
        <div className='not-found__box'>
          <CustomBreadcrumbs items={breadcrumbs} />
          <NotFoundData />
        </div>
      </div>
    </div>
  )
}

export default NotFound