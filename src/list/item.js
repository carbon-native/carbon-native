import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
  default: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: '#fff',
  },
});

export default function Item(props) {
  const { children, onPress, style, underlayColor, ...passProps } = props;
  if (onPress) {
    return (
      <TouchableHighlight
        underlayColor={underlayColor}
        onPress={onPress}
        {...passProps}
      >
        <View style={[styles.default, style]}>{children}</View>
      </TouchableHighlight>
    );
  }
  return (
    <View>
      <View style={[styles.default, style]} {...passProps}>
        {children}
      </View>
    </View>
  );
}

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  onPress: PropTypes.func,
  style: PropTypes.any,
  underlayColor: PropTypes.any,
};
Item.defaultProps = {
  underlayColor: '#DADADA',
};
