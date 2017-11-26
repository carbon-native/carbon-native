import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  default: {
    flex: 1,
    marginVertical: 12,
    fontSize: 17,
    fontWeight: '400',
  },
});

export default function ItemText(props) {
  const { children, style, ...passProps } = props;

  return (
    <Text style={[styles.default, style]} {...passProps}>
      {children}
    </Text>
  );
}

ItemText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
ItemText.defaultProps = {};
