import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  carbonStyles,
} from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

export default function List(props) {
  return (
    <View
      {...props}
      style={[cs.list, props.style]}
    >
      {props.children}
    </View>
  );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;
