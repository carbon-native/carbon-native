import React from 'react';

import {
  Platform,
  StyleSheet,
  View,
  Text,
  AlertIOS,
  Alert,
} from 'react-native';

import { carbonStyles, Content, Button } from '../src/index.js';

const cs = StyleSheet.create(carbonStyles);

const alertMessage =
  'Your friend, Elon Musk, just accepted your friend request!';
const confirmMessage =
  'Do you agree to build something awesome with Carbon Native?';

export default function AlertsDemo() {
  return (
    <Content padding>
      <SimpleAlertExampleBlock />
      <PromptOptions />
    </Content>
  );
}

export function SimpleAlertExampleBlock() {
  return (
    <View>
      <View style={cs.marginBottom}>
        <Button
          color="secondary"
          text="Show Basic Alert"
          onPress={() => Alert.alert('Alert Title', alertMessage)}
        />
      </View>

      <View style={cs.marginBottom}>
        <Button
          color="secondary"
          text="Show Confirm Alert"
          onPress={() =>
            Alert.alert('Alert Title', confirmMessage, [
              { text: 'Disagree' },
              { text: 'Agree' },
            ])
          }
        />
      </View>
    </View>
  );
}

export class PromptOptions extends React.Component {
  constructor(props) {
    super(props);
    this.saveResponse = this.saveResponse.bind(this);
    this.state = {
      promptValue: undefined,
    };
  }

  saveResponse(promptValue) {
    this.setState({ promptValue: JSON.stringify(promptValue) });
  }

  render() {
    if (Platform.OS !== 'ios') {
      return null;
    }
    return (
      <View>
        <View style={cs.marginBottom}>
          <Button
            color="secondary"
            text="Show Prompt Alert"
            onPress={() =>
              AlertIOS.prompt('Type a value', null, this.saveResponse)
            }
          />
        </View>

        <Text>Prompt value: {this.state.promptValue}</Text>
      </View>
    );
  }
}
