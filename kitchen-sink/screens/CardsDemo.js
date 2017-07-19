import React from 'react';

import {
  StyleSheet,
  Text,
} from 'react-native';

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
} from 'carbon-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default function CardsDemo() {
  return (
    <Content style={cs.paddingLg}>
      <Card style={cs.paddingLg}>
        <Text>This is just your basic card with some text to boot. Like it? Keep scrolling...</Text>
      </Card>

      <H3 style={styles.sectionHeader}>Card Headers</H3>
      <Card style={cs.paddingLg}>
        <H4>Header</H4>
        <Text>
          Just some text rambling on about card headers, the value they provide, and blah blah blah
        </Text>
      </Card>

      <H3 style={styles.sectionHeader}>Card List</H3>
      <Card>
        <H4 style={[cs.paddingLg, { marginBottom: 0 }]}>Explore Nearby</H4>
        <List style={{ borderTopWidth: StyleSheet.hairlineWidth }}>
          <Item>
            <ItemIcon>
              <Icon name="shopping-cart" size={24} />
            </ItemIcon>
            <ItemContent>
              <ItemText>Shopping</ItemText>
              <Icon name="angle-right" size={24} color="#C8C7CC" />
            </ItemContent>
          </Item>

          <Item>
            <ItemIcon>
              <Icon name="ambulance" size={24} />
            </ItemIcon>
            <ItemContent>
              <ItemText>Hospital</ItemText>
              <Icon name="angle-right" size={24} color="#C8C7CC" />
            </ItemContent>
          </Item>

          <Item>
            <ItemIcon>
              <Icon name="coffee" size={24} />
            </ItemIcon>
            <ItemContent>
              <ItemText>Cafe</ItemText>
              <Icon name="angle-right" size={24} color="#C8C7CC" />
            </ItemContent>
          </Item>

          <Item>
            <ItemIcon>
              <Icon name="paw" size={24} />
            </ItemIcon>
            <ItemContent>
              <ItemText>Dog Park</ItemText>
              <Icon name="angle-right" size={24} color="#C8C7CC" />
            </ItemContent>
          </Item>

          <Item>
            <ItemIcon>
              <Icon name="beer" size={24} />
            </ItemIcon>
            <ItemContent>
              <ItemText>Pub</ItemText>
              <Icon name="angle-right" size={24} color="#C8C7CC" />
            </ItemContent>
          </Item>

          <Item>
            <ItemIcon>
              <Icon name="globe" size={24} />
            </ItemIcon>
            <ItemContent style={cs.itemLast}>
              <ItemText>Space</ItemText>
              <Icon name="angle-right" size={24} color="#C8C7CC" />
            </ItemContent>
          </Item>
        </List>
      </Card>
    </Content>
  );
}
