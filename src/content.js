import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View } from 'react-native';
import { carbonStyles } from './styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({ flex: 1 });

export default function Content(props) {
  const contentStyle = [styles, props.padding && cs.padding, props.style];

  if (props.scroll === true) {
    return (
      <ScrollView {...props} style={contentStyle}>
        {props.children}
      </ScrollView>
    );
  }
  return (
    <View {...props} style={contentStyle}>
      {props.children}
    </View>
  );
}

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  padding: PropTypes.bool,
  scroll: PropTypes.bool,
  style: PropTypes.any,
};
Content.defaultProps = {
  scroll: true,
};
