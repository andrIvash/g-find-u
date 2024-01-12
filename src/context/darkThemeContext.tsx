import { createContext } from 'react';

export type DarkThemeContextType = boolean;
export const DarkThemeContext = createContext<DarkThemeContextType>(false);