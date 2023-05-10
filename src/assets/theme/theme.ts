import { DefaultTheme } from 'styled-components';

import { ThemeEnum } from '@/constans/themes';
import { ITheme } from '@/interfaces/styled';

const baseTheme: ITheme = {
  colors: {
    fontColor: '#000000',
    mainBackground: '#fff',
    mainBorder: '#E5E4E8',
    boxShadow: '#E5E4E8',
    selectBackground: '#ffffff',
    selectFontColor: '#19191B',
    headerFooterBackground: '#E5E4E8',
    toggleBackground: '#fff',
    filmsCardBackground: '#fff',
    toggleBackgroundChecked: '#fff',
    toggleCircle: '#F17900',
    toggleBorder: '#F17900',
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
    mainBackground: '#3f3f3f',
    mainBorder: '#ffffff',
    boxShadow: '#E5E4E8',
    selectBackground: '#E5E4E8',
    headerFooterBackground: '#191919',
    toggleBackground: '#F17900',
    filmsCardBackground: '#F17900',
    toggleBackgroundChecked: '#F17900',
    toggleCircle: '#fff',
    toggleBorder: '#F17900',
  },
};
