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
  fontSize: 14,
  fontWeight: '500',
});

export default function H5(props) {
  return (
    <Text {...props} style={[styles, props.style]}>
      {props.children}
    </Text>
  );
}

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;
