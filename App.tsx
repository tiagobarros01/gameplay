import React from 'react';
import { ThemeProvider } from 'styled-components';

import SignIn from './src/screens/SignIn/index';
import DefaultTheme from './src/styles/themes/DefaultTheme';

const App = (): JSX.Element => (
  <ThemeProvider theme={DefaultTheme}>
    <SignIn />
  </ThemeProvider>
);

export default App;
