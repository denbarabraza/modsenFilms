import { DefaultTheme } from 'styled-components';

import { ThemeEnum } from '@/constans/themes';
import { ITheme } from '@/interfaces/styled';

const baseTheme: ITheme = {
  colors: {
    fontColor: '#19191B',
    backgroundColor: '#E5E4E8',
    selectBackground: '#ffffff',
    selectFontColor: '#19191B',
    headerBackground: '#383838',
    toggleBackground: '#fff',
    toggleBackgroundChecked: '#fff',
    toggleCircle: '#f36d02',
    toggleBorder: '#f36d02',
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,

  colors: {
    ...baseTheme.colors,
    fontColor: '#ffffff',
    backgroundColor: '#323030',
    selectBackground: '#E5E4E8',
    headerBackground: '#C29545',
    toggleBackground: '#f36d02',
    toggleBackgroundChecked: '#ccc',
    toggleCircle: '#fff',
    toggleBorder: '#f36d02',
  },
};
