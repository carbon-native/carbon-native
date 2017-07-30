import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
  },
  header: {
    paddingTop: 20,
    height: 64,
  },
  footer: {
    // stuff
  },
});

export default function Toolbar(props) {
  const header = props.header ? 'header' : null;
  const footer = props.footer ? 'footer' : null;
  const color = props.color ? props.color : null;
  const bgColor = color ? `${color}Bg` : null;

  return (
    <View
      {...props}
      style={[
        styles.base,
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

Toolbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any,
};
Toolbar.defaultProps = {};
