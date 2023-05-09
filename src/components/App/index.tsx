import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Theme } from '@/context';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    position: relative;
    font-family: "Rockwell Condensed", sans-serif;
  }
`;

export const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </Theme>
  );
};
