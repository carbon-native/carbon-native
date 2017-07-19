'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Badge;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  color: _react.PropTypes.string,
  style: _react.PropTypes.any,
  text: _react.PropTypes.string
};

var defaultProps = {
  color: 'stable'
};

function Badge(props) {
  var color = props.color;
  var bgColor = color + 'Bg';
  var textColor = color !== 'light' && color !== 'stable' ? 'light' : null;
  return _react2.default.createElement(
    _reactNative.View,
    _extends({}, props, {
      style: [cs.badge, bgColor && cs[bgColor], props.style]
    }),
    _react2.default.createElement(
      _reactNative.Text,
      { style: [cs.badgeText, textColor && cs[textColor]] },
      props.text
    )
  );
}

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.node,
  text: _react.PropTypes.string,
  size: _react.PropTypes.string,
  full: _react.PropTypes.bool,
  round: _react.PropTypes.bool,
  clear: _react.PropTypes.bool,
  outline: _react.PropTypes.bool,
  color: _react.PropTypes.string,
  style: _react.PropTypes.any
};

var defaultProps = {
  color: 'stable'
};

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.state = {
      active: false
    };
    _this.highlight = _this.highlight.bind(_this);
    _this.unhighlight = _this.unhighlight.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'getTextColor',
    value: function getTextColor(color, clear, outline) {
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
  }, {
    key: 'highlight',
    value: function highlight() {
      this.setState({ active: true });
    }
  }, {
    key: 'unhighlight',
    value: function unhighlight() {
      this.setState({ active: false });
    }
  }, {
    key: 'capitalizeFirstLetter',
    value: function capitalizeFirstLetter(string) {
      return string[0].toUpperCase() + string.slice(1);
    }
  }, {
    key: 'render',
    value: function render() {
      var contents = this.props.text ? this.props.text : this.props.children;
      var size = this.props.size ? 'btn' + this.capitalizeFirstLetter(this.props.size) : null;
      var full = this.props.full ? 'btnFull' : null;
      var round = this.props.round ? 'btnRound' : null;
      var clear = this.props.clear ? 'btnClear' : null;
      var outline = this.props.outline ? 'btnOutline' : null;
      var color = this.props.color || null;

      var bgColor = color && !outline ? color + 'Bg' : 'transparent';
      var bgActiveColor = color ? color + 'Active' : null;
      var textSize = this.props.size ? 'btnText' + this.capitalizeFirstLetter(this.props.size) : null;
      var textColor = this.getTextColor(color, clear, outline);

      if (clear) {
        return _react2.default.createElement(
          _reactNative.TouchableOpacity,
          _extends({}, this.props, {
            style: { borderRadius: 2 }
          }),
          _react2.default.createElement(
            _reactNative.View,
            {
              style: [cs.container, cs.btn, size && cs[size], full && cs[full], clear && cs[clear], this.props.style]
            },
            _react2.default.createElement(
              _reactNative.Text,
              { style: [textColor && cs[textColor], textSize && cs[textSize], cs.row] },
              contents
            )
          )
        );
      }
      return _react2.default.createElement(
        _reactNative.TouchableHighlight,
        _extends({
          underlayColor: _styles.colors[bgActiveColor],
          activeOpacity: 1,
          onShowUnderlay: this.highlight,
          onHideUnderlay: this.unhighlight
        }, this.props, {
          style: [bgColor && cs[bgColor], !full && { borderRadius: 2 }, round && cs[round]]
        }),
        _react2.default.createElement(
          _reactNative.View,
          {
            style: [cs.container, cs.btn, size && cs[size], full && cs[full], outline && cs[outline], outline && { borderColor: _styles.colors[color + 'Active'] }, this.props.style]
          },
          _react2.default.createElement(
            _reactNative.Text,
            { style: [textColor && cs[textColor], textSize && cs[textSize], cs.row] },
            contents
          )
        )
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Card;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function Card(props) {
  return _react2.default.createElement(
    _reactNative.View,
    _extends({
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 1,
      shadowRadius: 2
    }, props, {
      style: [cs.card, props.style]
    }),
    props.children
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Container;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  padding: _react.PropTypes.bool,
  style: _react.PropTypes.any
};

var defaultProps = {};

function Container(props) {
  return _react2.default.createElement(
    _reactNative.View,
    _extends({}, props, {
      style: [cs.container, props.padding && cs.padding, props.style]
    }),
    props.children
  );
}

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Content;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  padding: _react.PropTypes.bool,
  scroll: _react.PropTypes.bool,
  style: _react.PropTypes.any
};

var defaultProps = {
  scroll: true
};

function Content(props) {
  var contentStyle = [cs.container, props.padding && cs.padding, props.style];
  if (props.scroll === true) {
    return _react2.default.createElement(
      _reactNative.ScrollView,
      _extends({}, props, {
        style: contentStyle
      }),
      props.children
    );
  }
  return _react2.default.createElement(
    _reactNative.View,
    _extends({}, props, {
      style: contentStyle
    }),
    props.children
  );
}

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemIcon = exports.ItemHeaderText = exports.ItemText = exports.ItemContent = exports.Item = exports.List = exports.Container = exports.Content = exports.Toggle = exports.Range = exports.Note = exports.Badge = exports.Card = exports.Button = exports.ToolbarRight = exports.ToolbarLeft = exports.ToolbarTitle = exports.Toolbar = exports.A = exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.colors = exports.carbonStyles = undefined;

var _styles = require('./styles');

Object.defineProperty(exports, 'carbonStyles', {
  enumerable: true,
  get: function get() {
    return _styles.carbonStyles;
  }
});
Object.defineProperty(exports, 'colors', {
  enumerable: true,
  get: function get() {
    return _styles.colors;
  }
});

var _a = require('./typography/a');

var _a2 = _interopRequireDefault(_a);

var _h = require('./typography/h1');

var _h2 = _interopRequireDefault(_h);

var _h3 = require('./typography/h2');

var _h4 = _interopRequireDefault(_h3);

var _h5 = require('./typography/h3');

var _h6 = _interopRequireDefault(_h5);

var _h7 = require('./typography/h4');

var _h8 = _interopRequireDefault(_h7);

var _h9 = require('./typography/h5');

var _h10 = _interopRequireDefault(_h9);

var _h11 = require('./typography/h6');

var _h12 = _interopRequireDefault(_h11);

var _p = require('./typography/p');

var _p2 = _interopRequireDefault(_p);

var _toolbar = require('./toolbar/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _toolbarLeft = require('./toolbar/toolbar-left');

var _toolbarLeft2 = _interopRequireDefault(_toolbarLeft);

var _toolbarRight = require('./toolbar/toolbar-right');

var _toolbarRight2 = _interopRequireDefault(_toolbarRight);

var _toolbarTitle = require('./toolbar/toolbar-title');

var _toolbarTitle2 = _interopRequireDefault(_toolbarTitle);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _badge = require('./badge');

var _badge2 = _interopRequireDefault(_badge);

var _note = require('./note');

var _note2 = _interopRequireDefault(_note);

var _range = require('./range');

var _range2 = _interopRequireDefault(_range);

var _toggle = require('./toggle');

var _toggle2 = _interopRequireDefault(_toggle);

var _content = require('./content');

var _content2 = _interopRequireDefault(_content);

var _container = require('./container');

var _container2 = _interopRequireDefault(_container);

var _itemContent = require('./list/item-content');

var _itemContent2 = _interopRequireDefault(_itemContent);

var _itemHeaderText = require('./list/item-header-text');

var _itemHeaderText2 = _interopRequireDefault(_itemHeaderText);

var _itemIcon = require('./list/item-icon');

var _itemIcon2 = _interopRequireDefault(_itemIcon);

var _itemText = require('./list/item-text');

var _itemText2 = _interopRequireDefault(_itemText);

var _item = require('./list/item');

var _item2 = _interopRequireDefault(_item);

var _list = require('./list/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.H1 = _h2.default;
exports.H2 = _h4.default;
exports.H3 = _h6.default;
exports.H4 = _h8.default;
exports.H5 = _h10.default;
exports.H6 = _h12.default;
exports.P = _p2.default;
exports.A = _a2.default;
exports.Toolbar = _toolbar2.default;
exports.ToolbarTitle = _toolbarTitle2.default;
exports.ToolbarLeft = _toolbarLeft2.default;
exports.ToolbarRight = _toolbarRight2.default;
exports.Button = _button2.default;
exports.Card = _card2.default;
exports.Badge = _badge2.default;
exports.Note = _note2.default;
exports.Range = _range2.default;
exports.Toggle = _toggle2.default;
exports.Content = _content2.default;
exports.Container = _container2.default;
exports.List = _list2.default;
exports.Item = _item2.default;
exports.ItemContent = _itemContent2.default;
exports.ItemText = _itemText2.default;
exports.ItemHeaderText = _itemHeaderText2.default;
exports.ItemIcon = _itemIcon2.default;
exports.default = {
  H1: _h2.default,
  H2: _h4.default,
  H3: _h6.default,
  H4: _h8.default,
  H5: _h10.default,
  H6: _h12.default,
  P: _p2.default,
  A: _a2.default,
  Toolbar: _toolbar2.default,
  ToolbarTitle: _toolbarTitle2.default,
  ToolbarLeft: _toolbarLeft2.default,
  ToolbarRight: _toolbarRight2.default,
  Button: _button2.default,
  Card: _card2.default,
  Badge: _badge2.default,
  Note: _note2.default,
  Range: _range2.default,
  Toggle: _toggle2.default,
  Content: _content2.default,
  Container: _container2.default,
  List: _list2.default,
  Item: _item2.default,
  ItemContent: _itemContent2.default,
  ItemText: _itemText2.default,
  ItemHeaderText: _itemHeaderText2.default,
  ItemIcon: _itemIcon2.default
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.Item = exports.ItemText = exports.ItemIcon = exports.ItemHeaderText = exports.ItemContent = undefined;

var _itemContent = require('./item-content');

var _itemContent2 = _interopRequireDefault(_itemContent);

var _itemHeaderText = require('./item-header-text');

var _itemHeaderText2 = _interopRequireDefault(_itemHeaderText);

var _itemIcon = require('./item-icon');

var _itemIcon2 = _interopRequireDefault(_itemIcon);

var _itemText = require('./item-text');

var _itemText2 = _interopRequireDefault(_itemText);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ItemContent = _itemContent2.default;
exports.ItemHeaderText = _itemHeaderText2.default;
exports.ItemIcon = _itemIcon2.default;
exports.ItemText = _itemText2.default;
exports.Item = _item2.default;
exports.List = _list2.default;
exports.default = {
  ItemContent: _itemContent2.default,
  ItemHeaderText: _itemHeaderText2.default,
  ItemIcon: _itemIcon2.default,
  ItemText: _itemText2.default,
  Item: _item2.default,
  List: _list2.default
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ItemContent;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  line: _react.PropTypes.bool,
  style: _react.PropTypes.any
};

var defaultProps = {
  line: true
};

function ItemContent(props) {
  var itemNoLine = !props.line;
  return _react2.default.createElement(
    _reactNative.View,
    _extends({}, props, {
      style: [cs.itemContent, itemNoLine && cs.itemNoLine, props.style]
    }),
    props.children
  );
}

ItemContent.propTypes = propTypes;
ItemContent.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ItemHeaderText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function ItemHeaderText(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.itemText, cs.itemHeaderText, props.style]
    }),
    props.children
  );
}

ItemHeaderText.propTypes = propTypes;
ItemHeaderText.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ItemIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function ItemIcon(props) {
  return _react2.default.createElement(
    _reactNative.View,
    _extends({}, props, {
      style: [cs.itemIcon, props.style]
    }),
    props.children
  );
}

ItemIcon.propTypes = propTypes;
ItemIcon.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ItemText;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function ItemText(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.itemText, props.style]
    }),
    props.children
  );
}

