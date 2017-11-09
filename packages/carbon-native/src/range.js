import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'react-native';
import { colors } from './styles';

export default function Toggle(props) {
  // const color = colors[props.color];

  return <Slider {...props} style={[props.style]} />;
}

Toggle.propTypes = {
  color: PropTypes.string,
  style: PropTypes.any,
};
Toggle.defaultProps = {
  color: 'stable',
};
