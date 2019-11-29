/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React from 'react';
import AppContainer from './app/navigator';
import {Provider, useSelector} from 'react-redux';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {name as appName} from './app.json';
import store from './app/store';
import themes from './app/styles';
import {currentTheme} from './app/selectors';

export const ThemeContext = React.createContext(themes.light);

const ThemedContainer = () => {
  const colorScheme = useColorScheme();
  const theme = useSelector(currentTheme);
  return (
    <AppearanceProvider>
      <ThemeContext.Provider
        value={themes[colorScheme === 'dark' ? colorScheme : theme]}>
        <AppContainer />
      </ThemeContext.Provider>
    </AppearanceProvider>
  );
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemedContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
