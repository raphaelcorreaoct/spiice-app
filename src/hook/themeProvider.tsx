import React from 'react';
import {ThemeProvider as STYThemeProvider} from 'styled-components';
import {useSelector} from 'react-redux';
import {RootState} from '../store/rootReducer';

export default function ThemeProvider({children, theme}) {
  const reduxTheme = useSelector(
    (state: RootState) => state.themeReducer.theme,
  );

  return (
    <STYThemeProvider theme={reduxTheme || theme}>{children}</STYThemeProvider>
  );
}
