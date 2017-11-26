import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

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
  const { children, line, style, ...passProps } = props;

  return (
    <View style={[styles.base, !line && styles.noLine, style]} {...passProps}>
      {children}
    </View>
  );
}

ItemContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  line: PropTypes.bool,
  style: PropTypes.any,
};
ItemContent.defaultProps = {
  line: true,
};
