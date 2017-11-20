# yarn cache clean
rm -rf packages/carbon-native/node_modules
rm -rf packages/kitchen-sink/node_modules
yarn install

# cd ../kitchen-sink
# yarn unlink carbon-native
# cd packages/carbon-native
# yarn unlink

# cd packages/carbon-native
# yarn link
# cd ../kitchen-sink
# yarn link carbon-native