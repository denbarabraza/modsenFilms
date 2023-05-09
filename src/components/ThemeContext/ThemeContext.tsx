import React, { createContext, FC, useMemo, useState } from 'react';

type IThemeContextValue = 'light' | 'dark';

export interface IThemeContext {
  theme: IThemeContextValue;
  toggleTheme: (theme: IThemeContextValue) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'light',
  toggleTheme: () => {},
});

interface IThemeProvider {
  children: React.ReactNode;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<IThemeContextValue>('light');

  const toggleTheme = (newTheme: IThemeContextValue) => {
    setTheme(newTheme);
  };

  const value = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
