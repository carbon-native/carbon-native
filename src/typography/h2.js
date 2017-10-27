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

export default function H2(props) {
  return (
    <Text
      {...props}
      style={[cs.h2, props.style]}
    >
      {props.children}
    </Text>
  );
}

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;
