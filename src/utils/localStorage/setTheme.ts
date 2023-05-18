import { ThemeEnum } from '@/constans/themes';
import { LocalStorageKeys } from '@/interfaces/localStorage';

export const setThemeToLocalStorage = (key: LocalStorageKeys, value: ThemeEnum) => {
  localStorage.setItem(key, value);
};
