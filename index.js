'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/index.js');
} else {
  console.log('NOW SERVING CARBON NATIVE DEVELOPMENT PACKAGE!');
  module.exports = require('./dist/index.js');
}
