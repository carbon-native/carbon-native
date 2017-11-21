const fs = require('fs-extra');
const _ = require('lodash');
const { to } = require('await-to-js');

(async function() {
  const [error1, data] = await to(fs.readJson('./package.json'));
  if (error1) return console.error(error1);

  data.dependencies = _.omit(data.dependencies, [
    'expo',
    'react',
    'react-native',
  ]);

  data.private = false;

  const [error2] = await to(
    fs.writeJson('./dist/package.json', data, { spaces: 2 })
  );
  if (error2) return console.error(error2);
})();
