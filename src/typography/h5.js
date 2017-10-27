import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
} from 'react-native';

import {
  carbonStyles,
} from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

export default function H5(props) {
  return (
    <Text
      {...props}
      style={[cs.h5, props.style]}
    >
      {props.children}
    </Text>
  );
}

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;
