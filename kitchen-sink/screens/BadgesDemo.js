import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import {
  carbonStyles,
  Content,
  List,
  Item,
  ItemContent,
  ItemText,
  Badge,
} from 'carbon-native';
const cs = StyleSheet.create(carbonStyles);

export default function BadgesDemo() {
  return (
    <Content>
      <List>
        <Item>
          <ItemContent>
            <ItemText>Battle Toads</ItemText>
            <Badge text="4" color="primary" />
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Contra</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Duck Tales</ItemText>
          </ItemContent>
        </Item>

        <Item>
          <ItemContent>
            <ItemText>Mega Man</ItemText>
            <Badge text="450k" color="secondary" />
          </ItemContent>
        </Item>

        <Item>
          <ItemContent style={cs.itemLast}>
            <ItemText>The Legend of Zelda</ItemText>
          </ItemContent>
        </Item>
      </List>
    </Content>
  );
}
