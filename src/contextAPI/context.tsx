import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
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
  showExtensionActive: () => void;
  showExtensionInactive: () => void;
  showAllExtensions: () => void;
}


// Create Context
const ExtensionContext = createContext<ExtensionContextType | undefined>(undefined);

// Provider
export const ExtensionProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  // Initialize extension list with data from JSON
  const initialExtensions: Extension[] = extensionData.map((ext: any) => ({
    id: ext.id,
    logo: ext.logo,
    description: ext.description,
    name: ext.name,
    isActive: ext.isActive,
  }));


  const [extensionList, setExtensionList] = useState<Extension[]>(initialExtensions);

  // New state for the filter mode
const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

// Update body background color based on theme
React.useEffect(() => {
  //const body = document.querySelector('html') as HTMLHtmlElement;
  const html = document.documentElement;
  if (theme === 'dark') {
    html.style.background = 'linear-gradient(180deg, #040918 0%, #091540 100%)';
  } else {
    html.style.background = 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)';
  }
}, [theme]);

// Derived state
const getFilteredExtensions = () => {
  switch (filter) {
    case 'active':
      return extensionList.filter(ext => ext.isActive);
    case 'inactive':
      return extensionList.filter(ext => !ext.isActive);
    default:
      return extensionList;
  }
};

const updatedExtensionList = getFilteredExtensions();



  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const removeExtension = (name: string) => {
    setExtensionList(prev => prev.filter(ext => ext.name !== name));
  };

  const toggleExtensionActive = (name: string) => {
    setExtensionList(prev =>
      prev.map(ext =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

const showExtensionActive = () => setFilter('active');
const showExtensionInactive = () => setFilter('inactive');
const showAllExtensions = () => setFilter('all');



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

