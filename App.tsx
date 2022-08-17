import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/store/store';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>Olá mundo</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