ItemText.propTypes = propTypes;
ItemText.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Item;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  onPress: _react.PropTypes.func,
  style: _react.PropTypes.any
};

var defaultProps = {};

function Item(props) {
  if (props.onPress) {
    return _react2.default.createElement(
      _reactNative.TouchableHighlight,
      _extends({}, props, {
        underlayColor: '#DADADA',
        onPress: props.onPress
      }),
      _react2.default.createElement(
        _reactNative.View,
        { style: [cs.item, props.style] },
        props.children
      )
    );
  }
  return _react2.default.createElement(
    _reactNative.View,
    null,
    _react2.default.createElement(
      _reactNative.View,
      _extends({}, props, {
        style: [cs.item, props.style]
      }),
      props.children
    )
  );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = List;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function List(props) {
  return _react2.default.createElement(
    _reactNative.View,
    _extends({}, props, {
      style: [cs.list, props.style]
    }),
    props.children
  );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Note;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function Note(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.note, props.style]
    }),
    props.children
  );
}

Note.propTypes = propTypes;
Note.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Toggle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  color: _react.PropTypes.string,
  style: _react.PropTypes.any
};

var defaultProps = {
  color: 'stable'
};

function Toggle(props) {
  // const color = colors[props.color];
  return _react2.default.createElement(_reactNative.Slider, _extends({}, props, {
    style: [props.style]
  }));
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carbonStyles = exports.colors = undefined;

var _reactNative = require('react-native');

// colors
// light, stable, primary, calm, secondary, energized, danger, royal, dark
var colors = exports.colors = {
  light: '#fff',
  lightActive: '#fff', // @todo: update active color
  stable: '#f8f8f8',
  stableActive: '#e0e0e0',
  primary: '#337AF9',
  primaryActive: '#3474e1',
  calm: '#11c1f3',
  calmActive: '#11c1f3', // @todo: update active color
  secondary: '#22DD5E',
  secondaryActive: '#2ec95c',
  energized: '#FFC600',
  energizedActive: '#FFC600', // @todo: update active color
  danger: '#F83B36',
  dangerActive: '#e13838',
  royal: '#7E59FF',
  royalActive: '#7E59FF', // @todo: update active color
  dark: '#222',
  darkActive: '#343434'
};

var carbonStyles = exports.carbonStyles = {

  // container
  container: {
    flex: 1
    // backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  // typography
  h1: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 36
  },
  h2: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 30
  },
  h3: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 24
  },
  h4: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 18
  },
  h5: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 14
  },
  h6: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 12
  },
  p: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  a: {
    color: colors.primary
  },
  textLeft: {
    textAlign: 'left'
  },
  textCenter: {
    textAlign: 'center'
  },
  textRight: {
    textAlign: 'right'
  },

  // toolbar
  toolbar: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toolbarHeader: {
    height: 64,
    paddingTop: 20
  },
  toolbarFooter: {
    // stuff
  },
  toolbarTitle: {
    fontWeight: '600'
    // ...Platform.select({
    //   ios: {
    //     fontSize: 17,
    //   },
    //   android: {
    //     fontSize: 20,
    //   },
    // }),
  },
  toolbarLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    paddingRight: 6,
    paddingVertical: 8
  },
  toolbarRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    paddingLeft: 6,
    paddingVertical: 8
  },

  // button
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 2
  },
  btnOutline: {
    borderWidth: 1
  },
  btnClear: {
    borderWidth: 0,
    backgroundColor: 'transparent'
  },
  btnRound: {
    borderRadius: 50
  },
  btnFull: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0
  },
  btnXsm: {
    paddingHorizontal: 10,
    paddingVertical: 4
  },
  btnSm: {
    paddingHorizontal: 4,
    paddingVertical: 8
  },
  btnTextSm: {
    fontSize: 12
  },
  btnLg: {
    padding: 16
  },
  btnTextLg: {
    fontSize: 20
  },

  // list
  list: {
    // alignSelf: 'stretch',
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
    borderColor: '#CDCDCD',
    backgroundColor: '#fff'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  itemLast: {
    borderBottomWidth: 0
  },
  itemContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 15,
    borderBottomColor: '#CDCDCD',
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth
  },
  itemText: {
    flex: 1,
    marginVertical: 12,
    fontSize: 17,
    fontWeight: '400'
  },
  itemIcon: {
    width: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14
  },
  note: {
    fontSize: 14,
    color: '#AEACB4'
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 50
  },
  badgeText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  },
  itemNoLine: {
    borderBottomColor: 'transparent'
  },
  itemHeader: {
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
    borderBottomColor: '#CDCDCD'
  },
  itemHeaderText: {
    fontSize: 14,
    fontWeight: '600'
  },
  itemDivider: {
    backgroundColor: colors.stable
  },
  itemDividerText: {
    fontWeight: 'bold'
  },

  // card
  card: {
    // margin: 10,
    marginBottom: 20,
    borderRadius: 2,
    backgroundColor: '#fff'
  },

  // colors
  // light, stable, primary, calm, secondary, energized, danger, royal, dark
  light: {
    color: colors.light
  },
  lightBg: {
    backgroundColor: colors.light
  },
  lightBgActive: {
    backgroundColor: colors.lightActive
  },
  stable: {
    color: colors.stable
  },
  stableBg: {
    backgroundColor: colors.stable
  },
  stableBgActive: {
    backgroundColor: colors.stableActive
  },
  primary: {
    color: colors.primary
  },
  primaryBg: {
    backgroundColor: colors.primary
  },
  primaryBgActive: {
    backgroundColor: colors.primaryActive
  },
  calm: {
    color: colors.calm
  },
  calmBg: {
    backgroundColor: colors.calm
  },
  calmBgActive: {
    backgroundColor: colors.calmActive
  },
  secondary: {
    color: colors.secondary
  },
  secondaryBg: {
    backgroundColor: colors.secondary
  },
  secondaryBgActive: {
    backgroundColor: colors.secondaryActive
  },
  energized: {
    color: colors.energized
  },
  energizedBg: {
    backgroundColor: colors.energized
  },
  energizedBgActive: {
    backgroundColor: colors.energizedActive
  },
  danger: {
    color: colors.danger
  },
  dangerBg: {
    backgroundColor: colors.danger
  },
  dangerBgActive: {
    backgroundColor: colors.dangerActive
  },
  royal: {
    color: colors.royal
  },
  royalBg: {
    backgroundColor: colors.royal
  },
  royalBgActive: {
    backgroundColor: colors.royalActive
  },
  dark: {
    color: colors.dark
  },
  darkBg: {
    backgroundColor: colors.dark
  },
  darkBgActive: {
    backgroundColor: colors.darkActive
  },

  // margin
  margin: {
    margin: 10
  },
  marginVertical: {
    marginVertical: 10
  },
  marginHorizontal: {
    marginHorizontal: 10
  },
  marginTop: {
    marginTop: 10
  },
  marginRight: {
    marginRight: 10
  },
  marginBottom: {
    marginBottom: 10
  },
  marginLeft: {
    marginLeft: 10
  },

  // padding
  padding: {
    padding: 10
  },
  paddingVertical: {
    paddingVertical: 10
  },
  paddingHorizontal: {
    paddingHorizontal: 10
  },
  paddingTop: {
    paddingTop: 10
  },
  paddingRight: {
    paddingRight: 10
  },
  paddingBottom: {
    paddingBottom: 10
  },
  paddingLeft: {
    paddingLeft: 10
  },

  paddingLg: {
    padding: 15
  },
  paddingXl: {
    padding: 20
  }
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Toggle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  color: _react.PropTypes.string,
  style: _react.PropTypes.any
};

