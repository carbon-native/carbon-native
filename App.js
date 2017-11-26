import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainMenu from './screens/MainMenu';
import AlertsDemo from './screens/AlertsDemo';
import BadgeDemo from './screens/BadgeDemo';
import ButtonsDemo from './screens/ButtonsDemo';
import CardDemo from './screens/CardDemo';
import IconsDemo from './screens/IconsDemo';
import ListDemo from './screens/ListDemo';
import ModalDemo from './screens/ModalDemo';
import RangeDemo from './screens/RangeDemo';
import ToggleDemo from './screens/ToggleDemo';
import ToolbarDemo from './screens/ToolbarDemo';
import TypographyDemo from './screens/TypographyDemo';

const navigatorConfig = {
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
};

const routes = {
  MainMenu: {
    screen: MainMenu,
    navigationOptions: { title: 'Kitchen Sink' },
  },
  Alerts: {
    screen: AlertsDemo,
    navigationOptions: { title: 'Alerts' },
  },
  Badge: { screen: BadgeDemo, navigationOptions: { title: 'Badge' } },
  Buttons: { screen: ButtonsDemo, navigationOptions: { title: 'Buttons' } },
  Card: { screen: CardDemo, navigationOptions: { title: 'Card' } },
  Icons: { screen: IconsDemo, navigationOptions: { title: 'Icons' } },
  List: { screen: ListDemo, navigationOptions: { title: 'List' } },
  Modal: { screen: ModalDemo, navigationOptions: { title: 'Modal' } },
  Range: { screen: RangeDemo, navigationOptions: { title: 'Range' } },
  Toggle: { screen: ToggleDemo, navigationOptions: { title: 'Toggle' } },
  Toolbar: {
    screen: ToolbarDemo,
    navigationOptions: { title: 'Toolbar' },
  },
  Typography: {
    screen: TypographyDemo,
    navigationOptions: { title: 'Typography' },
  },
};

const App = StackNavigator(routes, navigatorConfig);
export default App;
