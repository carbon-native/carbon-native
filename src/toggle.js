import React, {
  PropTypes,
} from 'react';

import {
  Switch,
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
  const color = colors[props.color];
  return (
    <Switch
      tintColor={'#E5E5E5'}
      onTintColor={color}
      {...props}
      style={[props.style]}
    />
  );
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;
