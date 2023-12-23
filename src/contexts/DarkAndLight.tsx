// ThemeProvider.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeContextType {
  isLightMode: string;
  loadTheme: any;
}

const ThemeContext = createContext<ThemeContextType>({
  isLightMode: "Light",
  loadTheme: ()=>Promise
})

export const ThemeProvider = ({ children }: any) => {
  const [isLightMode, setIsLightMode] = useState("Light");
  async function loadTheme():Promise<void> {
    try {
      const storedTheme = await AsyncStorage.getItem('theme');
      if (storedTheme !== null) {
        setIsLightMode(storedTheme);
      }
    } catch (error) {
      console.error('Error loading theme', error);
    }
  }

  useEffect(() => {
   
    loadTheme();
  }, []);

  const contextValues:ThemeContextType = {
    isLightMode,
    loadTheme ,
  };

  return (
    <ThemeContext.Provider value={contextValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};