import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  default: {
    color: colors.primary,
  },
});

export default function A(props) {
  return (
    <Text {...props} style={[styles.default, props.style]}>
      {props.children}
    </Text>
  );
}

A.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
A.defaultProps = {};
