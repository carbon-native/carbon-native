import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import Color from 'color';
import { colors } from './styles';

export default function FloatingActionButton(props) {
  const {
    buttonStyles,
    children,
    color: $color,
    containerStyles,
    onPress,
    pointerEvents,
    shadow: $shadow,
    ...passProps
  } = props;

  const color = Color(colors[$color] || $color);

  const shadow = $shadow && {
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  };

  return (
    <View
      pointerEvents={pointerEvents}
      style={[
        {
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        },
        containerStyles,
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            backgroundColor: color,
            borderRadius: 28,
            height: 56,
            width: 56,
            position: 'absolute',
            bottom: 20,
            right: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          shadow,
          buttonStyles,
        ]}
        {...passProps}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
}

FloatingActionButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  icon: PropTypes.any,
  onPress: PropTypes.func,
  shadow: PropTypes.bool,
};

FloatingActionButton.defaultProps = {
  color: 'primary',
  onPress: () => alert('Attach an onPress prop'),
  pointerEvents: 'box-none',
  shadow: true,
};
