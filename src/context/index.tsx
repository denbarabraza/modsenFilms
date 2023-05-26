import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/assets/theme/theme';
import { ThemeEnum } from '@/constans/themes';
import { IThemeData } from '@/interfaces/IThemeData';
import { getTheme } from '@/utils/localStorage/getTheme';

const defaultState = {
  theme: ThemeEnum.light,
  setTheme: () => {},
} as IThemeData;

export const ThemeContext = createContext(defaultState);

export const Theme = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(ThemeEnum.light);
  const currentTheme = theme === ThemeEnum.light ? lightTheme : darkTheme;

  useEffect(() => {
    const themeFromLs = getTheme();

    if (themeFromLs) {
      setTheme(themeFromLs as ThemeEnum);
    }
  }, []);

  const value = useMemo(() => {
    return { theme, setTheme };
  }, [theme, setTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </ThemeProvider>
  );
};
