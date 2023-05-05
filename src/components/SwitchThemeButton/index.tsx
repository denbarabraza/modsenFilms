import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

const lightTheme = {
  backgroundColor: 'white',
  color: 'black',
};

const darkTheme = {
  backgroundColor: 'black',
  color: 'white',
};

const Button = styled.button`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`;

export const SwitchThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const handleToggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Button onClick={handleToggleTheme}>Switch Theme</Button>
    </ThemeProvider>
  );
};
