import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';

export const Stack = createNativeStackNavigator();

export const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
