import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  default: {
    flex: 1,
  },
});

export default function Content(props) {
  const { children, padding: $padding, scroll, style, ...passProps } = props;

  let padding = $padding;
  if (padding === true) padding = 10;
  if (padding === false) padding = 0;

  const contentStyle = [styles.default, { padding }, style];

  if (scroll) {
    return (
      <ScrollView style={contentStyle} {...passProps}>
        {children}
      </ScrollView>
    );
  }
  return (
    <View style={contentStyle} {...passProps}>
      {children}
    </View>
  );
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  scroll: PropTypes.bool,
  style: PropTypes.any,
};
Content.defaultProps = {
  padding: false,
  scroll: true,
};
