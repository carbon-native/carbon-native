nvm use
rm -rf node_modules
rm -rf kitchen-sink/node_modules
rm kitchen-sink/yarn.lock
yarn
cd kitchen-sink
yarn