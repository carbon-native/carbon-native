import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  default: {
    // alignSelf: 'stretch',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    backgroundColor: '#fff',
  },
});

export default function List(props) {
  return (
    <View {...props} style={[styles.default, props.style]}>
      {props.children}
    </View>
  );
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};
List.defaultProps = {};
