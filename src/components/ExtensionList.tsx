import Extension from './Extension';
import { useExtensionContext } from '../contextAPI/context.tsx';
import './ExtensionList.css'
import { useEffect } from 'react';

function ExtensionList() {
   const { updatedExtensionList } = useExtensionContext();
  //  useEffect(() => {
  //   // This runs whenever updatedExtensionList changes
  //   console.log('updatedExtensionList changed:', updatedExtensionList);

  //   // You can perform any side effects here if needed, or update internal state
  // }, [updatedExtensionList]);
  return ( 
  <>
    {console.log(updatedExtensionList)}
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