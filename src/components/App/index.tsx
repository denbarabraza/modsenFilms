import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: papayawhip;
    position: relative;
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </>
  );
};
