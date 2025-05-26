import styles from '../Theme.module.css'; 
import './ExtensionSwitcherBar.css'
import { useExtensionContext } from '../contextAPI/context.tsx'
function ExtensionSwitcherBar() {
  const { theme, showExtensionActive, showExtensionInactive, showAllExtensions } = useExtensionContext()
const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  return (
    <div className={`${styles.appContainer} ${themeClass} extension-switcher-bar`} >
      <div className="extension-switcher-bar__title">
        <h1>Extensions List</h1>
      </div>
      <div className="extension-switcher-bar__toggles">
        
        <div className="extension-switcher-bar__radios">
          <input 
            type="radio" 
            id="all" 
            name="extension-status" 
            onChange={() => { showAllExtensions() }} 
            onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === ' ') showAllExtensions() }} 
            defaultChecked 
          />
          <label 
            htmlFor="all" 
            tabIndex={0} 
            onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === ' ') showAllExtensions() }}
          >
            All
          </label>
          <input 
            type="radio" 
            id="active" 
            name="extension-status"  
            onChange={() => { showExtensionActive() }} 
          />
          <label 
            htmlFor="active" 
            tabIndex={0} 
            onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === ' ') showExtensionActive() }}
          >
            Active
          </label>
          <input 
            type="radio" 
            id="inactive" 
            name="extension-status"   
            onChange={() => { showExtensionInactive() }} 
          />
          <label 
            htmlFor="inactive" 
            tabIndex={0} 
            onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === ' ') showExtensionInactive() }}
          >
            Inactive
          </label>
        </div>
      </div>
    </div>
  )
}

export default ExtensionSwitcherBar