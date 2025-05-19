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

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const removeExtension = (id: string) => {
    setExtensionList(prev => prev.filter(ext => ext.id !== id));
  };

  const toggleExtensionActive = (id: string) => {
    setExtensionList(prev =>
      prev.map(ext =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const showExtensionActive = () => {
    const updatedExtensionList  = extensionList.filter((extension)=> extension.isActive == true);
    setExtensionList(updatedExtensionList);
  };

  const showExtensionInactive = () => {
    const updatedExtensionList  = extensionList.filter((extension)=> extension.isActive == false);
        setExtensionList(updatedExtensionList);
  };

  const showAllExtensions = () => {
    setExtensionList(initialExtensions);
  };

  return (
    <ExtensionContext.Provider
      value={{
        theme,
        extensionList,
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
