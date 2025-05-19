import React from 'react'
import './ExtensionSwitcherBar.css'
import { useExtensionContext } from '../contextAPI/context.tsx'
function ExtensionSwitcherBar() {
  const { showExtensionActive, showExtensionInactive, showAllExtensions } = useExtensionContext()
  const handleRadioChange = (event: any) => {
    const value = event.target.value
    if (value === 'active') {
      showExtensionActive()
    } else if (value === 'inactive') {
      showExtensionInactive()
    } else {
      showAllExtensions()
    }
  }
  return (
    <div className="extension-switcher-bar">
      <div className="extension-switcher-bar__title">
        <h1>Extensions List</h1>
      </div>
      <div className="extension-switcher-bar__toggles">
        
        <div className="extension-switcher-bar__radios">
          <input type="radio" id="all" name="extension-status" onChange={()=>{showAllExtensions()}} defaultChecked />
          <label htmlFor="all">All</label>
          <input type="radio" id="active" name="extension-status" onChange={()=>{showExtensionActive()}}/>
          <label htmlFor="active">Active</label>
          <input type="radio" id="inactive" name="extension-status" onChange={()=>{showExtensionInactive()}}/>
          <label htmlFor="inactive">Inactive</label>
        </div>
      </div>
    </div>
  )
}

export default ExtensionSwitcherBar