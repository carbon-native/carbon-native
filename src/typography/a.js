import React from 'react';
import PropTypes from 'prop-types';
import { Linking, StyleSheet, Text } from 'react-native';
import Color from 'color';
import { colors } from '../styles';

const styles = StyleSheet.create({
  default: {},
});

export default function A(props) {
  const { children, color: $color, href, onPress, style, ...passProps } = props;
  const color = Color(colors[$color] || $color);
  const luminosTextColor = color.luminosity() < 0.5 ? '#fff' : '#000';
  const onPressAction = href ? () => Linking.openURL(href) : onPress;

  return (
    <Text
      style={[styles.default, { color }, style]}
      onPress={onPressAction}
      {...passProps}
    >
      {children}
    </Text>
  );
}

A.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  href: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
};
A.defaultProps = {
  color: 'primary',
  onPress: () => alert('Add an href prop with a url'),
};