var defaultProps = {
  color: 'stable'
};

function Toggle(props) {
  var color = _styles.colors[props.color];
  return _react2.default.createElement(_reactNative.Switch, _extends({
    tintColor: '#E5E5E5',
    onTintColor: color
  }, props, {
    style: [props.style]
  }));
}

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolbarTitle = exports.ToolbarRight = exports.ToolbarLeft = exports.Toolbar = undefined;

var _toolbar = require('./toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _toolbarLeft = require('./toolbar-left');

var _toolbarLeft2 = _interopRequireDefault(_toolbarLeft);

var _toolbarRight = require('./toolbar-right');

var _toolbarRight2 = _interopRequireDefault(_toolbarRight);

var _toolbarTitle = require('./toolbar-title');

var _toolbarTitle2 = _interopRequireDefault(_toolbarTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Toolbar = _toolbar2.default;
exports.ToolbarLeft = _toolbarLeft2.default;
exports.ToolbarRight = _toolbarRight2.default;
exports.ToolbarTitle = _toolbarTitle2.default;
exports.default = {
  Toolbar: _toolbar2.default,
  ToolbarLeft: _toolbarLeft2.default,
  ToolbarRight: _toolbarRight2.default,
  ToolbarTitle: _toolbarTitle2.default
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ToolbarLeft;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  color: _react.PropTypes.number,
  footer: _react.PropTypes.bool,
  header: _react.PropTypes.bool,
  style: _react.PropTypes.any
};

var defaultProps = {};

function ToolbarLeft(props) {
  return _react2.default.createElement(
    _reactNative.View,
    _extends({}, props, {
      style: [cs.container, cs.toolbarLeft, props.style]
    }),
    props.children
  );
}

ToolbarLeft.propTypes = propTypes;
ToolbarLeft.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ToolbarRight;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  color: _react.PropTypes.number,
  footer: _react.PropTypes.bool,
  header: _react.PropTypes.bool,
  style: _react.PropTypes.any
};

var defaultProps = {};

function ToolbarRight(props) {
  return _react2.default.createElement(
    _reactNative.View,
    _extends({}, props, {
      style: [cs.container, cs.toolbarRight, props.style]
    }),
    props.children
  );
}

ToolbarRight.propTypes = propTypes;
ToolbarRight.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ToolbarTitle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  color: _react.PropTypes.string,
  footer: _react.PropTypes.bool,
  header: _react.PropTypes.bool,
  style: _react.PropTypes.any
};

