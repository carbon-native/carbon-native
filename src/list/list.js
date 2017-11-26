import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  default: {
    // alignSelf: 'stretch',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    backgroundColor: '#fff',
  },
});

export default function List(props) {
  const { children, style, ...passProps } = props;

  return (
    <View style={[styles.default, style]} {...passProps}>
      {children}
    </View>
  );
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
List.defaultProps = {};
