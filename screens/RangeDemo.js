import React from "react";
import { StyleSheet, View } from "react-native";
import { carbonStyles, Content, Range } from "../src/index.js";
import Icon from "@expo/vector-icons/FontAwesome";

const cs = StyleSheet.create(carbonStyles);

export class RangeExample extends React.Component {
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
      <View style={[cs.row, cs.paddingHorizontal, { alignItems: "center" }]}>
        <Icon name="volume-down" size={24} />
        <RangeExample />
        <Icon name="volume-up" size={24} />
      </View>
      <RangeExample color={carbonStyles.secondary.color} />
      <RangeExample color={carbonStyles.danger.color} />
      <RangeExample color={carbonStyles.royal.color} />
      <RangeExample color={carbonStyles.energized.color} />
      <RangeExample color={carbonStyles.calm.color} />
      <RangeExample color={"red"} maximumTrackTintColor={"green"} />
    </Content>
  );
}
