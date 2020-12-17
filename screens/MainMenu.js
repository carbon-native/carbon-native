import React from "react";
import { StyleSheet, Platform, StatusBar } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome";
import {
  carbonStyles,
  Content,
  List,
  Item,
  ItemContent,
  ItemText,
  ItemIcon,
} from "../src/index.js";

const cs = StyleSheet.create(carbonStyles);

const navigationItems = [
  // { name: 'Alerts', icon: 'exclamation-triangle' },
  { name: "Badge", icon: "certificate" },
  { name: "Buttons", icon: "circle" },
  { name: "Card", icon: "clone" },
  { name: "Icons", icon: "heart" },
  { name: "List", icon: "list" },
  // { name: 'Modal', icon: 'sticky-note-o' },
  { name: "Range", icon: "sliders" },
  { name: "Toggle", icon: "toggle-on" },
  { name: "Toolbar", icon: "bars" },
  { name: "Typography", icon: "font", lastItem: true },
];

export default function MainMenu(props) {
  const { navigate } = props.navigation;

  return (
    <Content>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <List>
        {navigationItems.map((item, index) => (
          <Item key={index} onPress={() => navigate(item.name)}>
            <ItemIcon>
              <Icon name={item.icon} size={24} />
            </ItemIcon>
            <ItemContent style={item.lastItem && cs.itemLast}>
              <ItemText>{item.name}</ItemText>
            </ItemContent>
          </Item>
        ))}
      </List>
    </Content>
  );
}
