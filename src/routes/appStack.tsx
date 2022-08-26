import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReportScreen from '../screens/Report/ReportScreen';
import RegistrationScreen from '../screens/Registration/RegistrationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export const AppStack: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        header: () => null,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'Report') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          }
          if (route.name === 'Registration') {
            iconName = focused ? 'add' : 'add-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="report" component={ReportScreen} />
      <Tab.Screen name="registration" component={RegistrationScreen} />
    </Tab.Navigator>
  );
};
