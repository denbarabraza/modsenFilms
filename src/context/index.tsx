import { createContext, ReactNode, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/assets/theme/theme';
import { ThemeEnum } from '@/constans/themes';
import { ITheme } from '@/context/interface';

const defaultState = {
  theme: ThemeEnum.light,
  setTheme: () => {},
} as ITheme;

export const ThemeContext = createContext(defaultState);

export const Theme = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(ThemeEnum.light);
  const currentTheme = theme === ThemeEnum.light ? lightTheme : darkTheme;

  const value = useMemo(() => {
    return { theme, setTheme };
  }, [theme, setTheme]);

  console.log({ theme, setTheme });

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};
