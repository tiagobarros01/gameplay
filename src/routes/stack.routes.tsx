import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { AppointmentDetails } from '../screens/AppointmentDetails';
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
    <StackRoutes.Screen name="AppointmentDetails" component={AppointmentDetails} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
