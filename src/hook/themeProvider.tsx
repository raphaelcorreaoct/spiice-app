import React from 'react';
import {ThemeProvider as STYThemeProvider} from 'styled-components';

export default function ThemeProvider({children, theme}) {
  return <STYThemeProvider theme={theme}>{children}</STYThemeProvider>;
}
