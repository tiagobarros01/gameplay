/* eslint-disable camelcase */
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Background } from './src/components/Background';
import Home from './src/screens/Home';
import DefaultTheme from './src/styles/themes/DefaultTheme';

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Background>
        <Home />
        <StatusBar barStyle="light-content" translucent backgroundColor="#fff" />
      </Background>
    </ThemeProvider>
  );
};

export default App;
