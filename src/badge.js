import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous-primitives';
// import { StyleSheet, Text, View } from 'react-native';
import { carbonStyles as cs } from './styles';

const styles = {
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
};

export default function Badge(props) {
  const color = props.color;
  const bgColor = `${color}Bg`;
  const textColor = color !== 'light' && color !== 'stable' ? 'light' : null;

  const View = glamorous.view({
    ...styles.base,
    ...(bgColor && cs[bgColor]),
    ...props.style,
  });

  const Text = glamorous.text({
    ...styles.text,
    ...(textColor && cs[textColor]),
  });

  return (
    <View {...props}>
      <Text>{props.text}</Text>
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
