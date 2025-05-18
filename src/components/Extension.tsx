import React from 'react'
import './Extension.css'
import IcoDevLens from '../assets/images/logo-devlens.svg'
function Extension() {
  return (
    <div className="extension-card">
      <div className="extension-card__header">
        <div className="extension-card__header--image">
          <img src={IcoDevLens} alt="" />
        </div>

        <div className="extension-card__content">
          <h4 className='extension-card__content--title'>DevLens</h4>
          <p className='extension-card__content--description'>Quickly inspect page layouts and visualize element boundaries..</p>
        </div>
      </div>
      
      <div className="extension-card__footer">
        <button className="extension-card__remove">Remove</button>
        <label className="extension-card__toggle">
          <input type="checkbox" className="extension-card__toggle-input" />
          <span className="extension-card__toggle-slider"></span>
        </label>
      </div>
    </div>
  )
}

export default Extension