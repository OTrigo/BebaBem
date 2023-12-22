// ThemeProvider.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext({
  isLightMode: "Claro",
})

export const ThemeProvider = ({ children }: any) => {
  const [isLightMode, setIsLightMode] = useState("Claro");

  useEffect(() => {
    async function loadTheme() {
      try {
        const storedTheme = await AsyncStorage.getItem('theme');
        if (storedTheme !== null) {
          setIsLightMode(storedTheme);
        }
      } catch (error) {
        console.error('Error loading theme', error);
      }
    }
    loadTheme();
  }, []);

  const theme = {
    isLightMode,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};