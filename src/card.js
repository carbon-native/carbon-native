import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { carbonStyles } from './styles';

const cs = StyleSheet.create(carbonStyles);

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
  return (
    <View
      shadowColor="rgba(0, 0, 0, 0.3)"
      shadowOffset={{ width: 0, height: 1 }}
      shadowOpacity={1}
      shadowRadius={2}
      {...props}
      style={[styles.default, props.style]}
    >
      {props.children}
    </View>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: PropTypes.any,
};
Card.defaultProps = {};
