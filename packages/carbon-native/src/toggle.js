import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-native';
import { colors } from './styles';

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

Toggle.propTypes = {
  color: PropTypes.string,
  style: PropTypes.any,
};
Toggle.defaultProps = {
  color: 'stable',
};
