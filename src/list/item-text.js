import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  default: {
    flex: 1,
    marginVertical: 12,
    fontSize: 17,
    fontWeight: '400',
  },
});

export default function ItemText(props) {
  return (
    <Text {...props} style={[styles.default, props.style]}>
      {props.children}
      {props.children}
    </Text>
  );
}

ItemText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};
ItemText.defaultProps = {};
