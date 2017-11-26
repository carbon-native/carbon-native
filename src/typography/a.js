import React from 'react';
import PropTypes from 'prop-types';
import { Linking, StyleSheet, Text } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  default: {
    color: colors.primary,
  },
});

export default function A(props) {
  const { children, href, onPress, style, ...passProps } = props;
  const onPressAction = href ? () => Linking.openURL(href) : onPress;

  return (
    <Text
      style={[styles.default, style]}
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
  href: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any,
};
A.defaultProps = {
  onPress: () => alert('Add an href prop with a url'),
};
