import React from 'react'
import { Button } from '@consta/uikit/Button'
import { IconSettings } from '@consta/icons/IconSettings'
import assets from '../assets'

const ActionBar = () => {
  return (
    <div className='action-bar'>
      <div className='img-box'>
        <img src={assets.cursor} alt="" />
      </div>
      <div className='img-box'>
        <img src={assets.autoFit} alt="" />
      </div>
      <div className='img-box'>
        <img src={assets.routing} alt="" />
      </div>
      <div className='img-box'>
        <img src={assets.settings} alt="" />
      </div>
      <div className="line"></div>
      <div className='img-box'>
        <img src={assets.apps} alt="" />
      </div>
      <div className='img-box'>
        <img src={assets.calculator} alt="" />
      </div>
      <div className='img-box'>
        <img src={assets.formula} alt="" />
      </div>
      <div className="line"></div>
      <div className='img-box'>
        <img src={assets.dualScreen} alt="" />
      </div>
      <div className='img-box'>
        <img src={assets.more} alt="" />
      </div>
    </div>
  )
}

export default ActionBar