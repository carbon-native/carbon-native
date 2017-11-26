import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'react-native';
import { colors } from './styles';

export default function Toggle(props) {
  const { color: $color, style, ...passProps } = props;
  const color = colors[$color] || $color;

  return <Slider style={[style]} {...passProps} />;
}

Toggle.propTypes = {
  color: PropTypes.string,
  style: PropTypes.any,
};
Toggle.defaultProps = {
  color: 'stable',
};
