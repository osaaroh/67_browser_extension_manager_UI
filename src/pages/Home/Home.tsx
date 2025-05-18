import React from 'react'
import ThemeSwitcher from '../../components/ThemeSwitcher'
import Extension from '../../components/Extension'
import ExtensionSwitcherBar from '../../components/ExtensionSwitcherBar'
import ExtensionList from '../../components/ExtensionList'
import './Home.css'
function Home() {
  return (
    <div className="home">
        <ThemeSwitcher />
        <ExtensionSwitcherBar />
        <ExtensionList />
    </div>
    
  )
}

export default Home