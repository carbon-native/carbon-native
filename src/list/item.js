import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  TouchableHighlight,
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
  onPress: PropTypes.func,
  style: PropTypes.any,
};

const defaultProps = {};

export default function Item(props) {
  if (props.onPress) {
    return (
      <TouchableHighlight
        {...props}
        underlayColor={'#DADADA'}
        onPress={props.onPress}
      >
        <View style={[cs.item, props.style]}>
          {props.children}
        </View>
      </TouchableHighlight>
    );
  }
  return (
    <View>
      <View
        {...props}
        style={[cs.item, props.style]}
      >
        {props.children}
      </View>
    </View>
  );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
