import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  carbonStyles,
  colors,
} from './styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
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

const defaultProps = {
  color: 'stable',
};

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
    const contents = (this.props.text) ? this.props.text : this.props.children;
    const size = (this.props.size) ? (`btn${this.capitalizeFirstLetter(this.props.size)}`) : null;
    const full = (this.props.full) ? 'btnFull' : null;
    const round = (this.props.round) ? 'btnRound' : null;
    const clear = (this.props.clear) ? 'btnClear' : null;
    const outline = (this.props.outline) ? 'btnOutline' : null;
    const color = this.props.color || null;

    const bgColor = (color && !outline) ? (`${color}Bg`) : 'transparent';
    const bgActiveColor = (color) ? (`${color}Active`) : null;
    const textSize = (this.props.size)
      ? (`btnText${this.capitalizeFirstLetter(this.props.size)}`)
      : null;
    const textColor = this.getTextColor(color, clear, outline);

    if (clear) {
      return (
        <TouchableOpacity
          {...this.props}
          style={{ borderRadius: 2 }}
        >
          <View
            style={[
              cs.container,
              cs.btn,
              size && cs[size],
              full && cs[full],
              clear && cs[clear],
              this.props.style,
            ]}
          >
            <Text style={[textColor && cs[textColor], textSize && cs[textSize], cs.row]}>
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
        style={[bgColor && cs[bgColor], !full && { borderRadius: 2 }, round && cs[round]]}
      >
        <View
          style={[
            cs.container,
            cs.btn,
            size && cs[size],
            full && cs[full],
            outline && cs[outline],
            outline && { borderColor: colors[`${color}Active`] },
            this.props.style,
          ]}
        >
          <Text style={[textColor && cs[textColor], textSize && cs[textSize], cs.row]}>
            {contents}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
