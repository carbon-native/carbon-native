import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import { carbonStyles } from '../styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onPress: PropTypes.func,
  style: PropTypes.any,
};

const defaultProps = {};

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: 15,
  backgroundColor: '#fff',
});

export default function Item(props) {
  if (props.onPress) {
    return (
      <TouchableHighlight
        {...props}
        underlayColor={'#DADADA'}
        onPress={props.onPress}
      >
        <View style={[styles, props.style]}>
          {props.children}
        </View>
      </TouchableHighlight>
    );
  }
  return (
    <View>
      <View {...props} style={[styles, props.style]}>
        {props.children}
      </View>
    </View>
  );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
