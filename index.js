import ItemContent from './item-content';
import ItemHeaderText from './item-header-text';
import ItemIcon from './item-icon';
import ItemText from './item-text';
import Item from './item';
import List from './list';

export { ItemContent };
export { ItemHeaderText };
export { ItemIcon };
export { ItemText };
export { Item };
export { List };

export default {
  ItemContent,
  ItemHeaderText,
  ItemIcon,
  ItemText,
  Item,
  List
};
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, View } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  line: PropTypes.bool,
  style: PropTypes.any
};

const defaultProps = {
  line: true
};

export default function ItemContent(props) {
  const itemNoLine = !props.line;
  return React.createElement(
    View,
    _extends({}, props, {
      style: [cs.itemContent, itemNoLine && cs.itemNoLine, props.style]
    }),
    props.children
  );
}

ItemContent.propTypes = propTypes;
ItemContent.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.any
};

const defaultProps = {};

export default function ItemHeaderText(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.itemText, cs.itemHeaderText, props.style]
    }),
    props.children
  );
}

ItemHeaderText.propTypes = propTypes;
ItemHeaderText.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, View } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.any
};

const defaultProps = {};

export default function ItemIcon(props) {
  return React.createElement(
    View,
    _extends({}, props, {
      style: [cs.itemIcon, props.style]
    }),
    props.children
  );
}

ItemIcon.propTypes = propTypes;
ItemIcon.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.any
};

const defaultProps = {};

export default function ItemText(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.itemText, props.style]
    }),
    props.children
  );
}

ItemText.propTypes = propTypes;
ItemText.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, TouchableHighlight, View } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onPress: PropTypes.func,
  style: PropTypes.any
};

const defaultProps = {};

export default function Item(props) {
  if (props.onPress) {
    return React.createElement(
      TouchableHighlight,
      _extends({}, props, {
        underlayColor: '#DADADA',
        onPress: props.onPress
      }),
      React.createElement(
        View,
        { style: [cs.item, props.style] },
        props.children
      )
    );
  }
  return React.createElement(
    View,
    null,
    React.createElement(
      View,
      _extends({}, props, {
        style: [cs.item, props.style]
      }),
      props.children
    )
  );
}

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, View } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.any
};

const defaultProps = {};

export default function List(props) {
  return React.createElement(
    View,
    _extends({}, props, {
      style: [cs.list, props.style]
    }),
    props.children
  );
}

List.propTypes = propTypes;
List.defaultProps = defaultProps;
import Toolbar from './toolbar';
import ToolbarLeft from './toolbar-left';
import ToolbarRight from './toolbar-right';
import ToolbarTitle from './toolbar-title';

export { Toolbar };
export { ToolbarLeft };
export { ToolbarRight };
export { ToolbarTitle };

export default {
  Toolbar,
  ToolbarLeft,
  ToolbarRight,
  ToolbarTitle
};
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, View } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  color: PropTypes.number,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any
};

const defaultProps = {};

export default function ToolbarLeft(props) {
  return React.createElement(
    View,
    _extends({}, props, {
      style: [cs.container, cs.toolbarLeft, props.style]
    }),
    props.children
  );
}

ToolbarLeft.propTypes = propTypes;
ToolbarLeft.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, View } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  color: PropTypes.number,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any
};

const defaultProps = {};

export default function ToolbarRight(props) {
  return React.createElement(
    View,
    _extends({}, props, {
      style: [cs.container, cs.toolbarRight, props.style]
    }),
    props.children
  );
}

ToolbarRight.propTypes = propTypes;
ToolbarRight.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  color: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any
};

const defaultProps = {};

export default function ToolbarTitle(props) {
  const color = props.color ? props.color : null;
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.toolbarTitle, color && cs[color]]
    }),
    props.children
  );
}

ToolbarTitle.propTypes = propTypes;
ToolbarTitle.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, View } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  color: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  style: PropTypes.any
};

const defaultProps = {};

export default function Toolbar(props) {
  const color = props.color ? props.color : null;
  const bgColor = color ? `${color}Bg` : null;
  const header = props.header ? 'toolbarHeader' : null;
  const footer = props.footer ? 'toolbarFooter' : null;
  return React.createElement(
    View,
    _extends({}, props, {
      style: [cs.toolbar, header && cs[header], footer && cs[footer], bgColor && cs[bgColor], props.style]
    }),
    props.children
  );
}

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any
};

const defaultProps = {};

export default function A(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.a, props.style]
    }),
    props.children
  );
}

A.propTypes = propTypes;
A.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any
};

const defaultProps = {};

export default function H1(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.h1, props.style]
    }),
    props.children
  );
}

H1.propTypes = propTypes;
H1.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any
};

const defaultProps = {};

export default function H2(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.h2, props.style]
    }),
    props.children
  );
}

H2.propTypes = propTypes;
H2.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any
};

const defaultProps = {};

export default function H3(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.h3, props.style]
    }),
    props.children
  );
}

H3.propTypes = propTypes;
H3.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any
};

const defaultProps = {};

export default function H4(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.h4, props.style]
    }),
    props.children
  );
}

H4.propTypes = propTypes;
H4.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any
};

const defaultProps = {};

export default function H5(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.h5, props.style]
    }),
    props.children
  );
}

H5.propTypes = propTypes;
H5.defaultProps = defaultProps;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any
};

const defaultProps = {};

export default function H6(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.h6, props.style]
    }),
    props.children
  );
}

H6.propTypes = propTypes;
H6.defaultProps = defaultProps;
import A from './a';
import H1 from './h1';
import H2 from './h2';
import H3 from './h3';
import H4 from './h4';
import H5 from './h5';
import H6 from './h6';
import P from './p';

export { A };
export { H1 };
export { H2 };
export { H3 };
export { H4 };
export { H5 };
export { H6 };
export { P };

export default {
  A,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P
};
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { PropTypes } from 'react';

import { StyleSheet, Text } from 'react-native';

import { carbonStyles } from '../styles';

const cs = StyleSheet.create(carbonStyles);

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
  style: PropTypes.any
};

const defaultProps = {};

export default function P(props) {
  return React.createElement(
    Text,
    _extends({}, props, {
      style: [cs.p, props.style]
    }),
    props.children
  );
}

P.propTypes = propTypes;
P.defaultProps = defaultProps;
