import React from 'react';

import { Modal, StyleSheet } from 'react-native';

import {
  carbonStyles,
  Toolbar,
  ToolbarTitle,
  Button,
  Container,
  Content,
  Item,
  ItemContent,
  ItemText,
  List,
} from '../src/index.js';

const cs = StyleSheet.create(carbonStyles);

export default class ModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      transparent: false,
      animationType: 'slide',
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    return (
      <Content padding>
        <Button color="primary" text="Press me!" onPress={this.toggleModal} />
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <Toolbar header color="primary">
            <ToolbarTitle color="light">Look at Me</ToolbarTitle>
          </Toolbar>
          <Content paddding style={cs.lightBg}>
            <List>
              <Item>
                <ItemContent>
                  <ItemText>Mark Zuckerberg</ItemText>
                </ItemContent>
              </Item>
              <Item>
                <ItemContent>
                  <ItemText>Age</ItemText>
                  <ItemText style={cs.textRight}>45</ItemText>
                </ItemContent>
              </Item>
              <Item>
                <ItemContent style={cs.itemLast}>
                  <ItemText>Height</ItemText>
                  <ItemText style={cs.textRight}>6'1"</ItemText>
                </ItemContent>
              </Item>
            </List>
            <Container padding>
              <Button color="stable" onPress={this.toggleModal}>
                Close
              </Button>
            </Container>
          </Content>
        </Modal>
      </Content>
    );
  }
}
