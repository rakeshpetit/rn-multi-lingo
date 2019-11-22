/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import React from 'react';
import AppContainer from './app/navigator';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import store from './app/store';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