var defaultProps = {};

function ToolbarTitle(props) {
  var color = props.color ? props.color : null;
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.toolbarTitle, color && cs[color]]
    }),
    props.children
  );
}

ToolbarTitle.propTypes = propTypes;
ToolbarTitle.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Toolbar;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node]),
  color: _react.PropTypes.string,
  footer: _react.PropTypes.bool,
  header: _react.PropTypes.bool,
  style: _react.PropTypes.any
};

var defaultProps = {};

function Toolbar(props) {
  var color = props.color ? props.color : null;
  var bgColor = color ? color + 'Bg' : null;
  var header = props.header ? 'toolbarHeader' : null;
  var footer = props.footer ? 'toolbarFooter' : null;
  return _react2.default.createElement(
    _reactNative.View,
    _extends({}, props, {
      style: [cs.toolbar, header && cs[header], footer && cs[footer], bgColor && cs[bgColor], props.style]
    }),
    props.children
  );
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = A;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node, _react.PropTypes.string]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function A(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.a, props.style]
    }),
    props.children
  );
}

A.propTypes = propTypes;
A.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = H1;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node, _react.PropTypes.string]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function H1(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.h1, props.style]
    }),
    props.children
  );
}

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = H2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node, _react.PropTypes.string]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function H2(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.h2, props.style]
    }),
    props.children
  );
}

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = H3;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node, _react.PropTypes.string]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function H3(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.h3, props.style]
    }),
    props.children
  );
}

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = H4;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node, _react.PropTypes.string]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function H4(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.h4, props.style]
    }),
    props.children
  );
}

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = H5;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node, _react.PropTypes.string]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function H5(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.h5, props.style]
    }),
    props.children
  );
}

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = H6;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node, _react.PropTypes.string]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function H6(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.h6, props.style]
    }),
    props.children
  );
}

