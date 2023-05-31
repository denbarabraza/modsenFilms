import { ThemeEnum } from '@/types/themes';

export interface IThemeData {
  theme: ThemeEnum;
  setTheme: (arg: ThemeEnum) => void;
}
