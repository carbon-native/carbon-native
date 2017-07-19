import React, {
  Component,
} from 'react';

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
  ItemHeaderText,
  Toggle,
} from 'carbon-native';
const cs = StyleSheet.create(carbonStyles);

export default class ToggleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frodo: true,
      sam: false,
      eowyn: true,
      legolas: true,
      gimli: false,
      saruman: true,
      gandalf: true,
      arwen: false,
      treebeard: true,
      boromir: false,
      gollum: true,
      galadriel: false,
    };
  }

  render() {
    return (
      <Content>
        <List>
          <Item style={cs.itemHeader}>
            <ItemContent line={false}>
              <ItemHeaderText>CHARACTERS</ItemHeaderText>
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Frodo Baggins</ItemText>
              <Toggle
                color="primary"
                onValueChange={(value) => this.setState({ frodo: value })}
                value={this.state.frodo}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Sam</ItemText>
              <Toggle
                color="energized"
                onValueChange={(value) => this.setState({ sam: value })}
                value={this.state.sam}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Eowyn</ItemText>
              <Toggle
                color="danger"
                onValueChange={(value) => this.setState({ eowyn: value })}
                value={this.state.eowyn}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Legolas</ItemText>
              <Toggle
                color="royal"
                onValueChange={(value) => this.setState({ legolas: value })}
                value={this.state.legolas}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Gimli</ItemText>
              <Toggle
                color="danger"
                onValueChange={(value) => this.setState({ gimli: value })}
                value={this.state.gimli}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Saruman</ItemText>
              <Toggle
                color="dark"
                onValueChange={(value) => this.setState({ saruman: value })}
                value={this.state.saruman}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Gandalf</ItemText>
              <Toggle
                color="energized"
                onValueChange={(value) => this.setState({ gandalf: value })}
                value={this.state.gandalf}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Arwen</ItemText>
              <Toggle
                color="royal"
                onValueChange={(value) => this.setState({ arwen: value })}
                value={this.state.arwen}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Treebeard</ItemText>
              <Toggle
                color="secondary"
                onValueChange={(value) => this.setState({ treebeard: value })}
                value={this.state.treebeard}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Boromir</ItemText>
              <Toggle
                color="royal"
                onValueChange={(value) => this.setState({ boromir: value })}
                value={this.state.boromir}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent>
              <ItemText>Gollum</ItemText>
              <Toggle
                color="dark"
                onValueChange={(value) => this.setState({ gollum: value })}
                value={this.state.gollum}
              />
            </ItemContent>
          </Item>

          <Item>
            <ItemContent style={cs.itemLast}>
              <ItemText>Galadriel</ItemText>
              <Toggle
                color="energized"
                onValueChange={(value) => this.setState({ galadriel: value })}
                value={this.state.galadriel}
              />
            </ItemContent>
          </Item>
        </List>
      </Content>
    );
  }
}
