import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Theme } from '@/context';

import { GlobalStyles } from './styled';

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
