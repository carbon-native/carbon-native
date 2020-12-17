import React from "react";
import { StyleSheet, Text } from "react-native";
import {
  carbonStyles,
  H3,
  H4,
  Content,
  Card,
  List,
  Item,
  ItemContent,
  ItemText,
  ItemIcon,
} from "../src/index.js";
import Icon from "@expo/vector-icons/FontAwesome";

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: "center",
  },
});

const nearbyCategories = [
  { name: "Shopping", iconName: "shopping-cart" },
  { name: "Hospital", iconName: "ambulance" },
  { name: "Cafe", iconName: "coffee" },
  { name: "Dog Park", iconName: "paw" },
  { name: "Pub", iconName: "beer" },
  { name: "Space", iconName: "globe" },
];

export default function CardDemo() {
  return (
    <Content style={cs.paddingLg}>
      <Card padding>
        <Text>
          This is just your basic card with some text to boot. Like it? Keep
          scrolling...
        </Text>
      </Card>

      <H3 style={styles.sectionHeader}>Card Headers</H3>
      <Card padding>
        <H4>Header</H4>
        <Text>
          Just some text rambling on about card headers, the value they provide,
          and blah blah blah
        </Text>
      </Card>

      <H3 style={styles.sectionHeader}>Card List</H3>
      <Card>
        <H4 style={[cs.paddingLg, { marginBottom: 0 }]}>Explore Nearby</H4>
        <List style={{ borderTopWidth: StyleSheet.hairlineWidth }}>
          {nearbyCategories.map((category, index) => (
            <Item key={index}>
              <ItemIcon>
                <Icon name={category.iconName} size={24} />
              </ItemIcon>
              <ItemContent
                style={index === nearbyCategories.length - 1 && cs.itemLast}
              >
                <ItemText>{category.name}</ItemText>
                <Icon name="angle-right" size={24} color="#C8C7CC" />
              </ItemContent>
            </Item>
          ))}
        </List>
      </Card>
    </Content>
  );
}
