import React, {
  PropTypes,
} from 'react';

import {
  SliderIOS,
} from 'react-native';

import {
  colors,
} from './styles';

const propTypes = {
  color: PropTypes.string,
  style: PropTypes.any,
};

const defaultProps = {
  color: 'stable',
};

export default function Toggle(props) {
  // const color = colors[props.color];
  return (
    <SliderIOS
      {...props}
      style={[props.style]}
    />
  );
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;
