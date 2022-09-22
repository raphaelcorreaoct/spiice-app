import {View, Text, Button} from 'react-native';
import React from 'react';
import {addTransaction} from '../../services';

export default function RegistrationScreen() {
  return (
    <View>
      <Text>RegistrationScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => {
          console.log('Go to Home');
          addTransaction({
            userId: '1',
            category: 'Food',
            date: new Date(),
            value: 100.0,
          });
        }}
      />
    </View>
  );
}
