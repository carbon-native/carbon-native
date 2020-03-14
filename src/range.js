import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@react-native-community/slider';
import { colors } from './styles';

export default function Range(props) {
  const { color: $color, style, ...passProps } = props;
  const color = colors[$color] || $color;

  return (
    <Slider minimumTrackTintColor={color} style={[style]} {...passProps} />
  );
}

Range.propTypes = {
  color: PropTypes.string,
  style: PropTypes.any,
};
Range.defaultProps = {
  color: 'primary',
};
