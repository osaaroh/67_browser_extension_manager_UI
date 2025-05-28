import styles from '../Theme.module.css'; 
import './ExtensionSwitcherBar.css'
import { useExtensionContext } from '../contextAPI/context.tsx'
function ExtensionSwitcherBar() {
  const { filter, theme, showExtensionActive, showExtensionInactive, showAllExtensions } = useExtensionContext()
const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
// Helper Function to toggle aria-checked on the label. Logic not implemented yet, but can be used to manage the state of the switch visually and for accessibility.


// const actualCheckbox = document.getElementById('myActualCheckbox');
// const switchLabel = document.getElementById('mySwitchLabel');

// function updateSwitchState() {
//   const isChecked = actualCheckbox.checked;
//   switchLabel.setAttribute('aria-checked', isChecked);
//   // You might also change styling via classes here if not using attribute selectors
// }

// // Initialize
// updateSwitchState();

// // Event listener for clicks on the label
// switchLabel.addEventListener('click', () => {
//   actualCheckbox.checked = !actualCheckbox.checked;
//   updateSwitchState();
// });


  return (
    
    <div className={`${themeClass} extension-switcher-bar`} >
      <div className="extension-switcher-bar__title">
        <h1>Extensions List</h1>
      </div>
      <div className="extension-switcher-bar__toggles">
        
        <div className="extension-switcher-bar__radios">
          <input 
            aria-hidden="true"
            type="radio" 
            id="all" 
            name="extension-status" 
            onChange={() => { showAllExtensions() }} 
            onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === ' ') showAllExtensions() }} 
            defaultChecked 
          />
          <label 
            htmlFor="all"
            role="switch" 
            tabIndex={0} 
            onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === ' ') showAllExtensions() }}
            aria-label='Show all extensions'
            aria-checked={filter=="all"?true:false}
          >
            All
          </label>
          <input 
            aria-hidden="true"
            type="radio" 
            id="active" 
            name="extension-status"  
            onChange={() => { showExtensionActive() }} 
          />
          <label 
            htmlFor="active"
            role="switch" 
            tabIndex={0} 
            onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === ' ') showExtensionActive() }}
            aria-label='Show active extensions'
            aria-checked={filter=="active"?true:false}
          >
            Active
          </label>
          <input 
            aria-hidden="true"
            type="radio" 
            id="inactive" 
            name="extension-status"   
            onChange={() => { showExtensionInactive() }} 
          />
          <label 
            htmlFor="inactive" 
            role="switch"
            tabIndex={0} 
            onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === ' ') showExtensionInactive() }}
            aria-label='Show inactive extensions'
            aria-checked={filter=="inactive"?true:false}
          >
            Inactive
          </label>
        </div>
      </div>
    </div>
  )
}

export default ExtensionSwitcherBar