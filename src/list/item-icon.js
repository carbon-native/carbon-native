import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  default: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    marginRight: 14,
  },
});

export default function ItemIcon(props) {
  const { children, style, ...passProps } = props;

  return (
    <View style={[styles.default, style]} {...props}>
      {children}
    </View>
  );
}

ItemIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  style: PropTypes.any,
};
ItemIcon.defaultProps = {};
