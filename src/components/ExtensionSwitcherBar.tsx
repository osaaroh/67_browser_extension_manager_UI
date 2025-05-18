import React from 'react'
import './ExtensionSwitcherBar.css'
function ExtensionSwitcherBar() {
  return (
    <div className="extension-switcher-bar">
      <div className="extension-switcher-bar__title">
        <h1>Extensions List</h1>
      </div>
      <div className="extension-switcher-bar__toggles">
        
        <div className="extension-switcher-bar__radios">
          <input type="radio" id="all" name="extension-status" defaultChecked />
          <label htmlFor="all">All</label>
          <input type="radio" id="active" name="extension-status" />
          <label htmlFor="active">Active</label>
          <input type="radio" id="inactive" name="extension-status" />
          <label htmlFor="inactive">Inactive</label>
        </div>
      </div>
    </div>
  )
}

export default ExtensionSwitcherBar