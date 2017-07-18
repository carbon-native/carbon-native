import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { carbonStyles } from './styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  padding: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {};

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({ flex: 1 });

export default function Container(props) {
  return (
    <View {...props} style={[styles, props.padding && cs.padding, props.style]}>
      {props.children}
    </View>
  );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
