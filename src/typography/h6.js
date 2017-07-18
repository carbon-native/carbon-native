import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

const styles = StyleSheet.create({
  marginBottom: 10,
  fontSize: 12,
  fontWeight: '500',
});

export default function H6(props) {
  return (
    <Text {...props} style={[styles, props.style]}>
      {props.children}
    </Text>
  );
}

H6.propTypes = propTypes;
H6.defaultProps = defaultProps;
