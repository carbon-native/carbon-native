import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  default: {
    // margin: 10,
    elevation: 2,
    marginBottom: 20,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
});

export default function Card(props) {
  const { children, padding: $padding, style, ...passProps } = props;

  let padding = $padding;
  if (padding === true) padding = 15;
  if (padding === false) padding = 0;

  const cardStyle = [styles.default, { padding }, style];

  return (
    <View
      shadowColor="rgba(0, 0, 0, 0.3)"
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={1}
      shadowRadius={2}
      style={cardStyle}
      {...passProps}
    >
      {children}
    </View>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  padding: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  style: PropTypes.any,
};
Card.defaultProps = {
  padding: false,
};
