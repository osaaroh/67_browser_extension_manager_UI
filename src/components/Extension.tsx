import './Extension.css'
import { useExtensionContext } from '../contextAPI/context.tsx'
import styles from '../Theme.module.css'; 
function Extension({logo, name, description, isActive}: {logo: string, name: string, description: string, isActive: boolean}) {
const {removeExtension, toggleExtensionActive} =  useExtensionContext();
const {theme} = useExtensionContext();
const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;
  return (
    <div className={`${themeClass} extension-card`}  >
      <div className="extension-card__header">
        <div className="extension-card__header--image">
          <img src={logo} alt="" />
        </div>

        <div className="extension-card__content">
          <h1 className='extension-card__content--title'>{name}</h1>
          <p className='extension-card__content--description'>{description}</p>
        </div>
      </div>
      
      <div className="extension-card__footer">
        <button type='button' className="extension-card__remove" onClick={()=>removeExtension(name)}>Remove</button>
        <label className="extension-card__toggle" tabIndex={0} 
        onKeyDown={(e) => { if (e.key === 'Enter' || e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === ' ') toggleExtensionActive(name) }} >
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