H6.propTypes = propTypes;
H6.defaultProps = defaultProps;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.A = undefined;

var _a = require('./a');

var _a2 = _interopRequireDefault(_a);

var _h = require('./h1');

var _h2 = _interopRequireDefault(_h);

var _h3 = require('./h2');

var _h4 = _interopRequireDefault(_h3);

var _h5 = require('./h3');

var _h6 = _interopRequireDefault(_h5);

var _h7 = require('./h4');

var _h8 = _interopRequireDefault(_h7);

var _h9 = require('./h5');

var _h10 = _interopRequireDefault(_h9);

var _h11 = require('./h6');

var _h12 = _interopRequireDefault(_h11);

var _p = require('./p');

var _p2 = _interopRequireDefault(_p);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.A = _a2.default;
exports.H1 = _h2.default;
exports.H2 = _h4.default;
exports.H3 = _h6.default;
exports.H4 = _h8.default;
exports.H5 = _h10.default;
exports.H6 = _h12.default;
exports.P = _p2.default;
exports.default = {
  A: _a2.default,
  H1: _h2.default,
  H2: _h4.default,
  H3: _h6.default,
  H4: _h8.default,
  H5: _h10.default,
  H6: _h12.default,
  P: _p2.default
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = P;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _styles = require('../styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cs = _reactNative.StyleSheet.create(_styles.carbonStyles);

var propTypes = {
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node, _react.PropTypes.string]),
  style: _react.PropTypes.any
};

var defaultProps = {};

function P(props) {
  return _react2.default.createElement(
    _reactNative.Text,
    _extends({}, props, {
      style: [cs.p, props.style]
    }),
    props.children
  );
}

P.propTypes = propTypes;
P.defaultProps = defaultProps;
