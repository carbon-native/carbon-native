import React, {
  PropTypes,
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

export default function ToolbarRight(props) {
  return (
    <Container
      {...props}
      style={[
        cs.toolbarRight,
        props.style,
      ]}
    >
      {props.children}
    </Container>
  );
}

ToolbarRight.propTypes = propTypes;
ToolbarRight.defaultProps = defaultProps;
