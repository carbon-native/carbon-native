import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  carbonStyles,
} from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {};

export default function Toolbar(props) {
  const color = (props.color) ? props.color : null;
  const bgColor = (color) ? `${color}Bg` : null;
  const header = (props.header) ? 'toolbarHeader' : null;
  const footer = (props.footer) ? 'toolbarFooter' : null;
  return (
    <View
      {...props}
      style={[
        cs.toolbar, header &&
        cs[header], footer &&
        cs[footer], bgColor &&
        cs[bgColor],
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;
