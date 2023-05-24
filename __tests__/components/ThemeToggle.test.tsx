import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render } from '@testing-library/react';

import { darkTheme, lightTheme } from '@/assets/theme/theme';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeEnum } from '@/constans/themes';
import { ThemeContext } from '@/context';

describe('Toggle', () => {
  it('should switch to dark theme when toggle is clicked', () => {
    const setTheme = jest.fn();

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={ThemeEnum.light ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme: ThemeEnum.light, setTheme }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    );

    const { getByRole } = render(<ThemeToggle />, { wrapper });

    const toggle = getByRole('checkbox');

    fireEvent.click(toggle);

    expect(setTheme).toHaveBeenCalledWith(ThemeEnum.dark);
  });

  it('should switch to light theme when toggle is clicked', () => {
    const setTheme = jest.fn();

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={ThemeEnum.light ? lightTheme : darkTheme}>
        <ThemeContext.Provider value={{ theme: ThemeEnum.dark, setTheme }}>
          {children}
        </ThemeContext.Provider>
      </ThemeProvider>
    );

    const { getByRole } = render(<ThemeToggle />, { wrapper });

    const toggle = getByRole('checkbox');

    fireEvent.click(toggle);

    expect(setTheme).toHaveBeenCalledWith(ThemeEnum.light);
  });
});
