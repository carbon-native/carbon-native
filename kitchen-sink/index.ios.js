import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

import {
  carbonStyles,
} from 'carbon-native';

import MainMenu from './screens/MainMenu';

const cs = StyleSheet.create(carbonStyles);

function KitchenSink() {
  return (
    <NavigatorIOS
      style={cs.container}
      initialRoute={{
        component: MainMenu,
        title: 'Kitchen Sink',
        backButtonTitle: 'Back',
      }}
    />
  );
}

AppRegistry.registerComponent('KitchenSink', () => KitchenSink);
