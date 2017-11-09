import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { carbonStyles, colors } from './styles';

const cs = StyleSheet.create(carbonStyles);

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 2,
  },
  outline: {
    borderWidth: 1,
  },
  clear: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  round: {
    borderRadius: 50,
  },
  full: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
  },
  btnXsm: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  btnSm: {
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  btnTextSm: {
    fontSize: 12,
  },
  btnLg: {
    padding: 16,
  },
  btnTextLg: {
    fontSize: 20,
  },
});

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.highlight = this.highlight.bind(this);
    this.unhighlight = this.unhighlight.bind(this);
  }

  getTextColor(color, clear, outline) {
    if (outline && this.state.active) {
      return 'light';
    } else if (outline && !this.state.active) {
      return color;
    } else if (clear && color && color !== 'light' && color !== 'stable') {
      return color;
    } else if (!clear && color && color !== 'light' && color !== 'stable') {
      return 'light';
    }
    return null;
  }

  highlight() {
    this.setState({ active: true });
  }

  unhighlight() {
    this.setState({ active: false });
  }

  capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  render() {
    const contents = this.props.text ? this.props.text : this.props.children;
    const size = this.props.size
      ? `btn${this.capitalizeFirstLetter(this.props.size)}`
      : null;
    const full = this.props.full ? 'full' : null;
    const round = this.props.round ? 'round' : null;
    const clear = this.props.clear ? 'clear' : null;
    const outline = this.props.outline ? 'outline' : null;
    const color = this.props.color || null;
    const bgColor = color && !outline ? `${color}Bg` : 'transparent';
    const bgActiveColor = color ? `${color}Active` : null;
    const textSize = this.props.size
      ? `btnText${this.capitalizeFirstLetter(this.props.size)}`
      : null;
    const textColor = this.getTextColor(color, clear, outline);

    if (clear) {
      return (
        <TouchableOpacity {...this.props} style={{ borderRadius: 2 }}>
          <View
            style={[
              cs.container,
              styles.base,
              size && styles[size],
              full && styles[full],
              clear && styles[clear],
              this.props.style,
            ]}
          >
            <Text
              style={[
                textColor && cs[textColor],
                textSize && styles[textSize],
                cs.row,
              ]}
            >
              {contents}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableHighlight
        underlayColor={colors[bgActiveColor]}
        activeOpacity={1}
        onShowUnderlay={this.highlight}
        onHideUnderlay={this.unhighlight}
        {...this.props}
        style={[
          bgColor && cs[bgColor],
          !full && { borderRadius: 2 },
          round && styles[round],
        ]}
      >
        <View
          style={[
            cs.container,
            styles.base,
            size && styles[size],
            full && styles[full],
            outline && styles[outline],
            outline && { borderColor: colors[`${color}Active`] },
            this.props.style,
          ]}
        >
          <Text
            style={[
              textColor && cs[textColor],
              textSize && styles[textSize],
              cs.row,
            ]}
          >
            {contents}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  size: PropTypes.string,
  full: PropTypes.bool,
  round: PropTypes.bool,
  clear: PropTypes.bool,
  outline: PropTypes.bool,
  color: PropTypes.string,
  style: PropTypes.any,
};
Button.defaultProps = {
  color: 'stable',
};
