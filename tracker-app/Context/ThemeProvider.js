import React, { createContext, useState, useContext } from 'react';
import colors from '../colors';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    backgroundColor: isDarkMode ? colors.darkModeSecondary : colors.secondary,
    textColor: isDarkMode ? colors.darkModeText : colors.primary,
    toggleTheme: () => setIsDarkMode(prevMode => !prevMode),
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);