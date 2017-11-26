import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  default: {
    flex: 1,
    marginVertical: 12,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default function ItemHeaderText(props) {
  const { children, style, ...passProps } = props;

  return (
    <Text style={[styles.default, style]} {...passProps}>
      {children}
    </Text>
  );
}

ItemHeaderText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
ItemHeaderText.defaultProps = {};
