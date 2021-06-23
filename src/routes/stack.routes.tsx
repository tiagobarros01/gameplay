import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import DefaultTheme from '../styles/themes/DefaultTheme';

const StackRoutes = createStackNavigator();

const AppRoutes = (): JSX.Element => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: DefaultTheme.colors.gradients.gradient100,
      },
    }}
  >
    <StackRoutes.Screen name="SignIn" component={SignIn} />
    <StackRoutes.Screen name="Home" component={Home} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
