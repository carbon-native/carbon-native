Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/list/item-header-text.js';exports.default=ItemHeaderText;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _styles=require('../styles');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var cs=_reactNative.StyleSheet.create(_styles.carbonStyles);var styles=_reactNative.StyleSheet.create({flex:1,marginVertical:12,fontSize:14,fontWeight:'600'});function ItemHeaderText(props){return _react2.default.createElement(_reactNative.Text,_extends({},props,{style:[styles,props.style],__source:{fileName:_jsxFileName,lineNumber:17}}),props.children);}ItemHeaderText.propTypes={children:_propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node),_propTypes2.default.node]),style:_propTypes2.default.any};ItemHeaderText.defaultProps={};