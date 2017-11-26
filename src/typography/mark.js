import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export default function Mark(props) {
  const backgroundColor = props.color || '#FEF7C1';
  const style = [{ backgroundColor }, props.style];

  return (
    <Text {...props} style={style}>
      {' '}
      {props.children}{' '}
    </Text>
  );
}

Mark.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
Mark.defaultProps = {};
