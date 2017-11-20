const fs = require('fs-extra');
const _ = require('lodash');

fs
  .readJson('./package.json')
  .then(data => {
    data.dependencies = _.omit(data.dependencies, [
      'expo',
      'react',
      'react-native',
    ]);

    data.private = false;

    return fs.writeJson('./dist/package.json', data, { spaces: 2 });
  })
  .then(() => console.log('package-lock.js finished!'))
  .catch(error => console.error('package-json.js error', error));
