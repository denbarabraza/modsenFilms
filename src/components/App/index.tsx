import React, { useContext } from 'react';
import styled, { createGlobalStyle, ThemeContext } from 'styled-components';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { ThemeProvider } from '@/components/ThemeContext/ThemeContext';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    position: relative;
    font-family: "Rockwell Condensed", sans-serif;
  }
`;

export interface IContainerTheme {
  backgroundColor: string;
  textColor: string;
  toggleBackground: string;
  toggleBackgroundChecked: string;
  toggleCircle: string;
}

export interface IThemeConfig {
  light: IContainerTheme;
  dark: IContainerTheme;
}

const Container = styled.div<{ theme: IContainerTheme }>`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
`;

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const themeConfig: IThemeConfig = {
    light: {
      backgroundColor: '#fff',
      textColor: '#000',
      toggleBackground: '#ccc',
      toggleBackgroundChecked: '#555',
      toggleCircle: '#fff',
    },
    dark: {
      backgroundColor: '#000',
      textColor: '#fff',
      toggleBackground: '#555',
      toggleBackgroundChecked: '#ccc',
      toggleCircle: '#000',
    },
  };

  return (
    <ThemeProvider>
      <Container theme={themeConfig[theme]}>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};
