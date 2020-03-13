import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';
import Color from 'color';
import { colors } from './styles';

export default function Toggle(props) {
  const { color: $color, style, tintColor: $tintColor, ...passProps } = props;
  const color = colors[$color] || $color;
  const tintColor = colors[$tintColor] || $tintColor;

  return (
    <Switch
      trackColor={{ true: color, false: tintColor }}
      style={[style]}
      {...passProps}
    />
  );
}

Toggle.propTypes = {
  color: PropTypes.string,
  tintColor: PropTypes.string,
  style: PropTypes.any,
};
Toggle.defaultProps = {
  color: null,
  tintColor: null,
};
