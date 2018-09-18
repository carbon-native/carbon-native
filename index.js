'use strict';

if (process.env.NODE_ENV === 'production') {
  // module.exports = require('./dist/index.js');
  require('./node_modules/expo/AppEntry.js');
} else {
  console.log('NOW SERVING CARBON NATIVE DEVELOPMENT PACKAGE!');
  require('./node_modules/expo/AppEntry.js');
}
