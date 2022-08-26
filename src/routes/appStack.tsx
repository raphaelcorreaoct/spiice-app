import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReportScreen from '../screens/Report/ReportScreen';
import RegistrationScreen from '../screens/Registration/RegistrationScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'styled-components';
import Txt from './../components/Text/Text';

export const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const AppStack: React.FC = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        header: () => null,
        tabBarLabel: ({focused}) => {
          let label = '';
          if (route.name === 'home') {
            label = 'Home';
          }
          if (route.name === 'report') {
            label = 'Relatório';
          }
          if (route.name === 'registration') {
            label = 'Cadastrar';
          }
          return (
            <Txt
              color={focused ? 'color-primary' : 'on-color-background'}
              fontSize="xxxs">
              {label}
            </Txt>
          );
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'home') {
            iconName = focused ? 'home' : 'home-outline';
          }
          if (route.name === 'report') {
            iconName = focused ? 'pie-chart' : 'pie-chart-outline';
          }
          if (route.name === 'registration') {
            iconName = focused ? 'add' : 'add-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors['color-primary'],
        tabBarInactiveTintColor: theme.colors['on-color-background'],
      })}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="report" component={ReportScreen} />
      <Tab.Screen name="registration" component={RegistrationScreen} />
    </Tab.Navigator>
  );
};
