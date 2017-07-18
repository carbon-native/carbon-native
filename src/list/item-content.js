import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { carbonStyles } from '../styles';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  line: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {
  line: true,
};

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD',
  },
  noLine: {
    borderBottomColor: 'transparent',
  },
});

export default function ItemContent(props) {
  const itemNoLine = !props.line;
  return (
    <View
      {...props}
      style={[styles.base, itemNoLine && styles.noLine, props.style]}
    >
      {props.children}
    </View>
  );
}

ItemContent.propTypes = propTypes;
ItemContent.defaultProps = defaultProps;
