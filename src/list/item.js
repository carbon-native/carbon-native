import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

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
  if (props.onPress) {
    return (
      <TouchableHighlight
        {...props}
        underlayColor={'#DADADA'}
        onPress={props.onPress}
      >
        <View style={[styles.default, props.style]}>{props.children}</View>
      </TouchableHighlight>
    );
  }
  return (
    <View>
      <View {...props} style={[styles.default, props.style]}>
        {props.children}
      </View>
    </View>
  );
}

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onPress: PropTypes.func,
  style: PropTypes.any,
};
Item.defaultProps = {};
