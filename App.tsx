import React from 'react';

import {Provider} from 'react-redux';
import ThemeProvider from './src/hook/themeProvider';
import Routes from './src/routes/routes';
import store from './src/store/store';
import {defaultTheme, purpleTheme, darkTheme} from './src/theme/defaultTheme';
import Toast from 'react-native-toast-message';
const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
      <Toast />
    </Provider>
  );
};

export default App;
