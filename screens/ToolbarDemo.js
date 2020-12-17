import React from "react";
import { Text } from "react-native";
import {
  Container,
  Content,
  Toolbar,
  ToolbarTitle,
  ToolbarLeft,
  ToolbarRight,
  P,
  H1,
  Button,
  colors,
} from "../src/index.js";
import { View } from "react-native";
import Icon from "@expo/vector-icons/Feather";

const items = [
  { color: "primary", titleColor: "light" },
  { color: "secondary", titleColor: "light" },
  { color: "danger", titleColor: "light" },
  { color: "stable", titleColor: "dark" },
  { color: "dark", titleColor: "light" },
];

export default function ToolbarDemo() {
  return (
    <Container>
      <Toolbar color="primary">
        <ToolbarLeft />

        <ToolbarTitle color="light">Secondary Toolbar</ToolbarTitle>

        <ToolbarRight>
          <Button clear size="xs" onPress={() => alert("Settings")}>
            <Icon name="settings" size={20} style={{ color: colors.light }} />
          </Button>
        </ToolbarRight>
      </Toolbar>

      <Content padding>
        <H1>Hello there!</H1>
        <P>I'm pleased to introduce you to this example content.</P>
      </Content>

      <Toolbar color="primary">
        <ToolbarLeft>
          <Button clear size="xs" onPress={() => alert("Undo")}>
            <Icon name="rotate-ccw" size={20} style={{ color: colors.light }} />
          </Button>
        </ToolbarLeft>

        <ToolbarTitle color="light">Footer Toolbar</ToolbarTitle>

        <ToolbarRight>
          <Button clear size="xs" onPress={() => alert("Create new document")}>
            <Icon name="edit" size={20} style={{ color: colors.light }} />
          </Button>
        </ToolbarRight>
      </Toolbar>
      <View
        style={{ backgroundColor: colors.primary, width: "100%", height: 20 }}
      />
    </Container>
  );
}
