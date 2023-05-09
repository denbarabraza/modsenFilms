import { ThemeEnum } from '@/constans/themes';

export interface ITheme {
  theme: ThemeEnum;
  setTheme: (arg: ThemeEnum) => void;
}
