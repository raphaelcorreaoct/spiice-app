import React from 'react';

import {Provider} from 'react-redux';
import ThemeProvider from './src/hook/themeProvider';
import Routes from './src/routes/routes';
import store from './src/store/store';
import {defaultTheme} from './src/theme/defaultTheme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
