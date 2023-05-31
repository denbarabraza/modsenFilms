import React, { FC, memo, useCallback } from 'react';

import { useTheme } from '@/hooks/useTheme';
import { ThemeEnum } from '@/types/themes';
import { setThemeToLocalStorage } from '@/utils/localStorage';

import { IThemeToggle } from './interface';
import { ToggleContainer, ToggleInput, ToggleLabel, ToggleSlider } from './styled';

export const ThemeToggle: FC<IThemeToggle> = memo(({ open }) => {
  const { theme, setTheme } = useTheme();

  const handleToggleChange = useCallback(() => {
    const rulesTheme = theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light;

    setThemeToLocalStorage('storedTheme', rulesTheme);
    setTheme(rulesTheme);
  }, [theme]);

  return (
    <ToggleContainer open={open || false}>
      <ToggleLabel>
        <ToggleInput
          type='checkbox'
          checked={theme !== ThemeEnum.light}
          onChange={handleToggleChange}
        />
        <ToggleSlider data-cy='themeToggleSlider' />
      </ToggleLabel>
    </ToggleContainer>
  );
});
