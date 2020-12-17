import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import Color from "color";
import { colors } from "./styles";

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 50,
  },
  text: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default function Badge(props) {
  const { children, color: $color, style, textStyles, ...passProps } = props;
  const color = Color(colors[$color] || $color);
  const luminosTextColor = color.luminosity() < 0.5 ? "#fff" : "#000";
  const content = children || (
    <Text style={[styles.text, { color: luminosTextColor }, textStyles]}>
      {props.text}
    </Text>
  );

  return (
    <View
      style={[styles.base, { backgroundColor: color.hex() }, style]}
      {...passProps}
    >
      {content}
    </View>
  );
}

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  style: PropTypes.any,
  text: PropTypes.string,
};
Badge.defaultProps = {
  color: "primary",
};
