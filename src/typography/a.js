import React from 'react';
import PropTypes from 'prop-types';
import { Linking, StyleSheet, Text } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  default: {},
});

export default function A(props) {
  const { children, color: $color, href, onPress, style, ...passProps } = props;
  const color = colors[$color] || $color;
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
