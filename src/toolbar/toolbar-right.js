import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
  overflow: 'hidden',
  paddingVertical: 8,
  paddingLeft: 6,
});

export default function ToolbarRight(props) {
  return (
    <View {...props} style={[styles, props.style]}>
      {props.children}
    </View>
  );
}

ToolbarRight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.number,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any,
};
ToolbarRight.defaultProps = {};
