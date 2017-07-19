import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  carbonStyles,
  Content,
  Range,
} from 'carbon-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const cs = StyleSheet.create(carbonStyles);

class RangeExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0.5,
    };
  }

  render() {
    return (
      <View style={[cs.container, cs.padding]}>
        <Range
          {...this.props}
          value={this.state.value}
          onValueChange={(value) => this.setState({ value })}
        />
      </View>
    );
  }
}

export default function RangeDemo() {
  return (
    <Content padding>
      <View style={[cs.row, cs.padding, { alignItems: 'center' }]}>
        <Icon name="volume-down" size={24} />
        <RangeExample />
        <Icon name="volume-up" size={24} />
      </View>

      <RangeExample
        minimumTrackTintColor={carbonStyles.secondary.color}
      />

      <RangeExample
        minimumTrackTintColor={carbonStyles.danger.color}
      />

      <RangeExample
        minimumTrackTintColor={carbonStyles.royal.color}
      />

      <RangeExample
        minimumTrackTintColor={carbonStyles.energized.color}
      />

      <RangeExample
        minimumTrackTintColor={carbonStyles.calm.color}
      />

      <RangeExample
        minimumTrackTintColor={'red'}
        maximumTrackTintColor={'green'}
      />
    </Content>
  );
}
