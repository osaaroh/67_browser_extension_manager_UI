import './Extension.css'
import { useExtensionContext } from '../contextAPI/context.tsx'
import styles from '../Theme.module.css'; 
function Extension({logo, name, description, isActive}: {logo: string, name: string, description: string, isActive: boolean}) {
const {removeExtension, toggleExtensionActive} =  useExtensionContext();
let theme = 'da'
const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  return (
    <div className={`${styles.appContainer} ${themeClass} extension-card`}  >
      <div className="extension-card__header">
        <div className="extension-card__header--image">
          <img src={logo} alt="" />
        </div>

        <div className="extension-card__content">
          <h4 className='extension-card__content--title'>{name}</h4>
          <p className='extension-card__content--description'>{description}</p>
        </div>
      </div>
      
      <div className="extension-card__footer">
        <button className="extension-card__remove" onClick={()=>removeExtension(name)}>Remove</button>
        <label className="extension-card__toggle">
          <input type="checkbox" className="extension-card__toggle-input" checked={isActive} onChange={(e)=>{
            isActive? e.currentTarget.checked = false : e.currentTarget.checked = true  ;
              toggleExtensionActive(name);
          }}/>
          <span className="extension-card__toggle-slider"></span>
        </label>
      </div>
    </div>
  )
}

export default Extension