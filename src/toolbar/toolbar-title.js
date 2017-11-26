import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Platform } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  default: {
    ...Platform.select({
      ios: { fontSize: 17 },
      android: { fontSize: 20 },
    }),
    fontWeight: '600',
  },
});

export default function ToolbarTitle(props) {
  const { children, color: $color, style, ...passProps } = props;
  const color = colors[$color] || $color;

  return (
    <Text style={[styles.default, { color }, style]} {...passProps}>
      {children}
    </Text>
  );
}

ToolbarTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  style: PropTypes.any,
};
ToolbarTitle.defaultProps = {
  color: '#000',
};
