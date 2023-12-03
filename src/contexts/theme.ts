import { createContext, useContext } from 'react';
import { ITheme, theme } from '../theme/theme';

export const ThemeContext = createContext<ITheme>(theme);

export const ThemeProvider = ThemeContext.Provider;
