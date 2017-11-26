import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { colors } from '../styles';

export default function Mark(props) {
  const { children, color, style, ...passProps } = props;
  const backgroundColor = colors[color] || color;
  const markStyle = [{ backgroundColor }, style];

  return (
    <Text style={markStyle} {...passProps}>
      {' '}
      {children}{' '}
    </Text>
  );
}

Mark.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  style: PropTypes.any,
};
Mark.defaultProps = {
  color: '#FEF7C1',
};
