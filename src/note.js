import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { colors } from './styles';

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
  },
});

export default function Note(props) {
  const { children, color: $color, style, ...passProps } = props;
  const color = colors[$color] || $color;

  return (
    <Text style={[styles.default, { color }, style]} {...passProps}>
      {children}
    </Text>
  );
}

Note.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  style: PropTypes.any,
};
Note.defaultProps = {
  color: '#AEACB4',
};
