import React from 'react';
import { StyleSheet } from 'react-native';
import {
  carbonStyles,
  Content,
  List,
  Item,
  ItemContent,
  ItemText,
  ItemHeaderText,
  Toggle,
} from '../src/index.js';

const characters = [
  { name: 'Jon Snow', color: 'primary', value: true },
  { name: 'Daenerys Targaryen', color: 'energized', value: false },
  { name: 'Arya Stark', color: 'danger', value: true },
  { name: 'Tyrion Lannister', color: 'royal', value: true },
  { name: 'Sansa Stark', color: 'danger', value: false },
  { name: 'Khal Drogo', color: 'dark', value: true },
  { name: 'Cersei Lannister', color: 'energized', value: true },
  { name: 'Stannis Baratheon', color: 'royal', value: false },
  { name: 'Petyr Baelish', color: 'secondary', value: true },
  { name: 'Hodor', color: 'royal', value: false },
  { name: 'Catelyn Stark', color: 'dark', value: true },
  { name: 'Bronn', color: 'energized', value: false },
];

class ToggleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || false,
    };
  }

  render() {
    return (
      <Toggle
        {...this.props}
        value={this.state.value}
        onValueChange={value => this.setState({ value })}
      />
    );
  }
}

const cs = StyleSheet.create(carbonStyles);

export default function ToggleDemo() {
  return (
    <Content>
      <List>
        <Item style={cs.itemHeader}>
          <ItemContent line={false}>
            <ItemHeaderText>CHARACTERS</ItemHeaderText>
          </ItemContent>
        </Item>

        {characters.map((character, index) => (
          <Item key={index}>
            <ItemContent style={index === characters.length - 1 && cs.itemLast}>
              <ItemText>{character.name}</ItemText>
              <ToggleExample color={character.color} value={character.value} />
            </ItemContent>
          </Item>
        ))}
      </List>
    </Content>
  );
}
