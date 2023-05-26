import { ThemeEnum } from '@/constans/themes';

export interface IThemeData {
  theme: ThemeEnum;
  setTheme: (arg: ThemeEnum) => void;
}
