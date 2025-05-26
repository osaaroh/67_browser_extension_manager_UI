import Extension from './Extension';
import { useExtensionContext } from '../contextAPI/context.tsx';
import './ExtensionList.css'

function ExtensionList() {
   const { updatedExtensionList } = useExtensionContext();
  return ( 
  <>
    <div className="extension-list">
    {updatedExtensionList.map((extension) => (
      <Extension 
        key={extension.name}
        logo={extension.logo}
        name={extension.name} 
        description={extension.description} 
        isActive={extension.isActive} 
      />
    ))}
    </div>
  </>
  )
}

export default ExtensionList