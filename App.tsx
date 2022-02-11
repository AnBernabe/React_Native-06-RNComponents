import 'react-native-gesture-handler';

import React from 'react';
import {MainNavigation} from './src/navigations/MainNavigation';
import {LogBox} from 'react-native';
import {ThemeProvider} from './src/contexts/themeContext/ThemeContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DarkTheme.colors,
//     // background: 'grey',
//   },
// };

export const App = () => {
  return (
    <AppState>
      <MainNavigation />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
