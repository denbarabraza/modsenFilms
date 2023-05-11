import React, { FC, memo, useCallback } from 'react';

import { IThemeToggle } from '@/components/ThemeToggle/interface';
import {
  ToggleContainer,
  ToggleInput,
  ToggleLabel,
  ToggleSlider,
} from '@/components/ThemeToggle/styled';
import { ThemeEnum } from '@/constans/themes';
import { useTheme } from '@/hooks/useTheme';

export const ThemeToggle: FC<IThemeToggle> = memo(({ open }) => {
  const { theme, setTheme } = useTheme();

  const handleToggleChange = useCallback(() => {
    setTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
  }, [theme]);

  return (
    <ToggleContainer open={open || false}>
      <ToggleLabel>
        <ToggleInput
          type='checkbox'
          checked={theme !== ThemeEnum.light}
          onChange={handleToggleChange}
        />
        <ToggleSlider />
      </ToggleLabel>
    </ToggleContainer>
  );
});
