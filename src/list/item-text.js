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
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

export default function ItemText(props) {
  return (
    <Text
      {...props}
      style={[cs.itemText, props.style]}
    >
      {props.children}
    </Text>
  );
}

ItemText.propTypes = propTypes;
ItemText.defaultProps = defaultProps;
