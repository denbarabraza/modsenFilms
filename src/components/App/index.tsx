import React from 'react';

import { GlobalStyles } from '@/components/App/styled';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { Theme } from '@/context';

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
