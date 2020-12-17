import React from "react";
import PropTypes from "prop-types";
import {
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";
import Color from "color";
import { colors } from "./styles";

const styles = StyleSheet.create({
  button: {
    borderRadius: 28,
    height: 56,
    width: 56,
    position: "absolute",
    bottom: 20,
    right: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
});

export default class FloatingActionButton extends React.Component {
  state = { active: false };
  highlight = () => this.setState({ active: true });
  unhighlight = () => this.setState({ active: false });

  render() {
    const {
      activeOpacity,
      buttonStyles,
      children,
      color: $color,
      containerStyles,
      onPress,
      pointerEvents,
      shadow: $shadow,
      underlayColor,
      ...passProps
    } = this.props;
    const { active } = this.state;

    const color = Color(colors[$color] || $color);
    const colorActive =
      color.luminosity() > 0.2
        ? color.darken(0.2).hex()
        : color.lighten(0.5).hex();

    const currentShadow = active
      ? {
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        }
      : {
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
        };

    const shadow = $shadow && currentShadow;
    const containerStyle = [styles.container, containerStyles];
    const buttonStyle = [
      styles.button,
      { backgroundColor: color.hex() },
      shadow,
      buttonStyles,
    ];

    return (
      <View pointerEvents={pointerEvents} style={containerStyle}>
        <TouchableHighlight
          activeOpacity={activeOpacity}
          onPress={onPress}
          underlayColor={underlayColor || colorActive}
          onShowUnderlay={this.highlight}
          onHideUnderlay={this.unhighlight}
          style={buttonStyle}
          {...passProps}
        >
          {children}
        </TouchableHighlight>
      </View>
    );
  }
}

FloatingActionButton.propTypes = {
  activeOpacity: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  color: PropTypes.string,
  icon: PropTypes.any,
  onPress: PropTypes.func,
  shadow: PropTypes.bool,
  underlayColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

FloatingActionButton.defaultProps = {
  activeOpacity: 1,
  color: "primary",
  onPress: () => alert("Attach an onPress prop"),
  pointerEvents: "box-none",
  shadow: true,
  underlayColor: null,
};
