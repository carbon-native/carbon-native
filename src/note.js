import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { carbonStyles } from './styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  fontSize: 14,
  color: '#AEACB4',
});

export default function Note(props) {
  return (
    <Text {...props} style={[styles, props.style]}>
      {props.children}
    </Text>
  );
}

Note.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};
Note.defaultProps = {};
