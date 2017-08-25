'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./src/index.js');
} else {
  console.log('NOW SERVING CARBON NATIVE DEVELOPMENT PACKAGE!');
  module.exports = require('./src/index.js');
}
