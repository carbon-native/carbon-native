import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
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

export default function ToolbarTitle(props) {
  const color = (props.color) ? (props.color) : null;
  return (
    <Text
      {...props}
      style={[
        cs.toolbarTitle,
        color && cs[color],
      ]}
    >
      {props.children}
    </Text>
  );
}

ToolbarTitle.propTypes = propTypes;
ToolbarTitle.defaultProps = defaultProps;
