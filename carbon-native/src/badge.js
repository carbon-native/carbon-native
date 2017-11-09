import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { carbonStyles } from './styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 50,
  },
  text: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default function Badge(props) {
  const color = props.color;
  const bgColor = `${color}Bg`;
  const textColor = color !== 'light' && color !== 'stable' ? 'light' : null;

  return (
    <View {...props} style={[styles.base, bgColor && cs[bgColor], props.style]}>
      <Text style={[styles.text, textColor && cs[textColor]]}>
        {props.text}
      </Text>
    </View>
  );
}

Badge.propTypes = {
  color: PropTypes.string,
  style: PropTypes.any,
  text: PropTypes.string,
};
Badge.defaultProps = {
  color: 'stable',
};
