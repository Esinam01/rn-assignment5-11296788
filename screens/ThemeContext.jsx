// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const lightTheme = {
    background: '#fff',
    text: '#000',
    border: '#ccc',
    primary: 'blue',
    switchTrack: '#767577',
    switchThumb: '#f4f3f4',
  };

  const darkTheme = {
    background: '#000',
    text: '#fff',
    border: '#444',
    primary: 'blue',
    switchTrack: '#81b0ff',
    switchThumb: '#f5dd4b',
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark: isDarkTheme, colors: theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        <StatusBar barStyle={isDarkTheme ? 'light-content' : 'dark-content'} />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
