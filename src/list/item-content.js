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
  line: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {
  line: true,
};

export default function ItemContent(props) {
  const itemNoLine = !props.line;
  return (
    <View
      {...props}
      style={[
        cs.itemContent,
        itemNoLine && cs.itemNoLine,
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}

ItemContent.propTypes = propTypes;
ItemContent.defaultProps = defaultProps;
