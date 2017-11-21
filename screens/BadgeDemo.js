import React from 'react';
import { StyleSheet } from 'react-native';
import {
  carbonStyles,
  Content,
  List,
  Item,
  ItemContent,
  ItemText,
  Badge,
} from '../src/index.js';

const cs = StyleSheet.create(carbonStyles);

const items = [
  {
    text: 'Battle Toads',
    badge: { text: '4', color: 'primary' },
  },
  { text: 'Contra' },
  { text: 'Duck Tales' },
  {
    text: 'Mega Man',
    badge: { text: '450k', color: 'secondary' },
  },
  { text: 'The Legend of Zelda' },
];

export default function BadgeDemo() {
  return (
    <Content>
      <List>
        {items.map((item, index) => (
          <Item key={item.text}>
            <ItemContent style={index === items.length - 1 && cs.itemLast}>
              <ItemText>{item.text}</ItemText>
              {item.badge && (
                <Badge text={item.badge.text} color={item.badge.color} />
              )}
            </ItemContent>
          </Item>
        ))}
      </List>
    </Content>
  );
}
