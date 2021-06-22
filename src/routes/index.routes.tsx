import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Background } from '../components/Background';
import DefaultTheme from '../styles/themes/DefaultTheme';
import StackRoutes from './stack.routes';

export function Routes(): JSX.Element {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Background>
          <StackRoutes />
          <StatusBar barStyle="light-content" translucent backgroundColor="#fff" />
        </Background>
      </NavigationContainer>
    </ThemeProvider>
  );
}
