import React, {PropTypes} from 'react';
import {
  StyleSheet,
} from 'react-native';

import {
  carbonStyles,
  Container,
} from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  color: PropTypes.number,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any,
};

const defaultProps = {};

export default function ToolbarLeft(props) {
  return (
    <Container
      {...props}
      style={[
        cs.toolbarLeft,
        props.style,
      ]}
    >
      {props.children}
    </Container>
  );
}

ToolbarLeft.propTypes = propTypes;
ToolbarLeft.defaultProps = defaultProps;
