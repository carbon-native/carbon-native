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

export default function ItemIcon(props) {
  return (
    <View
      {...props}
      style={[cs.itemIcon, props.style]}
    >
      {props.children}
    </View>
  );
}

ItemIcon.propTypes = propTypes;
ItemIcon.defaultProps = defaultProps;
