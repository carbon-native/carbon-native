import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainMenu from './screens/MainMenu';
import AlertsDemo from './screens/AlertsDemo';
import BadgesDemo from './screens/BadgesDemo';
import ButtonsDemo from './screens/ButtonsDemo';
import CardsDemo from './screens/CardsDemo';
import GridDemo from './screens/GridDemo';
import IconsDemo from './screens/IconsDemo';
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
  Alerts: {
    screen: AlertsDemo,
    navigationOptions: { title: 'Alerts' },
  },
  Badges: { screen: BadgesDemo, navigationOptions: { title: 'Badges' } },
  Buttons: { screen: ButtonsDemo, navigationOptions: { title: 'Buttons' } },
  Cards: { screen: CardsDemo, navigationOptions: { title: 'Cards' } },
  Grid: { screen: GridDemo, navigationOptions: { title: 'Grid' } },
  Icons: { screen: IconsDemo, navigationOptions: { title: 'Icons' } },
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
