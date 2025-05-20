import React from 'react';
import { useContext, useEffect, useState } from "react";
import extensionData from '../data/data.json';

//1 create app context
const AppContext = React.createContext();

const AppProvider =({children})=>{
    //2 create the states to manage the theme, sidebar, modal, and submenu
    const [theme, setTheme] = useState("light");
    const [extensionList, setExtensionList] = useState(extensionData);
    
    //3 create a function to toggle the theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      };
    
      //4 create a function to open and close the sidebar
      const removeExtension = (name) =>{
        const newExtensionList = extensionList.filter((extension)=> extension.name !==name);
            setExtensionList(newExtensionList);
        }

        const toggleExtensionActive = (name: string) => {
        const updatedExtensionList = extensionList.map((extension) => 
          extension.name === name ? { ...extension, isActive: !extension.isActive } : extension
        );
        setExtensionList(updatedExtensionList);
      };

      const showExtensionActive = () => {
        const updatedExtensionList  = extensionList.filter((extension)=> extension.isActive == true);
    
        setExtensionList(updatedExtensionList);
      };

      const showExtensionInactive = () => {
        const updatedExtensionList  = extensionList.filter((extension)=> extension.isActive == false);
        setExtensionList(updatedExtensionList);
      }

      const showAllExtensions = () => {
        setExtensionList(extensionData);
      }

    
    return(
      <AppContext.Provider value={{
      theme,
      extensionList,
      toggleTheme,
      removeExtension,
      toggleExtensionActive,
      showExtensionActive,
      showExtensionInactive,
      showAllExtensions
      }}>
      {children}
      </AppContext.Provider>
    )
  }


  //5 create a custom hook to use the app context
  export const useGlobalContext = () => {
    return useContext(AppContext);
  }

  //6 export the app context and the custom hook  
  export { AppProvider };

