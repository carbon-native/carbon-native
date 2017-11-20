import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainMenu from './screens/MainMenu';
import BadgeDemo from './screens/BadgeDemo';
import ButtonsDemo from './screens/ButtonsDemo';
import CardDemo from './screens/CardDemo';
import ListsDemo from './screens/ListsDemo';
import RangeDemo from './screens/RangeDemo';
import ToggleDemo from './screens/ToggleDemo';
import ToolbarsDemo from './screens/ToolbarsDemo';
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
  Badge: { screen: BadgeDemo, navigationOptions: { title: 'Badge' } },
  Buttons: { screen: ButtonsDemo, navigationOptions: { title: 'Buttons' } },
  Card: { screen: CardDemo, navigationOptions: { title: 'Card' } },
  Lists: { screen: ListsDemo, navigationOptions: { title: 'Lists' } },
  Range: { screen: RangeDemo, navigationOptions: { title: 'Range' } },
  Toggle: { screen: ToggleDemo, navigationOptions: { title: 'Toggle' } },
  Toolbars: {
    screen: ToolbarsDemo,
    navigationOptions: { title: 'Toolbar' },
  },
  Typography: {
    screen: TypographyDemo,
    navigationOptions: { title: 'Typography' },
  },
};

const App = StackNavigator(routes, navigatorConfig);
export default App;
