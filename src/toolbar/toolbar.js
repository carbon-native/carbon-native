import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import Color from "color";
import { colors } from "../styles";

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 44,
  },
  header: {
    paddingTop: 20,
    height: 64,
  },
  footer: {
    // stuff
  },
});

export default function Toolbar(props) {
  const {
    children,
    color: $color,
    footer,
    header,
    style,
    title,
    text,
    textStyles,
    ...passProps
  } = props;
  const color = Color(colors[$color] || $color);
  const luminosTextColor = color.luminosity() < 0.5 ? "#fff" : "#000";
  const toolbarStyle = [
    styles.base,
    header && styles.header,
    footer && styles.footer,
    { backgroundColor: color.hex() },
    style,
  ];
  const content = children || (
    <Text style={[{ color: luminosTextColor }, textStyles]}>
      {title || text}
    </Text>
  );

  return (
    <View style={toolbarStyle} {...passProps}>
      {content}
    </View>
  );
}

Toolbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any,
  text: PropTypes.string,
  title: PropTypes.string,
};
Toolbar.defaultProps = {
  color: "stable",
};
