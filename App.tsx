import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Provider} from 'react-redux';
import {Box} from './src/components';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Box width={'100%'} height={50} />
        <Text>Olá mundo</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
