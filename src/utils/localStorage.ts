import { LocalStorageKey } from '@/types/localStorage';
import { ThemeEnum } from '@/types/themes';

export const setThemeToLocalStorage = (key: LocalStorageKey, value: ThemeEnum) => {
  localStorage.setItem(key, value);
};

export const getTheme = () => localStorage.getItem('storedTheme');
