const fs = require('fs-extra');
const _ = require('lodash');
const { to } = require('await-to-js');

(async function() {
  const [error1] = await to(fs.copy('./README.md', './dist/README.md'));
  if (error1) return console.error(error1);
})();
