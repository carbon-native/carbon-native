Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/note.js';exports.default=Note;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');var _styles=require('./styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var cs=_reactNative.StyleSheet.create(_styles.carbonStyles);var propTypes={children:_react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node),_react.PropTypes.node]),style:_react.PropTypes.any};var defaultProps={};function Note(props){return _react2.default.createElement(_reactNative.Text,_extends({},props,{style:[cs.note,props.style],__source:{fileName:_jsxFileName,lineNumber:28}}),props.children);}Note.propTypes=propTypes;Note.defaultProps=defaultProps;