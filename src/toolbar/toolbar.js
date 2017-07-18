import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { carbonStyles } from '../styles';

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

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
  toolbarHeader: {
    paddingTop: 20,
    height: 64,
  },
  toolbarFooter: {
    // stuff
  },
});

export default function Toolbar(props) {
  const header = props.header ? 'toolbarHeader' : null;
  const footer = props.footer ? 'toolbarFooter' : null;
  const color = props.color ? props.color : null;
  const bgColor = color ? `${color}Bg` : null;
  return (
    <View
      {...props}
      style={[
        styles.toolbar,
        header && styles[header],
        footer && styles[footer],
        bgColor && cs[bgColor],
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;
