import React from 'react';
import { Platform, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainMenu" component={MainMenu} options={{ title: "Kitchen Sink" }} />
        <Stack.Screen name="Badge" component={BadgeDemo} options={{ title: "Badge" }} />
        <Stack.Screen name="Alerts" component={AlertsDemo} options={{ title: "Alerts" }} />
        <Stack.Screen name="Buttons" component={ButtonsDemo} options={{ title: "Buttons" }} />
        <Stack.Screen name="Card" component={CardDemo} options={{ title: "Card" }} />
        <Stack.Screen name="Icons" component={IconsDemo} options={{ title: "Icons" }} />
        <Stack.Screen name="List" component={ListDemo} options={{ title: "List" }} />
        <Stack.Screen name="Modal" component={ModalDemo} options={{ title: "Modal" }} />
        <Stack.Screen name="Range" component={RangeDemo} options={{ title: "Range" }} />
        <Stack.Screen name="Toggle" component={ToggleDemo} options={{ title: "Toggle" }} />
        <Stack.Screen name="Toolbar" component={ToolbarDemo} options={{ title: "Toolbar" }} />
        <Stack.Screen name="Typography" component={TypographyDemo} options={{ title: "Typography" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}