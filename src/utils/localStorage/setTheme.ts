import { ThemeEnum } from '@/constans/themes';
import { LocalStorageKey } from '@/interfaces/localStorage';

export const setThemeToLocalStorage = (key: LocalStorageKey, value: ThemeEnum) => {
  localStorage.setItem(key, value);
};
