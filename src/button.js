import React from 'react';
import PropTypes from 'prop-types';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import Color from 'color';

import { colors } from './styles';

const {
  light,
  stable,
  primary,
  calm,
  secondary,
  energized,
  danger,
  royal,
  dark,
} = colors;

const sizes = {
  xs: 6,
  sm: 12,
  md: 14,
  lg: 20,
  xl: 20,
};

const cs = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default class Button extends React.Component {
  state = { active: false };
  highlight = () => this.setState({ active: true });
  unhighlight = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const {
      activeOpacity,
      block: $block,
      children,
      clear,
      color: $color,
      full,
      onPress,
      outline,
      round,
      shadow: $shadow,
      size: $size,
      style,
      text,
      underlayColor,
      ...passProps
    } = this.props;

    const size = sizes[$size] || $size;
    const color = colors[$color] ? Color(colors[$color]) : Color($color);
    const luminosity = color.luminosity();
    const colorDark = luminosity > 0.2 ? color.darken(0.2) : color.lighten(0.5);
    const luminosTextColor = luminosity < 0.5 ? '#fff' : '#000';

    const backgroundColor = clear || outline ? 'transparent' : color;
    const borderColor = outline ? color : backgroundColor;
    const borderRadius = full ? 0 : round ? 50 : 2;
    const borderWidth = outline ? 1 : 0;
    const width = full || $block ? '100%' : 'auto';

    let padding = { paddingHorizontal: 12, paddingVertical: 12 };
    if (size > 14) padding = { padding: 16 };
    if (size === 12) padding = { paddingHorizontal: 4, paddingVertical: 8 };
    if (size === 6) padding = { paddingHorizontal: 10, paddingVertical: 4 };

    const shadow = $shadow &&
      !clear &&
      !outline && {
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      };
    let textColor = luminosTextColor;
    if (clear) textColor = color;
    if (outline) textColor = active ? luminosTextColor : color;

    const buttonStyle = [
      cs.button,
      { backgroundColor },
      { borderColor },
      { borderRadius },
      { borderWidth },
      padding,
      shadow,
      style,
      { width },
    ];

    const textStyle = { color: textColor, fontSize: size };

    const content = children || <Text style={textStyle}>{text}</Text>;

    if (clear) {
      return (
        <TouchableOpacity onPress={onPress} style={buttonStyle} {...passProps}>
          <View>{content}</View>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableHighlight
        activeOpacity={activeOpacity}
        onPress={onPress}
        style={buttonStyle}
        underlayColor={underlayColor || colorDark}
        onShowUnderlay={this.highlight}
        onHideUnderlay={this.unhighlight}
        {...passProps}
      >
        <View>{content}</View>
      </TouchableHighlight>
    );

    return (
      <TouchableHighlight
        activeOpacity={activeOpacity}
        onPress={onPress}
        style={buttonStyle}
        underlayColor={underlayColor || colorDark}
        {...passProps}
      >
        <View>{content}</View>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  activeOpacity: PropTypes.number,
  block: PropTypes.bool,
  children: PropTypes.node,
  clear: PropTypes.bool,
  color: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onPress: PropTypes.func,
  outline: PropTypes.bool,
  round: PropTypes.bool,
  shadow: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  text: PropTypes.string,
  underlayColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Button.defaultProps = {
  activeOpacity: 1,
  block: false,
  children: null,
  clear: false,
  color: colors.stable,
  onPress: () => alert('Attach an onPress prop'),
  outline: false,
  round: false,
  shadow: true,
  size: sizes.md,
  style: null,
  text: 'Press Me',
  underlayColor: null,
};
