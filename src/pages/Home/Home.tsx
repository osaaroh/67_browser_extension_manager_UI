import ThemeSwitcher from '../../components/ThemeSwitcher'
import ExtensionSwitcherBar from '../../components/ExtensionSwitcherBar'
import ExtensionList from '../../components/ExtensionList'
import './Home.css'
function Home() {
  
  return (
    <>
        <ThemeSwitcher />
        <main>
            <ExtensionSwitcherBar />
            <ExtensionList />
        </main>
        
    </>
    
  )
}

export default Home