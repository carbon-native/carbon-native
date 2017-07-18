import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { carbonStyles } from '../styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};

const defaultProps = {};

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  flex: 1,
  marginVertical: 12,
  fontSize: 17,
  fontWeight: '400',
});

export default function ItemText(props) {
  return (
    <Text {...props} style={[styles, props.style]}>
      {props.children}
    </Text>
  );
}

ItemText.propTypes = propTypes;
ItemText.defaultProps = defaultProps;
