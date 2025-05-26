import React, { createContext, useContext, useState, ReactNode } from 'react';
import extensionData from '../data/data.json';
// Types
type Theme = 'light' | 'dark';

interface Extension {
  id: string;
  logo: string;
  description: string;
  name: string;
  isActive: boolean;
}

interface ExtensionContextType {
  theme: Theme;
  extensionList: Extension[];
  updatedExtensionList: Extension[];
  toggleTheme: () => void;
  removeExtension: (id: string) => void;
  toggleExtensionActive: (id: string) => void;
  showExtensionActive: () => Extension[];
  showExtensionInactive: () => Extension[];
  showAllExtensions: () => Extension[];
}


// Create Context
const ExtensionContext = createContext<ExtensionContextType | undefined>(undefined);

// Provider
export const ExtensionProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Initialize extension list with data from JSON
  const initialExtensions: Extension[] = extensionData.map((ext: any) => ({
    id: ext.id,
    logo: ext.logo,
    description: ext.description,
    name: ext.name,
    isActive: ext.isActive,
  }));


  const [extensionList, setExtensionList] = useState<Extension[]>(initialExtensions);
  const [updatedExtensionList, setUpdatedExtensionList] = useState<Extension[]>(initialExtensions);


  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const removeExtension = (id: string) => {
    setExtensionList(prev => prev.filter(ext => ext.id !== id));
  };

  const toggleExtensionActive = (name: string) => {
    setExtensionList(prev =>
      prev.map(ext =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  // const showExtensionActive = () => {
  //   // const updatedExtensionList  = extensionList.filter((extension)=> extension.isActive == true);
  //   // return updatedExtensionList;
  //   setUpdatedExtensionList(extensionList.filter((extension) => extension.isActive == true));
  // };

  // const showExtensionInactive = () => {
  //   // const updatedExtensionList  = extensionList.filter((extension)=> extension.isActive == false);
  //   // return updatedExtensionList;
  //   setUpdatedExtensionList(extensionList.filter((extension) => extension.isActive == false));
  // };

  const showExtensionActive = () => {
    setUpdatedExtensionList(() => 
  extensionList.filter(extension => extension.isActive === true)
);
  };
  const showExtensionInactive = () => {
    setUpdatedExtensionList(() => 
  extensionList.filter(extension => extension.isActive === false)
);
  };

  const showAllExtensions = () => {
    //return extensionList;
    setUpdatedExtensionList(extensionList);
  };

  return (
    <ExtensionContext.Provider
      value={{
        theme,
        extensionList,
        updatedExtensionList,
        toggleTheme,
        removeExtension,
        toggleExtensionActive,
        showExtensionActive,
        showExtensionInactive,
        showAllExtensions,
      }}>
      {children}
    </ExtensionContext.Provider>
  );
};

// Hook to use the context
export const useExtensionContext = () => {
  const context = useContext(ExtensionContext);
  if (!context) {
    throw new Error('useExtensionContext must be used within an ExtensionProvider');
  }
  return context;
};

