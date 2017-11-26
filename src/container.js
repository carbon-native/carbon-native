import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  default: {
    flex: 1,
  },
});

export default function Container(props) {
  const { children, padding: $padding, style, ...passProps } = props;

  let padding;
  if ($padding === true) padding = 10;
  else if ($padding === false) padding = 0;
  else padding = $padding;

  return (
    <View style={[styles.default, { padding }, style]} {...passProps}>
      {children}
    </View>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  style: PropTypes.any,
};
Container.defaultProps = {
  padding: false,
};
