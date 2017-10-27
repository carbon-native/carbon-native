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

export default function P(props) {
  return (
    <Text
      {...props}
      style={[cs.p, props.style]}
    >
      {props.children}
    </Text>
  );
}

P.propTypes = propTypes;
P.defaultProps = defaultProps;
