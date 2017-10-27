import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


import {
  carbonStyles,
} from './styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  color: PropTypes.string,
  style: PropTypes.any,
  text: PropTypes.string,
};

const defaultProps = {
  color: 'stable',
};

export default function Badge(props) {
  const color = props.color;
  const bgColor = `${color}Bg`;
  const textColor = (color !== 'light' && color !== 'stable') ? 'light' : null;
  return (
    <View
      {...props}
      style={[cs.badge, bgColor && cs[bgColor], props.style]}
    >
      <Text style={[cs.badgeText, textColor && cs[textColor]]}>
        {props.text}
      </Text>
    </View>
  );
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
