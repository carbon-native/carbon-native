#!/bin/bash
set -e

yarn build
yarn test-dist

echo "patch, minor, or major release? "
read release_type

if [ "$release_type" == "patch" ] ; then
    version=$(npm version patch)
fi
if [ "$release_type" == "minor" ] ; then
    version=$(npm version minor)
fi
if [ "$release_type" == "major" ] ; then
    version=$(npm version major)
fi

yarn package-json

echo "Are you sure you want to publish $version (yes\no)? "
read yesno

if [ "$yesno" == "yes" ] ; then
    git push --follow-tags
    cd dist
    npm publish
fi
