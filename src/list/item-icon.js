import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  marginRight: 14,
});

export default function ItemIcon(props) {
  return (
    <View {...props} style={[styles, props.style]}>
      {props.children}
    </View>
  );
}

ItemIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};
ItemIcon.defaultProps = {};
